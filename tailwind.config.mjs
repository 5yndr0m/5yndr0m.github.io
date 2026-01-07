/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Custom Theme Colors
                mainBlack: '#000000',
                mainPurple: '#9333ea', // vibrant purple
                mainGreen: '#4ade80',  // vibrant green
                mainLavender: '#c084fc', // lavender
                surface: '#0a0a0a',   // deep surface black
                muted: '#1a1a1a',     // muted black

                // Keep nord names for easier migration, mapping them to new theme
                nord0: '#000000',      // background
                nord1: '#0a0a0a',      // surface
                nord2: '#1a1a1a',      // muted
                nord3: '#2a2a2a',      // border
                nord4: '#e2e8f0',      // text primary
                nord5: '#f8fafc',      // text bright
                nord6: '#ffffff',

                nord7: '#c084fc',      // lavender
                nord8: '#9333ea',      // purple (primary)
                nord9: '#c084fc',      // lavender (secondary)
                nord10: '#7c3aed',     // deep purple

                nord11: '#ef4444',     // red (keep for errors)
                nord12: '#f59e0b',     // orange (keep for warnings)
                nord13: '#fbbf24',     // yellow
                nord14: '#4ade80',     // green
                nord15: '#d8b4fe',     // faded lavender
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
