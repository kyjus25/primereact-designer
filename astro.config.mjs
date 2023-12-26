import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  redirects: {
    '/': '/form/autocomplete',
    '/form': '/form/autocomplete',
    '/chart': '/chart/chart',
    '/button': '/button/button',
    '/file': '/file/upload',
    '/media': '/media/carousel',
    '/messages': '/messages/inlinemessage',
    '/misc': '/misc/avatar',
    '/overlay': '/overlay/confirmdialog',
    '/panel': '/panel/accordion',
  },
  integrations: [react(), tailwind(), vue({ appEntrypoint: '/src/components/_vue' })],
});
