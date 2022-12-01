import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VitePWA } from "vite-plugin-pwa";
import UnoCSS from "@unocss/vite";
import { DirResolverHelper, dirResolver } from "vite-auto-import-resolvers";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/],
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string) => tag.startsWith("i-")
                }
            }
        }),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "robots.txt"],
            manifest: {
                name: "Spada Giropizza",
                short_name: "Giropizza",
                description: "A tiny app to create new pizza toppings",
                theme_color: "#0d0e0e",
                icons: [
                    {
                        src: "android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    },
                    {
                        src: "android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable"
                    }
                ]
            }
        }),
        UnoCSS(),
        Components({
            deep: false
        }),
        DirResolverHelper(),
        AutoImport({
            imports: [
                "vue",
                "@vueuse/core"
            ],
            resolvers: [dirResolver()]
        })
    ],
    server: {
        fs: {
            allow: [".."]
        },
        host: true,
        port: 3000
    }
});
