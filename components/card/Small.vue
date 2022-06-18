<template>
    <div class="flip-outer">
        <div class="flip-inner">
            <div class="front">
                <v-card class="fill-height" elevation="4" color="black">
                    <img :src="mediaPath" :alt="title" />
                </v-card>
            </div>
            <div class="back">
                <v-card
                    class="fill-height pa-4 d-flex flex-column justify-space-between align-center"
                    elevation="4"
                    color="light-green lighten-2"
                >
                    <v-card-title class="justify-center py-1">{{
                        title
                    }}</v-card-title>
                    <v-card-text class="text-center py-1">
                        {{ description }}
                    </v-card-text>
                    <v-card-text class="d-flex justify-center text--black">
                        <v-btn
                            class="px-10"
                            color="light-green lighten-1"
                            :href="url"
                            >Demo</v-btn
                        >
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { title, url, mediaPath, description } = defineProps(cardProps);
</script>

<style lang="scss" scoped>
@import "@/assets/cards/small.scss";
</style>
