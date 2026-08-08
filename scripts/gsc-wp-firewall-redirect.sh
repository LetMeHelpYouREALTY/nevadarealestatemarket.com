#!/usr/bin/env bash
# Stage Vercel Firewall rules that 301 legacy WordPress paths to /
# instead of platform 403 denies (fixes GSC “Blocked due to access forbidden”).
#
# Prerequisites: `npx vercel login` and `npx vercel link` in this repo.
# Then run:
#   bash scripts/gsc-wp-firewall-redirect.sh
#   npx vercel firewall diff
#   npx vercel firewall publish --yes   # you confirm publish

set -euo pipefail

cd "$(dirname "$0")/.."

echo "Staging Firewall redirect rules for WordPress legacy paths..."

npx vercel firewall rules add "GSC: Redirect wp-content to home" \
  --condition '{"type":"path","op":"pre","value":"/wp-content"}' \
  --action redirect \
  --redirect-location "/" \
  --redirect-status-code 301 \
  --yes

npx vercel firewall rules add "GSC: Redirect wp-admin to home" \
  --condition '{"type":"path","op":"pre","value":"/wp-admin"}' \
  --action redirect \
  --redirect-location "/" \
  --redirect-status-code 301 \
  --yes

npx vercel firewall rules add "GSC: Redirect wp-*.php to home" \
  --condition '{"type":"path","op":"re","value":"^/wp-.*\\.php$"}' \
  --action redirect \
  --redirect-location "/" \
  --redirect-status-code 301 \
  --yes

npx vercel firewall rules add "GSC: Redirect xmlrpc.php to home" \
  --condition '{"type":"path","op":"eq","value":"/xmlrpc.php"}' \
  --action redirect \
  --redirect-location "/" \
  --redirect-status-code 301 \
  --yes

npx vercel firewall rules reorder "GSC: Redirect wp-content to home" --first --yes

echo ""
echo "Draft staged. Review with: npx vercel firewall diff"
echo "Publish with:             npx vercel firewall publish --yes"
echo "Then in GSC → Blocked due to access forbidden (403) → Validate fix"
