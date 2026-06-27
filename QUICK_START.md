# 🚀 Quick Start Guide - Ashish's Portfolio

**Everything you need in 5 minutes**

## Installation (5 steps)

```bash
# 1. Create project folder
mkdir ashish-portfolio && cd ashish-portfolio

# 2. Copy all configuration files to root

# 3. Create folder structure
mkdir -p app src/components src/data public

# 4. Copy files to correct locations:
#    - app/layout.tsx (from app_layout.tsx)
#    - app/page.tsx
#    - app/globals.css
#    - src/components/PortfolioApp.tsx (from portfolio_app.tsx)
#    - src/data/portfolio.json (from portfolio_data.json)

# 5. Install and run
npm install
npm run dev
```

Visit: **http://localhost:3000** ✅

---

## File Locations

```
ashish-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── src/
│   ├── components/PortfolioApp.tsx
│   └── data/portfolio.json
└── [root config files]
```

---

## Edit Your Info

**File:** `src/data/portfolio.json`

Update sections:
```json
{
  "personal": { /* Your name, title, email */ },
  "experience": [ /* Your jobs */ ],
  "projects": [ /* Your projects */ ],
  "skills": [ /* Your skills */ ],
  "social": [ /* GitHub, LinkedIn, etc */ ]
}
```

Changes appear instantly! 🎉

---

## Features Included

✅ Beautiful animations on scroll
✅ Dark/Light mode toggle  
✅ Cursor follower effect
✅ Fully responsive (mobile-friendly)
✅ SEO optimized
✅ Smooth transitions
✅ Component library ready
✅ TypeScript support
✅ Tailwind CSS styling

---

## Customize Colors

**File:** `tailwind.config.ts`

```ts
colors: {
  'accent-cyan': '#06b6d4',      // Change this
  'accent-purple': '#a855f7',    // And this
}
```

**File:** `app/globals.css`

```css
:root {
  --primary: #06b6d4;        /* Primary blue */
  --secondary: #8b5cf6;      /* Purple accent */
  --accent: #fbbf24;         /* Gold highlights */
}
```

---

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
npm install -g vercel
vercel
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Module errors | `rm -rf node_modules && npm install` |
| Build fails | Clear cache: `rm -rf .next && npm run build` |
| TypeScript errors | Check `tsconfig.json` paths match your setup |

---

## File Descriptions

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript config |
| `tailwind.config.ts` | Tailwind theme |
| `next.config.js` | Next.js optimization |
| `app/layout.tsx` | Root layout + SEO |
| `app/globals.css` | Global styles |
| `PortfolioApp.tsx` | Main component |
| `portfolio.json` | Your content |

---

## Key Features

### Animations
- Scroll reveals
- Hover effects
- Cursor trailer
- Gradient shifts

### Sections
1. **Hero** - Your name & title
2. **Experience** - Job history
3. **Projects** - Featured work
4. **Skills** - Technical expertise
5. **Contact** - Call to action

### Theme
- Dark mode default
- Light mode support
- Custom colors
- Responsive typography

---

## Development Tips

```bash
# Hot reload enabled - changes appear instantly
npm run dev

# Check for TypeScript errors
npm run build

# Deploy when ready
vercel deploy
```

---

## Next Steps

1. ✅ Copy files to correct locations
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Edit `portfolio.json` with your info
5. ✅ Customize colors if desired
6. ✅ Test on mobile
7. ✅ Deploy to production

---

## Resources

- **Docs**: See `README.md` for full documentation
- **Setup**: See `SETUP_INSTRUCTIONS.md` for detailed guide
- **Checklist**: See `FILE_CHECKLIST.md` for all files

---

## Need Help?

1. Check README.md
2. Check SETUP_INSTRUCTIONS.md
3. Check your file locations match the structure
4. Run `npm install` again
5. Clear cache: `rm -rf .next && npm run dev`

---

## Performance

- Optimized for fast load times
- Image lazy loading
- Code splitting automatic
- CSS minified in production
- Server-side rendering ready

---

## SEO

✅ Meta tags  
✅ Open Graph  
✅ Twitter Card  
✅ JSON-LD schema  
✅ Sitemap compatible  
✅ Mobile-friendly  
✅ Fast loading

---

**You're ready to go!** 🎉

Questions? Check the full documentation in `README.md`
