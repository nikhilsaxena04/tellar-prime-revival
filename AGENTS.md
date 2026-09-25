# Repository notes

- Routes live in `src/routes` (TanStack Router file-based routing). Never edit
  `src/routeTree.gen.ts` — it is generated.
- Styling uses Tailwind CSS v4 via `src/styles.css`; prefer the semantic design
  tokens defined there over hardcoded colors.
- Database migrations live in `drizzle/migrations`.
- Avoid rewriting published git history (force pushes, rebases, or amends of
  pushed commits) so project history stays intact.
