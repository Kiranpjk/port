# Project-first portfolio redesign

Date: 2026-11-09. Branch: `redesign/project-first`.

## Why

The site is for recruiters. They skim. Today it reads as a generic template:
a stock headline, three icon cards, a 3D background, and a raw list of about
50 GitHub repos (forks and assignments included). RapidGigs, the strongest
project, is one card among them. The page also shows "Loading portfolio…"
first because everything is fetched in the browser.

## Goals

- A recruiter sees real work within five seconds of landing.
- RapidGigs gets a full case study.
- The site looks designed by a person: big type, warm light palette, lots of space.
- The page appears instantly and can be read by Google (server-rendered).

## Not doing

- No blog, CMS, contact form backend or analytics.
- No dark mode (one palette, done well). Kiran's call to reverse.
- No live GitHub repo listing.

## Would make it a failure

- Purple gradients, glass cards, floating 3D shapes, "crafting delightful experiences" copy.
- Any invented fact about Kiran (job titles, dates, numbers).

## Approaches considered

1. Editorial with a cut-out portrait (closest to the Dribbble examples). Needs a good photo and is the common version of this style.
2. **Project-first (picked by Kiran).** Same big type, but a phone frame showing RapidGigs sits where the portrait would be.
3. Polish the current dark template. Rejected: keeps the generic look.

## Design

One page, top to bottom:

1. **Hero.** "JAYA KIRAN" in very large condensed type across the full width. A phone frame overlaps the name and shows the RapidGigs shorts feed. Beside it: role, one-line pitch, "available" note, buttons for CV and email.
2. **RapidGigs case study.** What it is, what Kiran built, 3 screenshots, the architecture (React on Vercel, Express on Render, Spring Boot payment service, MongoDB, Cloudinary), stack, links to live site and code.
3. **Selected work.** Large numbered rows, not cards: T-Groups, AutoConnect, AgriTek, TaskFlow. Each row: name, one line, stack, links.
4. **Experience and skills.** Plain rows with years on the left, like the examples.
5. **Contact.** Big email link, GitHub, LinkedIn.

Look:

- Background warm off-white, text near-black, one accent colour (burnt orange).
- Fonts via `next/font`: a condensed display face for the name and headings, a serif italic for small accents, a plain sans for body.
- Motion: name and phone slide in once; rows reveal on scroll. Off when the visitor has reduced motion set.
- Works on phones: name scales with the viewport, phone frame moves under the name.

Build notes (builder's calls):

- Keep Next.js 14 and Tailwind. Server-render the page; remove `ssr: false`, the edge runtime and the loading screen.
- Project content lives in one file, `src/data/projects.js`.
- Delete `ThreeBackground`, the theme toggle and `src/lib/github.js`. Remove unused packages: three, @react-three/fiber, @react-three/drei, gsap, axios, fontawesome, next-themes.
- RapidGigs screenshots are captured from the live site and stored in `public/`.
- Check: `next build` passes and the page is checked at phone and desktop widths in the browser.

## Changes after approval (same day)

- One site for design and code, design first: the target is a UI/UX Werkstudent role.
- Hero phone shows ClassComfort (a mobile app) in place of RapidGigs.
- Design work: ClassComfort and Smart Mirror UI case studies.
- Code: RapidGigs (text only, the live job list did not load for a screenshot), Crypto SEO Tracker, T Group, AutoConnect, NextHood (code link only, its live link is dead). AgriTek removed.
- Motion is plain CSS, so framer-motion is no longer used by the page.
- Case study PDFs link to Google Drive (the ClassComfort PDF is 26 MB).

## Needed from Kiran (answered by the CVs)

- CV as a PDF (or say there is none and the button is dropped).
- College, degree and graduation year; any internship or job with dates.
- Confirm the four other projects, or name replacements.
