# 🚀 Ashish Madan - Portfolio Website

A modern, animated portfolio website built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Featuring smooth scroll animations, dark/light mode, SEO optimization, and a cursor follower effect.

## ✨ Features

- ✅ **Smooth Scroll Animations** - Sections reveal smoothly as you scroll
- ✅ **Dark/Light Mode Toggle** - Beautiful theme switching with persistent state
- ✅ **Cursor Follower Effect** - Interactive cursor with gradient trail
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **SEO Optimized** - Metadata, Open Graph tags, JSON-LD schema
- ✅ **Performance Optimized** - Code splitting, lazy loading, image optimization
- ✅ **Reusable Components** - Modular, maintainable component architecture
- ✅ **JSON-Based Content** - Edit all data from a single portfolio.json file
- ✅ **Modern Typography** - Space Grotesk for headings, Inter for body
- ✅ **Beautiful Gradients** - Smooth color transitions and animated backgrounds
- ✅ **Mobile Optimized** - Touch-friendly navigation and responsive spacing

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Next.js Metadata API, JSON-LD Schema

## 📋 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx                 # Root layout with SEO metadata
│   ├── page.tsx                   # Main page
│   └── globals.css                # Global styles and animations
├── src/
│   ├── components/
│   │   └── PortfolioApp.tsx       # Main portfolio component
│   └── data/
│       └── portfolio.json         # All portfolio content
├── public/
│   └── favicon.ico
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js                 # Next.js configuration
├── postcss.config.js              # PostCSS configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone/Download the project**
```bash
# Navigate to project directory
cd ashish-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Edit your content**
   - Open `src/data/portfolio.json`
   - Update personal information, experience, projects, and skills
   - All changes are reflected automatically

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
   - Navigate to `http://localhost:3000`
   - You should see the portfolio website

## 📝 Customization Guide

### Edit Portfolio Content

All content is stored in `src/data/portfolio.json`. Simply update:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your tagline",
    "email": "your@email.com",
    // ... more fields
  },
  "experience": [ /* Array of job experiences */ ],
  "projects": [ /* Array of projects */ ],
  "skills": [ /* Array of skill categories */ ]
}
```

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
theme: {
  extend: {
    colors: {
      'accent-cyan': '#06b6d4',      // Primary accent color
      'accent-purple': '#a855f7',    // Secondary accent color
    }
  }
}
```

Also update `globals.css` CSS variables:

```css
:root {
  --primary: #06b6d4;
  --secondary: #8b5cf6;
  --accent: #fbbf24;
}
```

### Modify Animations

Framer Motion animations are in `src/components/PortfolioApp.tsx`:

- **Hero section**: Animated title and background gradient
- **Scroll reveal**: Components animate in when scrolling into view
- **Hover effects**: Cards and buttons scale on hover
- **Cursor follower**: Interactive cursor trail effect

Adjust animation timings in the `transition` props:

```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}  // Adjust duration in seconds
```

### Update Social Links

Edit the `social` array in `portfolio.json`:

```json
"social": [
  {
    "name": "GitHub",
    "url": "https://github.com/yourusername",
    "icon": "github"
  },
  // ... more social links
]
```

### Add/Remove Sections

In `PortfolioApp.tsx`, component sections are rendered in order:
1. Navigation
2. Hero Section
3. Experience Section
4. Projects Section
5. Skills Section
6. Contact Section
7. Footer

To hide a section, comment out its component:

```tsx
<HeroSection isDark={isDark} />
{/* <ExperienceSection isDark={isDark} /> */}  // Hidden
<ProjectsSection isDark={isDark} />
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cyan | `#06b6d4` | Primary accent |
| Purple | `#8b5cf6` | Secondary accent |
| Amber | `#fbbf24` | Highlights |
| Dark Blue | `#0f172a` | Dark background |
| Light Slate | `#f8fafc` | Light text |

### Typography

- **Display Font**: Space Grotesk (headings)
- **Body Font**: Inter (body text)
- **Font Sizes**: Responsive, scales with viewport

### Spacing

Uses Tailwind's default spacing scale (4px units). Consistent padding and margins throughout.

## 🔍 SEO Optimization

- ✅ Meta tags and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD schema for structured data
- ✅ Semantic HTML
- ✅ Mobile-friendly viewport
- ✅ Canonical URLs
- ✅ Sitemap-ready structure

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Vercel auto-deploys on push

### Deploy to Other Platforms

Build the project:
```bash
npm run build
npm start
```

## 🎯 Performance Tips

- Images are optimized with Next.js Image component
- Code splitting automatic with Next.js
- CSS is minified in production
- Lazy loading for components
- Intersection Observer for scroll animations

## 🐛 Troubleshooting

### Animations not working?
- Check browser supports CSS animations
- Verify Framer Motion is installed: `npm install framer-motion`
- Clear browser cache and rebuild

### Dark mode not persisting?
- Check if localStorage is enabled in browser
- Verify theme state management in `PortfolioApp.tsx`

### Images not loading?
- Verify image URLs are correct and accessible
- Check image domain settings in `next.config.js`
- Use relative paths for local images

### Build errors?
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 12+, Chrome Mobile)

## 🔐 Security

- No sensitive data stored in code
- CSP headers configured
- XSS protection enabled
- Security headers in place

## 📄 License

This portfolio template is free to use for personal projects.

## 🙋 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Framer Motion docs: https://www.framer.com/motion/

## 📞 Contact

**Ashish Madan**
- 📧 Email: ashishmadan12@gmail.com
- 💼 LinkedIn: linkedin.com/in/ashish2000
- 🐙 GitHub: github.com/am282000
- 📱 Phone: +91-7015875465

---

Built with ❤️ using Next.js and modern web technologies.
