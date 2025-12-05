#!/bin/bash

# Script to move assets from original template structure to Next.js public folder

echo "Moving assets to Next.js public folder..."

# Create public directories if they don't exist
mkdir -p public/images
mkdir -p public/js
mkdir -p public/css
mkdir -p public/webfonts

# Copy images
if [ -d "images" ]; then
  echo "Copying images..."
  cp -r images/* public/images/ 2>/dev/null || true
  echo "✓ Images copied"
else
  echo "⚠ Images directory not found"
fi

# Copy JS files (for reference and some functionality)
if [ -d "js" ]; then
  echo "Copying JavaScript files..."
  cp -r js/* public/js/ 2>/dev/null || true
  echo "✓ JavaScript files copied"
else
  echo "⚠ JS directory not found"
fi

# Copy webfonts
if [ -d "webfonts" ]; then
  echo "Copying webfonts..."
  cp -r webfonts/* public/webfonts/ 2>/dev/null || true
  echo "✓ Webfonts copied"
else
  echo "⚠ Webfonts directory not found"
fi

# CSS files stay in css/ directory (imported in globals.css)
echo "✓ CSS files remain in css/ directory"

echo ""
echo "Asset migration complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Open http://localhost:3000"



