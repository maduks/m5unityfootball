# Setup Instructions

## 1. Install Dependencies

```bash
npm install
```

## 2. Move Assets

The original template has assets in the root directory. You need to move them:

### Images
Copy all files from `images/` to `public/images/`:

```bash
# On Mac/Linux
cp -r images/* public/images/

# On Windows
xcopy images public\images\ /E /I
```

### CSS Files
The CSS files are already in the `css/` directory and are imported in `app/globals.css`. Make sure they're accessible.

### JavaScript Files (Optional)
The original JavaScript files in `js/` are kept for reference. Most functionality has been converted to React, but you may need some for:
- Magnific Popup (for lightboxes)
- SlickNav (mobile menu - can use Bootstrap instead)
- Other jQuery plugins

## 3. Font Awesome

Font Awesome icons are used throughout. The CSS is imported via `all.min.css`. If icons don't show:
- Ensure `css/all.min.css` exists
- Or install `@fortawesome/fontawesome-free` and import in `globals.css`

## 4. Run Development Server

```bash
npm run dev
```

## 5. Common Issues

### Images Not Loading
- Ensure images are in `public/images/` (not `images/`)
- Use Next.js Image component with proper paths starting with `/images/`

### Animations Not Working
- Check browser console for errors
- Ensure GSAP and ScrollTrigger are properly loaded
- WOW.js may need additional setup

### Bootstrap Not Working
- Bootstrap CSS is imported in `globals.css`
- Bootstrap JS may need to be initialized for dropdowns, modals, etc.

### Swiper Not Working
- Ensure Swiper CSS is imported: `import 'swiper/css'`
- Check that modules are properly imported

## 6. Next Steps

1. Test all pages
2. Add form handling for contact forms
3. Set up API routes if needed
4. Optimize images
5. Add error pages (404, etc.)
6. Set up environment variables if needed

