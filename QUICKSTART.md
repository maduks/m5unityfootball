# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Move Assets
```bash
# Run the asset migration script
./scripts/move-assets.sh

# Or manually copy:
# - images/ → public/images/
# - js/ → public/js/
# - webfonts/ → public/webfonts/
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit **http://localhost:3000** to see your site!

## 📁 Project Structure

```
footclubM5/
├── app/                    # Next.js pages (App Router)
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faqs/              # FAQs page
│   ├── image-gallery/     # Image gallery
│   └── video-gallery/     # Video gallery
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Preloader.tsx
│   └── sections/          # Page sections
├── public/                # Static assets
│   ├── images/           # Images (move from images/)
│   └── js/               # JS files (move from js/)
├── css/                   # CSS files (keep as-is)
└── lib/                   # Utilities
    ├── animations.ts     # Animation helpers
    └── utils.ts          # Utility functions
```

## 🎯 Available Pages

- `/` - Home
- `/about` - About Us
- `/contact` - Contact
- `/faqs` - FAQs
- `/image-gallery` - Image Gallery
- `/video-gallery` - Video Gallery

## ⚙️ Configuration

### Environment Variables
Create `.env.local` if needed:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Images Not Showing
- Ensure images are in `public/images/`
- Check image paths start with `/images/`

### Animations Not Working
- Check browser console for errors
- Ensure all JS files are in `public/js/`
- Wait for scripts to load (they load lazily)

### Styles Not Applied
- Check `app/globals.css` imports CSS files
- Ensure CSS files exist in `css/` directory

### jQuery Errors
- jQuery loads lazily, some features may need it
- Consider migrating to React alternatives

## 📝 Next Steps

1. ✅ Move assets to public folder
2. ✅ Install dependencies
3. ✅ Test all pages
4. ⏳ Connect forms to backend
5. ⏳ Optimize images
6. ⏳ Add SEO metadata
7. ⏳ Test on mobile devices

## 📚 Documentation

- [README.md](./README.md) - Full documentation
- [SETUP.md](./SETUP.md) - Detailed setup instructions
- [CONVERSION_NOTES.md](./CONVERSION_NOTES.md) - Conversion details

## 💡 Tips

- Use Next.js Image component for optimized images
- Check browser console for any errors
- Some jQuery plugins may need additional setup
- Consider replacing jQuery dependencies with React alternatives



