<template>
    <v-btn :icon="props.icon" :href="props.url" variant="text">
        <v-hover #default="{ hovered }">
            <!-- <v-icon size="x-large" :icon="props.icon" /> -->
            <span v-show="hovered" class="font-weight-regular">{{
                props.tooltip
            }}</span>
        </v-hover>
    </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
    baseColor: String,
    hoverColor: String,
    tipColor: String,
    url: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    tooltip: {
        type: String,
        required: true,
    },
});

console.log(props);
</script>

<style lang="scss" scoped>
.v-btn:before {
    opacity: 0 !important;
}
.v-ripple__container {
    opacity: 0 !important;
}
</style>
