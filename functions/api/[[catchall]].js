import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';

const api = new Hono().basePath('/api');

api.get("/", async (c) => {
  return c.text("This is an example API response.")
});

api.get("/test", async (c) => {
  return c.text("This is an example api response from /api/test");
});

api.get("/demo", async (c) => {
  const currentTime = new Date().toISOString();
  const ipAddress = c.req.header('CF-Connecting-IP') || 'Unknown';

  return c.json({
    time: currentTime,
    ip: ipAddress
  });
});

export const onRequest = handle(api);