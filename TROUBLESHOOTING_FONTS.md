# Font Awesome Troubleshooting Guide

## Current Setup

1. **Font Files**: Located in `public/webfonts/`
   - `fa-brands-400.woff2` (107KB)
   - `fa-solid-900.woff2` (147KB)

2. **CSS Files**:
   - `css/fonts.css` - Font-face declarations with absolute paths
   - `app/fonts-override.css` - Additional override with !important flags
   - `app/globals.css` - Imports fonts.css and fonts-override.css AFTER all.min.css

3. **Preload Links**: Added in `app/layout.tsx` for faster font loading

## Debugging Steps

### 1. Check Browser Console
Open DevTools → Console and look for:
- 404 errors for font files
- CORS errors
- Font loading errors

### 2. Check Network Tab
Open DevTools → Network:
- Filter by "woff2" or "Font"
- Refresh the page
- Check if fonts are being requested
- Verify response status (should be 200)
- Check the actual URL being requested

### 3. Check Computed Styles
1. Inspect an icon element (e.g., `<i className="fa-solid fa-play"></i>`)
2. In DevTools → Elements → Computed tab
3. Check `font-family` - should show "Font Awesome 6 Free"
4. Check if the icon shows as a character or empty

### 4. Verify Font Paths
The fonts should be accessible at:
- `http://localhost:3000/webfonts/fa-brands-400.woff2`
- `http://localhost:3000/webfonts/fa-solid-900.woff2`

Test in browser:
```bash
# If dev server is running
curl -I http://localhost:3000/webfonts/fa-solid-900.woff2
```

### 5. Check CSS Loading Order
In DevTools → Network → CSS:
- `all.min.css` should load first
- `fonts.css` should load after
- `fonts-override.css` should load last

### 6. Common Issues

#### Icons show as squares or empty
- **Cause**: Font not loading or wrong font-family
- **Fix**: Check Network tab for 404 errors, verify font paths

#### Icons show as text characters
- **Cause**: CSS content not defined or wrong icon class
- **Fix**: Verify `all.min.css` has icon content definitions

#### Fonts load but icons don't appear
- **Cause**: CSS specificity or missing icon content
- **Fix**: Check if `fonts-override.css` is overriding too much

### 7. Quick Test

Add this to any page to test:
```tsx
<div style={{ fontSize: '48px' }}>
  <i className="fa-solid fa-play"></i>
  <i className="fa-brands fa-instagram"></i>
</div>
```

If you see icons, fonts are working. If you see squares or nothing, fonts aren't loading.

### 8. Force Font Reload

1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Clear browser cache
3. Restart dev server: `npm run dev`

### 9. Verify Font Files

```bash
# Check files exist
ls -lh public/webfonts/*.woff2

# Verify file integrity
file public/webfonts/*.woff2
```

### 10. Alternative: Use Font Awesome via npm

If webfonts continue to have issues:

```bash
npm install @fortawesome/fontawesome-free
```

Then in `globals.css`:
```css
@import '@fortawesome/fontawesome-free/css/all.min.css';
```

And copy webfonts:
```bash
cp node_modules/@fortawesome/fontawesome-free/webfonts/* public/webfonts/
```




