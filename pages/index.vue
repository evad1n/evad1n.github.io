<template>
    <v-container>
        <v-row class="full-height">
            <v-col cols="12" class="d-flex flex-column justify-center">
                <h1 class="text-center">WILL DICKINSON</h1>
                <div class="mx-auto">
                    <icon-link v-bind="{ ...iconColors, url: 'https://github.com/evad1n', icon: 'mdi-github' }" />
                </div>
            </v-col>
        </v-row>
        <v-row id="bio" class="my-4">
            <v-col cols="12">
                <p class="mx-auto text-center h4 ma-0 pa-10">Game Design turned Computer Science student.</p>
            </v-col>
        </v-row>
        <v-row class="my-8">
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
            <v-col cols="12" class="d-flex flex-column align-center subtitle-2 pa-0 mt-10">
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
import projects from '~/static/projects.json';

import BigCard from '~/components/BigCard.vue';
import MediumCard from '~/components/MediumCard.vue';
import SmallCard from '~/components/SmallCard.vue';
import IconLink from '~/components/IconLink.vue';

export default {
    components: {
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
            }
        };
    }
};
</script>


<style lang="scss">
@import '~assets/variables.scss';

#bio {
    border-top: 2px solid map-get($grey, 'darken-4');
    border-bottom: 2px solid map-get($grey, 'darken-4');
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
</style>