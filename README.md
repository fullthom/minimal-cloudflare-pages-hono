# Minimal Cloudflare Pages Hono
- This is a minimal example of how to set up Cloudflare Pages + Pages Functions w/ Hono.
- All requests not matching /api will be served statically by Pages.
- All requests matching /api will be handled by the Hono app in ./functions.

Develop: `yarn run dev`

Deploy: `yarn run deploy`