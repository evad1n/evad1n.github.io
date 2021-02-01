<template>
    <div class="flip-outer">
        <div class="flip-inner">
            <div class="front">
                <v-card class="fill-height" elevation="4" color="light-green lighten-2">
                    <img :src="mediaPath" :alt="title" />
                </v-card>
            </div>
            <div class="back">
                <v-card
                    class="fill-height d-flex flex-column justify-space-between align-center"
                    elevation="4"
                    color="light-green lighten-2"
                >
                    <v-card-title class="justify-center py-1">{{ title }}</v-card-title>
                    <v-card-text class="text-center py-1">
                        {{ description }}
                    </v-card-text>
                    <v-card-text class="d-flex justify-center">
                        <v-btn class="px-10" color="light-green lighten-4" :href="url">go</v-btn>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        url: String,
        mediaPath: String,
        description: String,
        tools: Array
    },
    methods: {
        showBack() {},
        showFront() {}
    }
};
</script>

<style lang="scss">
.flip-outer {
    display: block;
    height: 100%;
    perspective: 1000px;
}

.flip-inner {
    transform-style: preserve-3d;
    position: relative;
    transition: transform 0.7s;
    width: 100%;
    height: 100%;
}

.flip-outer:hover .flip-inner {
    transform: rotateY(180deg);
}

.front,
.back {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
}

.front {
    z-index: 2;
}

.back {
    transform: rotateY(180deg);
}

img {
    height: 100%;
    width: 100%;
}
</style>