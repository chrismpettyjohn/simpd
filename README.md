# Simpd

Simpd is a private social platform built as a pnpm monorepo with a React web app and NestJS GraphQL services.

## Developers

- [Chris](https://github.com/chrismpettyjohn)

## Requirements

- Node.js 20+
- pnpm 8+
- PostgreSQL
- NATS
- Stripe account (payments)
- AWS S3 credentials (media)

## Local Use

```bash
pnpm install

# Add the required environment variables to a .env file in the project root
pnpm run env:copy

# Start the API services and the web app
pnpm run dev:start
```

The web app runs at http://localhost:5173. PM2 manages the API services; run `pnpm run dev:stop` to stop them.
