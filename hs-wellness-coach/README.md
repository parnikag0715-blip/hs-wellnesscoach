# HS Wellness Coach

Next.js (App Router) + TypeScript + Tailwind + Firebase. This is a **scaffold**: every source file is a placeholder.

## Layering (one-way dependencies)

`app/ (RSC pages)` -> `features/ (UI)` -> `actions/` -> `services/` -> `repositories/` -> `lib/firebase/admin`

- Pages are Server Components; add `'use client'` only for interactive leaves.
- `actions/`: thin Server Actions. Validate (Zod) -> authorize (`lib/auth/guards`) -> call a service.
- `services/`: business rules (booking conflicts, cancellation window, publishing).
- `repositories/`: only place that touches Firestore Admin. Mark `import 'server-only'`.
- `lib/firebase/client.ts` is the only browser SDK entry (auth, App Check, storage uploads).
- Types are inferred from `schemas/` where possible; `types/` holds persisted-document shapes.

## Install (versions intentionally not pinned here; use latest stable)

```bash
npm i next react react-dom firebase firebase-admin server-only zod react-hook-form @hookform/resolvers \
  clsx tailwind-merge class-variance-authority lucide-react date-fns @date-fns/tz react-markdown rehype-sanitize \
  radix-ui
npm i -D typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss postcss \
  eslint eslint-config-next prettier prettier-plugin-tailwindcss husky lint-staged tsx \
  vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/user-event \
  @playwright/test @axe-core/playwright firebase-tools @firebase/rules-unit-testing
cd functions && npm i firebase-admin firebase-functions && npm i -D typescript
```

Tailwind v4: design tokens (olive, sage, off-white) live in `src/app/globals.css` under `@theme`.
If you use Next 15 or older, rename `src/proxy.ts` to `src/middleware.ts`.

## Security boundaries (summary)

Rules default to deny. Clients never write `appointments`; bookings go through a Server Action using an Admin SDK transaction.
Roles live in Firebase custom claims (`role: 'admin' | 'client'`). Never commit `.env*` files.
