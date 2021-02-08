<template>
    <v-card class="d-flex flex-column" elevation="4" color="light-green lighten-2" min-height="100%">
        <v-row class="no-gutters flex-grow-1 d-flex flex-row flex-sm-column" id="r">
            <v-col
                class="img-flex d-flex flex-column"
                :class="imageBorders"
                cols="6"
                sm="12"
                order-sm="1"
                :order="reverse ? 2 : 1"
            >
                <a class="flex-grow-1 img-link" :href="url">
                    <img :class="imageBorders" :src="mediaPath" :alt="title" />
                </a>
            </v-col>
            <v-col
                class="desc-flex d-flex flex-column justify-space-between"
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
            return `/${this.mediaPath}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.img-flex {
    // height: 50%;
    // flex-basis: 50%;
    flex-grow: 1;
    background-color: black;
}

// .desc-flex {
//     flex-grow: 2;
// }

.img-link {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
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