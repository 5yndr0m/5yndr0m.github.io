import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind({
            // Load Tailwind 4 config if necessary, but Astro 5 + Tailwind integration
            // should pick up the @import "tailwindcss" in CSS files.
            applyBaseStyles: false,
        }),
    ],
    output: 'static',
    site: 'https://5yndr0m.github.io',
});
