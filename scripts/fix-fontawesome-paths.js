#!/usr/bin/env node

/**
 * Script to fix Font Awesome webfont paths in CSS
 * Replaces ../webfonts/ with /webfonts/ for Next.js compatibility
 */

const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, '../css/all.min.css');

if (!fs.existsSync(cssFile)) {
  console.error('❌ CSS file not found:', cssFile);
  process.exit(1);
}

console.log('🔧 Fixing Font Awesome paths in CSS...');

let cssContent = fs.readFileSync(cssFile, 'utf8');

// Replace relative paths with absolute paths
const originalContent = cssContent;
cssContent = cssContent.replace(/url\(\.\.\/webfonts\//g, 'url(/webfonts/');

if (cssContent !== originalContent) {
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('✅ Fixed Font Awesome paths in all.min.css');
  console.log('   Changed: ../webfonts/ → /webfonts/');
} else {
  console.log('ℹ️  No changes needed - paths already correct');
}



