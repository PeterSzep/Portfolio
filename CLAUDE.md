# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture

Single-page portfolio with no client-side routing — navigation uses HTML anchor links (`#home`, `#about`, `#projects`, `#contact`) and CSS `scroll-behavior: smooth`. No React Router.

**Component tree:**
```
App (isLoaded, menuOpen state)
├── LoadingScreen  → triggers isLoaded via onComplete callback
├── Navbar         → controls menuOpen via setMenuOpen prop
├── MobileMenu     → receives menuOpen + setMenuOpen
└── sections/
    ├── Home, About, Projects, Contact  (each wrapped in RevealOnScroll)
    └── Project.jsx  (reusable card, used inside Projects)
```

**State management:** Local `useState` only — no Context, no Redux. Two pieces of app-level state (`isLoaded`, `menuOpen`) are prop-drilled from `App.jsx`. Form state lives in `Contact.jsx`.

**Scroll animations:** `RevealOnScroll.jsx` uses `IntersectionObserver` (20% threshold) to toggle a `.visible` class, which triggers a CSS opacity + translateY transition defined in `index.css`.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin (no separate `tailwind.config.js`). Custom animations (`.animate-blink`, `.animate-loading-bar`, `.reveal`/`.reveal.visible`) are defined in `index.css`. Color scheme: black background, blue-500/cyan-400 accents, Space Grotesk font.

**Contact form:** Uses EmailJS (`emailjs-com`). Requires three env vars in `.env`:
- `VITE_SERVICE_ID`
- `VITE_TEMPLATE_ID`
- `VITE_PUBLIC_KEY`

**Analytics:** Vercel Analytics (`@vercel/analytics`) rendered inside `App.jsx`.

**Deployment:** Vercel — live at https://peter-szepesi.com/
