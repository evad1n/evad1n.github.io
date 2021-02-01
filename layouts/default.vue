<template>
    <v-app>
        <Nuxt />
    </v-app>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import '~assets/variables.scss';

html {
    font-family: 'Courier New', Courier, monospace;
    background-color: #c4ec96;
}

.v-application {
    background-color: rgba($color: #000000, $alpha: 0) !important;
}
</style>