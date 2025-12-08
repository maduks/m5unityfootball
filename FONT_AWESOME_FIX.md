# Font Awesome Fix

## Problem
The `all.min.css` file references webfonts with relative paths (`../webfonts/`) which don't work in Next.js.

## Solution
We've implemented two fixes:

### 1. Webpack String Replace Loader
- Installs `string-replace-loader` to replace `../webfonts/` with `/webfonts/` in CSS files
- This allows the original CSS to work without modification

### 2. Webfonts in Public Folder
- Webfonts are copied to `public/webfonts/`
- They're accessible at `/webfonts/` in the browser

## Installation
```bash
npm install
```

This will install `string-replace-loader` which automatically fixes the paths during build.

## Alternative Solution
If the webpack solution doesn't work, you can:
1. Use the custom `fontawesome.css` file (already created)
2. Or install Font Awesome via npm: `npm install @fortawesome/fontawesome-free`
3. Or manually edit `css/all.min.css` to replace all `../webfonts/` with `/webfonts/`

## Verify
After installation, the build should work:
```bash
npm run build
```





