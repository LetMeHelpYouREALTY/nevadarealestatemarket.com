#!/usr/bin/env node
/**
 * Upload git-backed images in public/images to Cloudflare Images.
 *
 * Custom IDs match local paths without extension, e.g.
 *   public/images/hero/modern-nevada-home.jpg
 *     → images/hero/modern-nevada-home
 *
 * Docs (Apr 2026): https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN   Account.Cloudflare Images:Edit
 *   CLOUDFLARE_ACCOUNT_ID
 *
 * Optional:
 *   CF_IMAGES_SKIP_EXISTING=1  Skip 409 conflicts
 *
 * Usage: node scripts/upload-to-cloudflare-images.mjs
 */

const fs = require("fs");
const path = require("path");

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const SKIP_EXISTING = process.env.CF_IMAGES_SKIP_EXISTING !== "0";
const ROOT = path.join(__dirname, "..", "public", "images");
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

async function upload(filePath) {
  const rel = path.relative(path.join(__dirname, "..", "public"), filePath).replace(/\\/g, "/");
  const id = rel.replace(/\.(jpe?g|png|webp|avif|gif)$/i, "");
  const form = new FormData();
  form.append("id", id);
  form.append("file", new Blob([fs.readFileSync(filePath)]), path.basename(filePath));
  form.append("metadata", JSON.stringify({ gitPath: `public/${rel}`, site: "nevadarealestatemarket.com" }));

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  });
  const json = await res.json();
  if (json.success) {
    const variant = json.result?.variants?.[0] || "";
    console.log(`OK  ${id}  ${variant}`);
    return "ok";
  }
  const msg = json.errors?.[0]?.message || res.statusText;
  if (SKIP_EXISTING && /already exist|duplicate|409/i.test(JSON.stringify(json))) {
    console.log(`SKIP ${id}  (already uploaded)`);
    return "skip";
  }
  console.error(`FAIL ${id}  ${msg}`);
  return "fail";
}

async function main() {
  if (!ACCOUNT_ID || !TOKEN) {
    console.error("Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.");
    console.error("Git copies in public/images remain the backup source.");
    process.exit(1);
  }
  const files = walk(ROOT);
  console.log(`Uploading ${files.length} images to Cloudflare Images (account ${ACCOUNT_ID})…`);
  let ok = 0;
  let skip = 0;
  let fail = 0;
  for (const file of files) {
    const result = await upload(file);
    if (result === "ok") ok += 1;
    else if (result === "skip") skip += 1;
    else fail += 1;
  }
  console.log(`Done. ok=${ok} skip=${skip} fail=${fail} planned=${files.length}`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
