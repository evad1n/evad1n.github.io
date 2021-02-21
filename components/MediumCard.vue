<template>
    <v-card class="card" :class="reverseGrid" elevation="4" color="light-green lighten-2">
        <div class="img" :class="reverseClasses[0]">
            <a :class="imageBorders" :href="url">
                <img :src="mediaPath" :alt="title" />
            </a>
        </div>
        <div class="desc" :class="reverseClasses[1]">
            <v-card-title class="justify-center text-center text-break">{{ title }}</v-card-title>
            <v-card-text class="text-center" v-html="description"> </v-card-text>
            <div class="d-flex justify-center pb-2">
                <v-chip v-for="(tool, i) in tools" :key="i" label class="ma-1 light-green darken-2 white--text">{{
                    tool
                }}</v-chip>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        url: String,
        mediaPath: String,
        description: String,
        tools: Array,
        reverse: Boolean
    },
    computed: {
        imageBorders() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return this.reverse ? 'left-image' : 'right-image';
                default:
                    return 'top-image';
            }
        },
        imgPath() {
            return `/${this.mediaPath}`;
        },
        reverseClasses() {
            return this.reverse ? ['left', 'right'] : ['right', 'left'];
        },
        reverseGrid() {
            return this.reverse ? 'card-left' : 'card-right';
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~assets/cards/card.scss';
@import '~assets/cards/medium.scss';
</style>