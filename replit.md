# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the RISE-WAY Technical And Professional Institute website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui

## Artifacts

### `artifacts/riseway-website` — RISE-WAY Institute Website
- **Preview Path**: `/`
- Multi-page React/Vite website
- Pages: Home, About, Programs, Admissions (apply form), Events, Gallery, Testimonials, Contact
- Application form POSTs to `/api/applications`
- Contact form POSTs to `/api/contact`
- Uses real school photos from `/public/` folder
- Blue/orange professional color scheme

### `artifacts/api-server` — Express API Server
- `/api/applications` (POST) — receives student application, sends email to risewaytechpro@gmail.com
- `/api/contact` (POST) — receives contact message, sends email to risewaytechpro@gmail.com
- Uses `nodemailer` with SMTP_USER / SMTP_PASS env vars for email sending

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── riseway-website/    # React + Vite frontend (RISE-WAY website)
│   │   ├── public/         # School photos served statically
│   │   └── src/pages/      # Home, About, Programs, Admissions, Events, Gallery, Testimonials, Contact
│   └── api-server/         # Express API server
├── lib/
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Email Configuration

To enable email sending from the forms, set these environment variables:
- `SMTP_USER` — Gmail address used to send emails
- `SMTP_PASS` — Gmail App Password (not regular password)

If not set, form submissions still succeed but emails won't be sent.

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. Run `pnpm run typecheck` from root.
