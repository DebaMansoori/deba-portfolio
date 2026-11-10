# Deba Mansoori — Portfolio

React (Vite) rebuild of the original static portfolio, with the same visual design.

## Run

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Edit content

- Hero, about, skills and contact copy: `src/components/`
- Project cards and their live demo previews: `src/data/projects.js`
- Photo: `src/assets/portrait.jpg`
- Styles (unchanged from the original design): `src/index.css`

Each project card opens a modal with a self-contained demo website preview. To point a
project at a real site instead, add its URL in `src/data/projects.js` and replace the
`preview` value with an iframe-friendly page.

## Before publishing

Replace the placeholders in `src/components/Contact.jsx`:

- `mailto:your-email@example.com`
- the GitHub / LinkedIn / Instagram `href="#"` links
