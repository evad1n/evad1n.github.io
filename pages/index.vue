<template>
    <v-container>
        <v-row class="full-height">
            <v-col cols="12" class="d-flex flex-column justify-center">
                <vue-typer
                    id="header"
                    class="text-center font-weight-regular text-h4 text-sm-h2"
                    text="WILL DICKINSON"
                    @completed="iconsReady"
                    :pre-type-delay="2000"
                    :type-delay="90"
                    :repeat="0"
                ></vue-typer>
                <div class="icon-bar mx-auto">
                    <icon-link
                        v-bind="{
                            ...iconColors,
                            url: 'https://github.com/evad1n',
                            icon: 'mdi-github',
                            tooltip: 'GitHub'
                        }"
                    />
                    <icon-link
                        v-bind="{
                            ...iconColors,
                            url: 'https://www.linkedin.com/in/will-dickinson/',
                            icon: 'mdi-linkedin',
                            tooltip: 'LinkedIn'
                        }"
                    />
                </div>
            </v-col>
        </v-row>
        <v-row id="bio" class="my-4">
            <v-col cols="12">
                <p class="mx-auto text-center h4 ma-0 pa-10">Game Design turned Computer Science student</p>
            </v-col>
        </v-row>
        <v-row class="my-8 text-h5">
            <v-col>
                <h2 class="mx-auto text-center">Projects</h2>
            </v-col>
        </v-row>
        <v-row class="pb-16">
            <v-col
                v-for="(project, i) in projects.big"
                :key="i"
                cols="12"
                md="10"
                :offset-md="i % 2 == 0 ? 2 : 0"
                class="big-row"
            >
                <big-card v-bind="project" :reverse="i % 2 == 0"></big-card>
            </v-col>
        </v-row>
        <v-row class="py-16 justify-center">
            <v-col v-for="(project, i) in projects.medium" :key="i" cols="12" sm="5" md="4" class="medium-row">
                <medium-card v-bind="project" :reverse="i % 2 == 0"></medium-card>
            </v-col>
        </v-row>
        <v-row class="py-8 justify-center">
            <v-col v-for="(project, i) in projects.small" :key="i" cols="6" sm="4" md="4" lg="3" class="small-row">
                <small-card v-bind="project"></small-card>
            </v-col>
        </v-row>
        <v-row class="pb-4">
            <v-col cols="12" class="d-flex flex-column align-center pa-0 mt-10">
                <span>
                    Made with <a href="https://nuxtjs.org/">Nuxt.js</a> and
                    <a href="https://vuetifyjs.com/en/">Vuetify</a>
                </span>
                <span class="mt-2">&copy; {{ new Date().getFullYear() }} Will Dickinson</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { VueTyper } from 'vue-typer';

import projects from '~/static/projects.json';

import BigCard from '~/components/BigCard.vue';
import MediumCard from '~/components/MediumCard.vue';
import SmallCard from '~/components/SmallCard.vue';
import IconLink from '~/components/IconLink.vue';

export default {
    components: {
        VueTyper,
        BigCard,
        MediumCard,
        SmallCard,
        IconLink
    },
    data() {
        return {
            projects: projects,
            iconColors: {
                baseColor: 'black',
                hoverColor: 'white',
                tipColor: 'grey darken-3'
            },
            showIcons: false,
            enableIcons: false
        };
    },
    methods: {
        iconsReady() {
            this.showIcons = true;
            // setTimeout(() => {
            //     this.enableIcons = true;
            // }, 500);
        }
    },
    computed: {
        iconBar() {
            return {
                animation: this.showIcons ? 'delay-icons 2s linear' : 'none',
                visibility: this.showIcons ? 'visible' : 'hidden'
                // opacity: this.showIcons ? 1 : 0,
                // pointerEvents: this.showIcons ? 'auto' : 'none'
            };
        }
    }
};
</script>


<style lang="scss">
@import '~assets/variables.scss';

#header {
    // font-size: 10vw;
}

#bio {
    font-size: 1.1rem;
    border-top: 2px solid map-get($grey, 'darken-4');
    border-bottom: 2px solid map-get($grey, 'darken-4');
}

@keyframes delay-icons {
    0% {
        visibility: hidden;
        opacity: 0;
    }

    50% {
        visibility: hidden;
        opacity: 0.5;
    }

    100% {
        visibility: visible;
        opacity: 1;
    }
}

.icon-bar {
    // animation: none;
    // transition: visiblity 0s linear 0.5s;
    // transition: opacity 1s linear 0.5s;
    // transition: pointer-events 0s linear 1s;
}

.full-height {
    height: 100vh;
}

.big-row {
    min-height: 220px;
}

.medium-row {
    min-height: 200px;
}

.small-row {
    height: 200px;
}

a {
    text-decoration: none;
    color: $link !important;
    transition: 0.2s;
    &:hover {
        color: $link-hover !important;
    }
}

// Vue typer styles
.vue-typer {
    font-size: 50px;
}

.vue-typer .custom.caret {
    width: 3px;
    line-height: 50px;
}
</style>