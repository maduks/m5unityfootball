#!/usr/bin/env node

/**
 * Script to verify webfonts are accessible
 */

const fs = require("fs");
const path = require("path");

const webfontsDir = path.join(__dirname, "../public/webfonts");
const requiredFonts = ["fa-brands-400.woff2", "fa-solid-900.woff2"];

console.log("🔍 Verifying webfonts...\n");

if (!fs.existsSync(webfontsDir)) {
  console.error("❌ webfonts directory not found:", webfontsDir);
  console.log("\n💡 Run: cp -r webfonts public/");
  process.exit(1);
}

let allFound = true;
requiredFonts.forEach((font) => {
  const fontPath = path.join(webfontsDir, font);
  if (fs.existsSync(fontPath)) {
    const stats = fs.statSync(fontPath);
    console.log(`✅ ${font} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.error(`❌ ${font} - NOT FOUND`);
    allFound = false;
  }
});

if (allFound) {
  console.log("\n✅ All required webfonts are present!");
  console.log("\n📝 Next steps:");
  console.log("   1. Ensure fonts.css is imported in globals.css");
  console.log("   2. Check browser console for font loading errors");
  console.log("   3. Verify Network tab shows successful font requests");
} else {
  console.log("\n❌ Some webfonts are missing!");
  console.log("   Copy webfonts from original template:");
  console.log("   cp -r webfonts public/");
  process.exit(1);
}


