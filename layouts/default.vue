<template>
    <v-app>
        <Nuxt />
        <client-only>
            <particles />
        </client-only>
    </v-app>
</template>

<script>
import Particles from '~/components/Particles';

export default {
    components: {
        Particles
    },
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

div[id^='particles-instance-'] {
    height: 100vh !important;
    width: 100vw !important;
    position: fixed !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: rgba($color: #05114e, $alpha: 0.4);
    z-index: 2 !important;
}
</style>