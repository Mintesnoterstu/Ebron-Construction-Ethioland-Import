# Ebron Construction & Ethioland Import

Public website for **Ebron Construction & Ethioland Import**, an Ethiopian general contractor founded in 2014 by Engineer Elias Yimer.

The site is static-first (no backend, no database, no API routes). Copy lives in English and Amharic. Light and dark themes are supported.

## Stack

- Next.js 15 (App Router) and TypeScript
- Tailwind CSS v4
- Framer Motion, Lucide React, next-themes
- Custom language context (no i18n library)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Content rules

- Published address: Bole Sub City, Kebele 03, House No. 2409, Addis Ababa, Ethiopia
- Hotline: +251 95 389 8989 (`tel:+251953898989`)
- Email: viaebron@gmail.com
- Do not invent projects, testimonials, awards, or extra addresses
- Client photos in `/public/images` keep their original filenames

## Language and theme

- Language toggle stores `ebron-lang` in `localStorage` and a cookie
- Theme toggle uses `next-themes` (system preference on first visit)

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy with default Next.js settings (no environment variables)
