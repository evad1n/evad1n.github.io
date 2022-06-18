// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import colors from "vuetify/lib/util/colors.mjs";

const defaultTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: colors.lightGreen.lighten3,
        accent: colors.green.darken3,
        secondary: colors.grey.darken4,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        background: colors.lightGreen.base,
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: "defaultTheme",
            themes: {
                defaultTheme,
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
