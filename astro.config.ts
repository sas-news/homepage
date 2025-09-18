// @ts-check

import { defineConfig } from "astro/config";

import icon from "astro-icon";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import compressor from "astro-compressor";

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

    integrations: [icon(), playformCompress({ CSS: false }), playformInline(), compressor()],
});
