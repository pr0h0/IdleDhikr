# IdleDhikr

An offline-first PWA dhikr companion: a tap counter with daily targets, presets (morning/evening routines), a dua library, and learning modules (Sufara, the 99 Names, Tajweed). English and Bosnian.

Data lives in the browser (IndexedDB via Dexie); nothing is sent to a server. Backups can be exported and imported from Settings.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # standalone output
npm run lint
```

Stack: Next.js 16, React 19, Tailwind CSS 4, Dexie, Zustand, i18next, Framer Motion.

Theme tokens live in `src/app/globals.css`: the app's `slate`/`emerald` scales are re-tuned there, so color changes apply everywhere.
