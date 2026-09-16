#!/usr/bin/env node
/**
 * Upload git-backed images in public/images to Cloudflare Images (hosted storage).
 *
 * Custom IDs match local paths without extension, e.g.
 *   public/images/hero/modern-nevada-home.jpg
 *     → images/hero/modern-nevada-home
 *
 * Docs (2026):
 *   https://developers.cloudflare.com/images/optimization/hosted-images/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN   Account.Cloudflare Images:Edit
 *
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID  defaults to this site's Images account
 *   CF_IMAGES_SKIP_EXISTING=1  Skip 409 conflicts (default)
 *
 * Usage: node scripts/upload-to-cloudflare-images.mjs
 *
 * Agent portraits stay on git and are not uploaded.
 */

const fs = require("fs");
const path = require("path");

const DEFAULT_ACCOUNT_ID = "2cc579c1ec9e426ed585e933ebf4753b";
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || DEFAULT_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const SKIP_EXISTING = process.env.CF_IMAGES_SKIP_EXISTING !== "0";
const ROOT = path.join(__dirname, "..", "public", "images");
const PUBLIC_ROOT = path.join(__dirname, "..", "public");
const ENDPOINT = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`;

const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (EXT.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

function publicRel(filePath) {
  return path.relative(PUBLIC_ROOT, filePath).replace(/\\/g, "/");
}

function isPortrait(rel) {
  return rel.startsWith("images/agent/") || rel === "images/dr-jan-duffy.jpg";
}

async function upload(filePath) {
  const rel = publicRel(filePath);
  const id = rel.replace(/\.(jpe?g|png|webp|avif|gif)$/i, "");
  const form = new FormData();
  form.append("id", id);
  form.append(
    "file",
    new Blob([fs.readFileSync(filePath)]),
    path.basename(filePath),
  );
  form.append(
    "metadata",
    JSON.stringify({
      gitPath: `public/${rel}`,
      site: "nevadarealestatemarket.com",
    }),
  );

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  });
  const json = await res.json().catch(() => ({}));
  if (json.success) {
    const variant = json.result?.variants?.[0] || "";
    console.log(`OK  ${id}  ${variant}`);
    return "ok";
  }
  const msg = json.errors?.[0]?.message || res.statusText;
  const blob = JSON.stringify(json);
  if (SKIP_EXISTING && /already exist|duplicate|409/i.test(blob)) {
    console.log(`SKIP ${id}  (already uploaded)`);
    return "skip";
  }
  if (res.status === 401 || res.status === 403) {
    console.error(
      `AUTH ${id}  ${msg} — token needs Account.Cloudflare Images:Edit on ${ACCOUNT_ID}`,
    );
    return "fail";
  }
  console.error(`FAIL ${id}  ${msg}`);
  return "fail";
}

async function main() {
  if (!TOKEN) {
    console.error("Set CLOUDFLARE_API_TOKEN (Account.Cloudflare Images:Edit).");
    console.error("Git copies in public/images remain the backup source.");
    process.exit(1);
  }
  const files = walk(ROOT);
  const portraits = files.filter((file) => isPortrait(publicRel(file)));
  const uploads = files.filter((file) => !isPortrait(publicRel(file)));
  console.log(
    `Uploading ${uploads.length} images to Cloudflare Images (account ${ACCOUNT_ID}); skipping ${portraits.length} portraits…`,
  );
  let ok = 0;
  let skip = 0;
  let fail = 0;
  for (const file of uploads) {
    const result = await upload(file);
    if (result === "ok") ok += 1;
    else if (result === "skip") skip += 1;
    else fail += 1;
  }
  console.log(
    `Done. ok=${ok} skip=${skip} fail=${fail} portraits=${portraits.length} planned=${uploads.length}`,
  );
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
