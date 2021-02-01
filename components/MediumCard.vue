<template>
    <v-card class="d-flex flex-column" elevation="4" color="light-green lighten-2" min-height="100%">
        <v-row class="no-gutters flex-grow-1 d-flex flex-row flex-sm-column justify-space-between">
            <v-col
                class="flex-grow-1 d-flex flex-column img-flex"
                cols="6"
                sm="12"
                order-sm="1"
                :order="reverse ? 2 : 1"
            >
                <a
                    class="flex-grow-1 img-link"
                    :class="imageBorders"
                    :href="url"
                    :style="{ 'background-image': `url(${imgPath})` }"
                >
                    <!-- <img :class="imageBorders" :src="mediaPath" :alt="title" /> -->
                </a>
            </v-col>
            <v-col
                class="d-flex flex-column justify-space-between"
                cols="6"
                sm="12"
                order-sm="2"
                :order="reverse ? 1 : 2"
            >
                <v-card-title class="justify-center text-center text-break">{{ title }}</v-card-title>
                <v-card-text class="text-center">
                    {{ description }}
                </v-card-text>
                <div class="d-flex justify-center pb-2">
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
                    return this.reverse ? 'right-image' : 'left-image';
                default:
                    return 'top-image';
            }
        },
        imgPath() {
            return require(`~/static/${this.mediaPath}`);
        }
    }
};
</script>

<style lang="scss" scoped>
.img-flex {
    flex-basis: 300px;
}

.img-link {
    display: block;
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    // background-size: cover;

    img {
        height: 100%;
        width: 100%;
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