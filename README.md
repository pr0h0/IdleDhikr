# IdleDhikr

An offline-first PWA dhikr companion: a tap counter with daily targets, presets (morning/evening routines), a dua library, and learning modules (Sufara, the 99 Names, Tajweed). English and Bosnian.

Data lives in the browser (IndexedDB via Dexie); nothing is sent to a server. Backups can be exported and imported from Settings.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run deploy  # build + upload to Cloudflare Pages (needs `npx wrangler login` or CLOUDFLARE_API_TOKEN)
npm run lint
```

The app is a fully static export (`output: "export"`), so it can be hosted on any static host. Pages that show one item take it from the query string (`/dhikr/count?id=…`), because user-created items can't be prerendered.

Stack: Next.js 16, React 19, Tailwind CSS 4, Dexie, Zustand, i18next, Framer Motion.

Theme tokens live in `src/app/globals.css`: the app's `slate`/`emerald` scales are re-tuned there, so color changes apply everywhere.
