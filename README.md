# Portfolio — Technical Support Engineer

A modern, responsive personal portfolio with an **infrastructure / terminal aesthetic**:
boot sequence, an interactive command terminal, numbered sections, animated stat counters,
a Case Studies section, scroll progress, and active-nav tracking.

Built with **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion**, configured as a
**static export** so it deploys on any static host (xCloud / OpenLiteSpeed) — no Node runtime.

---

## 1. Edit your content

**Everything lives in one file:** [`src/data/site.ts`](src/data/site.ts).

Update `profile` first (name, email, socials, location), then work down through
`about`, `skills`, `experience`, `caseStudies`, `education`, and `meta`. Look for the
`← CHANGE ME` comments. You never need to touch the React components.

Optional: drop a `resume.pdf` into `public/` and the résumé link lights up.

## 2. Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## 3. Build static files

```bash
npm run build        # outputs a fully static site to ./out
```

The `out/` folder is plain HTML/CSS/JS — that's what you deploy.

---

## 4. Deploy on xCloud (static site)

1. Push this repo to GitHub (see below).
2. In xCloud, create the site (or use an existing one) and connect the GitHub repo,
   **or** build locally and upload `out/` to the docroot.
3. Set the **build command** to `npm run build` and the **publish / output directory**
   to `out`. (If serving the prebuilt files manually, point the docroot at `out/`.)
4. Point your domain + DNS, issue SSL, done.

> Because `next.config.mjs` uses `output: "export"` with `trailingSlash: true`,
> every route is a real `.../index.html`, which OpenLiteSpeed/Nginx serve directly —
> no rewrites or Node process needed.

### Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

---

## Project structure

```
src/
  app/        layout, page, global styles
  components/ Navbar, Hero (terminal), Stats, About, Skills,
              Experience, CaseStudies, Education, Contact, Footer, ...
  data/
    site.ts   ← single source of truth for all content
```
# portfolio
