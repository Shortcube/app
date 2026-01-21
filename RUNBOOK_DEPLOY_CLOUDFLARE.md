# Runbook: Cloudflare Workers (OpenNext)

This app deploys to Cloudflare Workers using the OpenNext Cloudflare adapter.
Cloudflare Pages is not used for SSR.

## Local commands
- Preview locally: `npm run preview`
- Deploy to Workers: `npm run deploy`
- Upload assets only: `npm run upload`

## Cloudflare setup (one-time)
1) Create a Worker named `bureauweb` (Workers & Pages → Create → Worker).
2) Ensure the Worker uses `wrangler.jsonc` (main `.open-next/worker.js`, assets `.open-next/assets`).
3) Configure environment variables for production:
   - `MONGO_URL`
   - `DB_NAME`
   - `NEXT_PUBLIC_BASE_URL`
   - `CORS_ORIGINS`
   - `RESEND_API_KEY` (store as secret)
   - `STRIPE_SECRET_KEY` (secret)
   - `STRIPE_WEBHOOK_SECRET` (secret)
   - `LEADS_WEBHOOK_URL` (secret if needed)
   - `WEBHOOK_URL` (secret if needed)
   - `NEXT_PUBLIC_STRIPE_PORTAL_LOGIN_URL`
   - `STRIPE_PAYMENT_LINK_DEPART`
   - `STRIPE_PAYMENT_LINK_PRO`
   - `STRIPE_PAYMENT_LINK_CROISSANCE`
   - `STRIPE_PAYMENT_LINK_ACTIVATION_PRO`
   - `STRIPE_PAYMENT_LINK_ACTIVATION_CROISSANCE`
   - `STRIPE_PRICE_ID_DEPART`
   - `STRIPE_PRICE_ID_PRO`
   - `STRIPE_PRICE_ID_CROISSANCE`
   - `STRIPE_PRICE_ID_ACTIVATION_PRO`
   - `STRIPE_PRICE_ID_ACTIVATION_CROISSANCE`
   - `BLOG_ENABLED`
   - `NEXT_PUBLIC_CONTACT_PHONE`
4) Set a custom domain or route to the Worker (see below).

## Repointing from Pages to Workers (no downtime)
1) Deploy the Worker and validate on a temporary hostname (e.g. `workers-preview.bureauweb.ca`).
2) In Cloudflare, remove the Pages custom domain binding for `bureauweb.ca` and `www.bureauweb.ca`.
3) Add those hostnames to the Worker (Workers → Custom Domains or Routes: `bureauweb.ca/*`, `www.bureauweb.ca/*`).
4) Verify DNS remains proxied (orange cloud) and test both domains.

## Notes
- Static caching for `/_next/static/*` is configured via `public/_headers`.
- Cloudflare Pages output directories are not used.
