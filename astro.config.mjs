import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Zerty Docs',
      description: 'Die offizielle Dokumentation für Zerty',
      defaultLocale: 'de',
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/phylaxe/zerty-docs' },
      ],
      sidebar: [
        {
          label: 'Erste Schritte',
          items: [
            { label: 'Einführung', slug: 'guides/einfuehrung' },
            { label: 'Schnellstart', slug: 'guides/schnellstart' },
          ],
        },
      ],
    }),
  ],
});
