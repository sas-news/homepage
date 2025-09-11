// @ts-check

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
        resolve: {
            alias: {
                "@": "/src",
                "@assets": "/src/assets",
                "@img": "/src/assets/img",
                "@styles": "/src/assets/styles",
                "@utils": "/src/assets/utils",
                "@components": "/src/components",
                "@layouts": "/src/layouts",
            },
        },
    },

    server: {
        host: true,
    },
});
