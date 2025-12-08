import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://terapijariga.lv',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'lv',
    locales: ['lv', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
