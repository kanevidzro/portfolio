// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import rehypeKatext from 'rehype-katex'
import remarkMath from 'remark-math'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://kanevidzro.com',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [sitemap(), mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'snazzy-light',
        dark: 'vitesse-dark',
      },
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatext],
  },
})
