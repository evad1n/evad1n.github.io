<template>
    <v-container>
        <v-row class="full-height">
            <v-col cols="12" class="d-flex flex-column justify-center">
                <!-- <vue-typer
                    id="header"
                    class="text-center font-weight-regular text-h4 text-sm-h2"
                    text="WILL DICKINSON"
                    @completed="iconsReady"
                    :pre-type-delay="1000"
                    :type-delay="90"
                    :repeat="0"
                    :initialAction="recentVisit ? 'erasing' : 'typing'"
                    caretAnimation="blink"
                ></vue-typer> -->
                <!-- <div
                    class="icon-bar mx-auto"
                    :style="iconBarStyle"
                    disabled="true"
                >
                    <icon-link
                        v-bind="{
                            ...iconColors,
                            url: 'https://github.com/evad1n',
                            icon: 'mdi-github',
                            tooltip: 'GitHub',
                        }"
                    />
                    <icon-link
                        v-bind="{
                            ...iconColors,
                            url: 'https://www.linkedin.com/in/will-dickinson/',
                            icon: 'mdi-linkedin',
                            tooltip: 'LinkedIn',
                        }"
                    />
                </div> -->
            </v-col>
        </v-row>
        <v-row id="bio" class="my-4">
            <v-col cols="12">
                <p class="mx-auto text-center h4 ma-0 pa-10">
                    Software engineer with a game design background
                </p>
            </v-col>
        </v-row>
        <v-row class="my-8 text-h5">
            <v-col>
                <h2 class="mx-auto text-center text-h3 font-weight-bold">
                    Projects
                </h2>
            </v-col>
        </v-row>
        <v-row class="pb-16">
            <v-col
                v-for="(project, i) in Projects.big"
                :key="i"
                cols="12"
                md="10"
                :offset-md="i % 2 == 0 ? 2 : 0"
                class="big-row"
            >
                <CardBig v-bind="project" :reverse="i % 2 == 0" />
            </v-col>
        </v-row>
        <v-row class="py-16 justify-center">
            <v-col
                v-for="(project, i) in Projects.medium"
                :key="i"
                cols="12"
                sm="5"
                md="4"
                class="medium-row"
            >
                <CardMedium v-bind="project" :reverse="i % 2 == 0" />
            </v-col>
        </v-row>
        <v-row class="py-8 justify-center">
            <v-col
                v-for="(project, i) in Projects.small"
                :key="i"
                cols="9"
                sm="5"
                md="4"
                lg="3"
                class="small-row"
            >
                <CardSmall v-bind="project" />
            </v-col>
        </v-row>
        <v-row>
            <v-col id="all-repositories">
                <nuxt-link to="/repositories">All Repositories</nuxt-link>
            </v-col></v-row
        >
        <v-row class="pb-4">
            <v-col cols="12" class="d-flex flex-column align-center pa-0 mt-10">
                <span>
                    Made with <a href="https://nuxtjs.org/">Nuxt.js</a> and
                    <a href="https://vuetifyjs.com/en/">Vuetify</a>
                </span>
                <span class="mt-2"
                    >&copy; {{ new Date().getFullYear() }} Will Dickinson</span
                >
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
// import { VueTyper } from "vue-typer";
// import anime from "animejs/lib/anime.es.js";

import { Projects } from "@/static/projects";

console.log(Projects);

// const old = {
//     projects: projects,
//     iconColors: {
//         baseColor: "black",
//         hoverColor: "white",
//         tipColor: "grey darken-3",
//     },
//     enableIcons: false,
//     recentVisit: false,
// };

// Prevent intro animations from showing too frequently
const HOUR_TIMEOUT = 1;

let recentVisit = false;

// Get last visit
const lastVisit = new Date(JSON.parse(localStorage.getItem("@recent")));
if (!lastVisit || new Date() - lastVisit > HOUR_TIMEOUT * 60 * 60 * 1000) {
    localStorage.setItem("@recent", JSON.stringify(new Date()));
} else {
    recentVisit = true;
}
</script>

<style lang="scss">
.icon-bar {
    opacity: 0;
}

#bio {
    font-size: 1.1rem;
    border-top: 2px solid $link;
    border-bottom: 2px solid $link;
}

// Vue typer styles
.vue-typer {
    font-size: 50px;
}

.vue-typer .custom.caret {
    width: 3px;
    line-height: 50px;
}

// Row sizes
.big-row {
    height: 300px;
}

.medium-row {
    height: 420px;
}

.small-row {
    height: 250px;
}

@media screen and (max-width: #{map-get($grid-breakpoints, 'sm')}) {
    .big-row {
        height: 420px;
    }

    .medium-row {
        height: 300px;
    }
}

#all-repositories {
    text-align: center;
    border-top: 2px solid $link;
    border-bottom: 2px solid grey;
    margin-top: 20px;
    padding: 40px 0;

    & a {
        font-size: 1.4rem;
    }
}
</style>
