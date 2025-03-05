// @ts-check
import { defineConfig,envField } from 'astro/config'
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://wparchive.tinkernerd.dev/',
  trailingSlash: 'never',
  output: 'server',

  server: {
    port: parseInt(process.env.PORT || '3000')
  },

  integrations: [icon(), preact({compat: true})],

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      CLOUDFLARE_R2_ENDPOINT: envField.string({ context: "server", access: "secret" }),
      CLOUDFLARE_R2_ACCESS_KEY_ID: envField.string({ context: "server", access: "secret" }),
      CLOUDFLARE_R2_SECRET_ACCESS_KEY: envField.string({ context: "server", access: "secret" }),
      CLOUDFLARE_R2_BUCKET_NAME: envField.string({ context: "server", access: "secret" }),
      CLOUDFLARE_R2_PUBLIC_URL: envField.string({ context: "client", access: "public" }),
    },
  },

  adapter: vercel(),
});