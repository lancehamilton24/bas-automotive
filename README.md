# BA’s Automotive Service Inc.

Static Vite + React + TypeScript website for https://basautosvc.com/.

## Run locally

Requires Node.js 22.12+ or a supported newer LTS release and pnpm.

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
pnpm preview
```

## Contact form

The contact form uses FormSubmit to email the company email without a server or API key. Name and phone number are required; email, subject, and message are optional. When provided, the sender's email is used for replies. FormSubmit handles spam verification and the confirmation page.
