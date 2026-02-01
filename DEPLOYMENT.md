# Deployment Guide

This guide covers deploying your portfolio to different hosting platforms.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- GitHub account

## Quick Deploy Options

### 1. Deploy to Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and provides the best integration.

**Steps:**

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

**Done!** Your site will be live in minutes at `https://your-project.vercel.app`

**Benefits:**
- Zero configuration needed
- Automatic deployments on git push
- Built-in SSL
- Global CDN
- GitHub API calls work perfectly (Server-Side Rendering)

---

### 2. Deploy to Netlify

**Steps:**

1. Build your project:
```bash
npm run build
```

2. Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

3. Connect your GitHub repo to Netlify or drag and drop the `.next` folder

**Note:** Install the Next.js plugin for best results.

---

### 3. Deploy to GitHub Pages (Static Export)

For static hosting on GitHub Pages, you need to export your Next.js app.

**Steps:**

1. Update `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Only if not using custom domain
  assetPrefix: '/your-repo-name/',
  images: {
    unoptimized: true,
  },
};
```

2. Build and export:
```bash
npm run build
```

3. The output will be in the `out` directory

4. Deploy to GitHub Pages:
   - Push the `out` directory to `gh-pages` branch, OR
   - Use GitHub Actions (see below)

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**Limitation:** GitHub API calls won't work on the build server during export. You'll need to either:
- Fetch data at runtime using client-side requests (may hit rate limits)
- Use a GitHub Personal Access Token
- Pre-fetch and cache data during build

---

## Environment Variables

### GitHub API Configuration

The portfolio fetches data from GitHub API. To avoid rate limits:

1. Create a GitHub Personal Access Token:
   - Go to GitHub Settings > Developer Settings > Personal Access Tokens
   - Generate new token (classic)
   - Select `public_repo` scope
   - Copy the token

2. Add to your deployment platform:

**Vercel:**
- Dashboard > Project Settings > Environment Variables
- Add `GITHUB_TOKEN` with your token

**Netlify:**
- Site Settings > Build & Deploy > Environment
- Add `GITHUB_TOKEN` with your token

3. Update `src/lib/github.js` to use the token:
```javascript
const headers = process.env.GITHUB_TOKEN 
  ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
  : {};

const response = await axios.get(url, { headers });
```

---

## Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

### GitHub Pages
1. Add `CNAME` file in `public` directory with your domain
2. Update DNS records to point to GitHub Pages

---

## Troubleshooting

### GitHub API Rate Limits
- **Problem:** "API rate limit exceeded"
- **Solution:** Add a GitHub Personal Access Token (see above)

### Build Fails on Vercel/Netlify
- Check build logs
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- For static export, ensure `images.unoptimized: true` in config
- Use proper image paths

### 404 on Routes
- For static hosting, ensure `trailingSlash: true` in config
- Add proper routing configuration

---

## Performance Optimization

### 1. Enable Caching
Already configured with appropriate cache headers.

### 2. Image Optimization
- Use Next.js Image component for automatic optimization (Vercel/Netlify)
- For static export, optimize images before deployment

### 3. Bundle Size
```bash
npm run build
```
Check the bundle size report and optimize large dependencies.

---

## Monitoring

### Vercel Analytics
- Automatically available in Vercel dashboard
- Shows page views, performance metrics

### Google Analytics
Add to `src/app/layout.js`:
```javascript
import Script from 'next/script'

// In the component
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
  strategy="afterInteractive"
/>
```

---

## Security

### API Keys
- Never commit API keys to repository
- Use environment variables
- Add `.env.local` to `.gitignore` (already done)

### Content Security Policy
Add headers in `next.config.mjs` for enhanced security.

---

## Support

For issues specific to:
- **Next.js:** [Next.js Documentation](https://nextjs.org/docs)
- **Vercel:** [Vercel Support](https://vercel.com/support)
- **Netlify:** [Netlify Support](https://docs.netlify.com)
- **GitHub Pages:** [GitHub Pages Documentation](https://docs.github.com/pages)

---

**Recommended:** Use Vercel for the best experience with zero configuration!
