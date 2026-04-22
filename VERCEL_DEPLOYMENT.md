# Vercel Deployment Guide

## ✅ Project Ready for Vercel

Your **Job Portal** is fully ready to deploy on Vercel!

---

## 🚀 Deployment Steps

### 1. **Push to GitHub** (if not already done)
```bash
git add .
git commit -m "feat: prepare for vercel deployment"
git push origin main
```

### 2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository: `nooorweb/Job-Portal`
- Click "Import"

### 3. **Configure Project Settings**
- **Framework**: Auto-detected as Next.js ✓
- **Root Directory**: Leave as `/` (default)
- **Build Command**: `npm run build` (auto-detected) ✓
- **Output Directory**: Auto-detected ✓
- **Install Command**: `npm install` (auto-detected) ✓

### 4. **Environment Variables** (Optional)
If you want to use Gemini API in the future, add in Vercel dashboard:
```
GEMINI_API_KEY=your_key_here
```

### 5. **Deploy**
- Click "Deploy"
- Vercel will automatically build and deploy your site
- You'll get a live URL like: `https://job-portal-xyz.vercel.app`

---

## ✅ Pre-Deployment Checklist

| Item | Status | Notes |
|------|--------|-------|
| Next.js 15 configured | ✅ | `next.config.mjs` ready |
| TypeScript | ✅ | `tsconfig.json` configured |
| Tailwind CSS | ✅ | Properly set up with Poppins |
| Poppins Fonts | ✅ | Imported from Google Fonts, all weights loaded |
| .gitignore | ✅ | `.next/`, `node_modules/`, etc. excluded |
| Dependencies | ✅ | All packages locked in `package.json` |
| Environment Variables | ✅ | None required (Gemini API is optional) |
| Build Script | ✅ | `npm run build` works |
| Start Script | ✅ | `npm start` configured for Vercel |
| API Routes | ✅ | Not needed for static content |
| Database | ✅ | Data is hardcoded in `src/constants/data.ts` |
| Images | ✅ | Using URLs, no local images to optimize |
| Metadata | ✅ | SEO title and description set |

---

## 🎯 What Gets Deployed

Your live site will include:
- ✨ Landing page with organization search
- 🏢 Organization detail pages
- 💼 Individual job listing pages with:
  - Overview tab (job details, eligibility)
  - Apply tab (application links)
  - Syllabus tab (study materials)
  - Quiz tab (practice questions)
- 📱 Fully responsive design
- 🎨 Poppins font throughout
- ⚡ Next.js optimizations (automatic)

---

## 🌐 After Deployment

### Get Your Domain
1. In Vercel dashboard, go to "Domains"
2. Add a custom domain (optional)
3. Or use Vercel's free subdomain

### Monitor Performance
- Vercel provides analytics automatically
- View build logs in dashboard
- Check deployment history

### Update Code
- Push changes to GitHub `main` branch
- Vercel auto-deploys on each push
- Takes ~2-5 minutes per deployment

---

## 🔍 Key Configuration Details

### Next.js Configuration
```javascript
// next.config.mjs
const nextConfig = {
  output: "standalone",  // Optimized for serverless
};
```

### Font Configuration
```typescript
// src/app/layout.tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",  // Best for web
  weight: ["400", "500", "600", "700", "800"],
});
```

### Build Scripts (Vercel-Optimized)
```json
"scripts": {
  "dev": "next dev -p 5000 -H 0.0.0.0",     // Local development
  "build": "next build",                     // Production build (Vercel uses this)
  "start": "next start",                     // Production server (Vercel uses this)
  "lint": "next lint"
}
```

---

## 🆘 Troubleshooting

### Build Fails
- Check if all imports are correct
- Verify TypeScript has no errors: `npm run lint`
- Clear `.next` folder and rebuild

### Fonts Not Loading
- Google Fonts API might be blocked (rare)
- Solution: Already configured with `display: "swap"` for fallback

### Slow Performance
- Images from URLs load slower
- Solution: Consider hosting images on Vercel or CDN

---

## 📊 Expected Performance

With Vercel hosting, you'll get:
- **Global CDN** - Fast delivery worldwide
- **Automatic Scaling** - Handles traffic spikes
- **HTTPS** - Enabled by default
- **Analytics** - Real-time monitoring
- **Preview Deployments** - Test PRs before merging
- **Rollbacks** - Easy version rollback if needed

---

## 🎉 You're All Set!

Your project is ready to go live. Just push to GitHub and Vercel will handle the rest!

**Questions?** Check [Vercel Documentation](https://vercel.com/docs)

---

**Last Updated**: April 22, 2026
