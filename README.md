# J. Muneeswari — Premium Portfolio

React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion + Three.js (custom 3D hero background).

## What was fixed
- Added missing `index.html` (Vite needs this at project root — this was the main reason `npm run dev` / build was failing).
- Added missing `postcss.config.js` (Tailwind CSS was not being processed without it).
- Pinned `lucide-react` to a fixed version instead of `"latest"` (avoids surprise breaking changes).
- Added `src/vite-env.d.ts` and `.gitignore`.
- Fixed 2 TypeScript strict-mode errors (unused imports) that were failing `npm run build`.
- Added `three` as a real dependency and built a custom `Scene3D.tsx` component — a rotating wireframe icosahedron + particle field with mouse parallax, rendered behind the Hero section, for the premium 3D look you wanted.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Premium portfolio with 3D hero"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Vercel
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed.
3. Vercel auto-detects **Vite** — Build Command: `npm run build`, Output Directory: `dist`. Leave defaults and click **Deploy**.
4. Done — you'll get a live `.vercel.app` URL.

No environment variables or extra config needed.
