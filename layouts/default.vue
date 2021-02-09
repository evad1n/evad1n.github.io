<template>
    <v-app>
        <Nuxt />
        <client-only>
            <particles
                color="#000"
                :particles-number="100"
                shape-type="circle"
                :particle-size="3"
                movement-direction="top"
                lines-color="#000"
                :line-linked="true"
                :move-speed="0.75"
            />
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
    // background-color: #c4ec96;
    font-size: 5rem;
}

.v-application {
    background-color: rgba($color: #ff9393, $alpha: 0) !important;
    z-index: -4;
}

div[id^='particles-instance-'] {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: rgba($color: #c4ec96, $alpha: 1);
    z-index: -1;
}
</style>