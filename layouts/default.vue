<template>
    <v-app>
        <keep-alive>
            <Nuxt />
        </keep-alive>
        <client-only>
            <particles
                color="#000"
                :particles-number="100"
                shape-type="circle"
                :particle-size="3"
                movement-direction="top"
                lines-color="#000"
                :line-linked="true"
                :move-speed="1"
            />
        </client-only>
    </v-app>
</template>

<script>
import Particles from '~/components/Particles';

export default {
    name: 'default',
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
@import '~assets/global.scss';
</style>