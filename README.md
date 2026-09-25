# Nikhil Saxena — Portfolio

A personal portfolio site for a Full-Stack & AI Engineer: hero, skills, projects,
open source contributions, about, and contact sections, with a dark-first theme.

## Tech stack

- **Framework:** TanStack Start v1 (React 19) with Vite 7
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** motion/react (Framer Motion)
- **Icons:** lucide-react
- **Database:** Postgres (Supabase) — `projects` and `contact_messages` tables
- **ORM/migrations:** Drizzle

## Local development

Requires [Bun](https://bun.sh) (or Node.js 20+ with npm).

```sh
git clone <this-repository-url>
cd tellar-showcase-prime
bun install
bun run dev
```

The dev server runs at `http://localhost:8080`.

## Environment variables

Create a `.env` file with:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...
```

## Database

Migrations live in `drizzle/migrations`. The `projects` table drives the Projects
section, so new work can be added without touching the code.

## Deployment

Build with `bun run build`, then deploy the output to any edge or Node host
(Cloudflare Pages/Workers, Vercel, Netlify, Fly.io). Remember to set the same
environment variables in the hosting provider's dashboard.
