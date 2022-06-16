import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: "static",

    modules: ["nuxt-vite"],

    typescript: {
        typeCheck: true,
    },

    head: {
        titleTemplate: "%s - evad1n.github.io",
        title: "Will Dickinson",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            {
                hid: "og-title",
                property: "og:title",
                content: "Will Dickinson - evad1n.github.io",
            },
            {
                hid: "og-description",
                property: "og:description",
                content: "Software engineer with a game design background",
            },
            {
                hid: "og-image",
                property: "og:image",
                content: "https://evad1n.github.io/favicon.ico",
            },
        ],
        link: [
            { rel: "shortcut icon", type: "image/x-icon", href: "favicon.ico" },
        ],
    },

    generate: {
        fallback: "404.html",
    },
});
