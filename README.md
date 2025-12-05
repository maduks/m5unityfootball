# Footclub - Next.js Conversion

This is a Next.js conversion of the Footclub HTML template - a modern football/soccer club website.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Modern React components
- ✅ Image optimization with Next.js Image
- ✅ GSAP animations
- ✅ Swiper.js for sliders
- ✅ Bootstrap 5 integration

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
footclubM5/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faqs/              # FAQs page
│   ├── image-gallery/     # Image gallery page
│   └── video-gallery/     # Video gallery page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Preloader.tsx      # Loading screen
│   └── sections/          # Page sections
├── css/                   # CSS files (from original template)
├── images/                # Image assets
├── js/                    # JavaScript files (for reference)
└── lib/                   # Utility functions
    └── animations.ts      # Animation helpers
```

## Pages

- `/` - Home page
- `/about` - About us page
- `/contact` - Contact page
- `/faqs` - Frequently asked questions
- `/image-gallery` - Image gallery
- `/video-gallery` - Video gallery

## Notes

- All images should be placed in the `public/images/` directory
- CSS files from the original template are imported in `globals.css`
- JavaScript functionality has been converted to React hooks and effects
- Some jQuery dependencies may need additional setup for full functionality

## Dependencies

- Next.js 14
- React 18
- Bootstrap 5
- Swiper.js
- GSAP
- TypeScript

## Converting Remaining Features

Some features from the original template may need additional setup:

1. **Magnific Popup** - For image/video lightboxes
2. **WOW.js** - For scroll animations (partially implemented)
3. **SlickNav** - For mobile menu (can use Bootstrap's collapse)
4. **Parallax effects** - Can be implemented with GSAP ScrollTrigger
5. **Form validation** - Consider using React Hook Form

## License

This is a conversion of the Footclub HTML template to Next.js.

