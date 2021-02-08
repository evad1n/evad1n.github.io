<template>
    <v-card class="d-flex flex-column" elevation="4" color="light-green lighten-2" min-height="100%">
        <v-row class="no-gutters flex-grow-1 d-flex flex-column flex-sm-row">
            <v-col class="img-flex d-flex flex-column" order="1" :order-sm="reverse ? 2 : 1" cols="12" sm="5">
                <a class="flex-grow-1 img-link" :href="url">
                    <img :class="imageBorders" :src="mediaPath" :alt="title" />
                </a>
            </v-col>
            <v-col
                class="desc-flex d-flex flex-column justify-space-between"
                order="2"
                :order-sm="reverse ? 1 : 2"
                cols="12"
                sm="7"
            >
                <v-card-title class="justify-center text-center text-break">{{ title }}</v-card-title>
                <v-card-text class="text-center" v-html="description"> </v-card-text>
                <div class="d-flex justify-center flex-wrap pb-2">
                    <v-chip v-for="(tool, i) in tools" :key="i" label class="ma-1 light-green darken-2 white--text">{{
                        tool
                    }}</v-chip>
                </div>
            </v-col>
        </v-row>
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
                    return 'top-image';
                default:
                    return this.reverse ? 'right-image' : 'left-image';
            }
        },
        imgPath() {
            return `/${this.mediaPath}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.img-flex {
    flex-basis: 250px;
    flex-grow: 1;
}

.desc-flex {
    flex-grow: 2;
}

.img-link {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        height: 100%;
        object-fit: contain;
    }
}

.left-image {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.right-image {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.top-image {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
</style>
