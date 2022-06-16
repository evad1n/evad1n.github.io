<template>
    <v-tooltip bottom :color="tipColor">
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon :href="url" v-bind="attrs" v-on="on">
                <v-hover v-model="hovered">
                    <v-icon x-large :color="hovered ? hoverColor : baseColor">{{ icon }}</v-icon>
                </v-hover>
            </v-btn>
        </template>
        <span class="font-weight-regular">{{ tooltip }}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        baseColor: String,
        hoverColor: String,
        tipColor: String,
        url: String,
        icon: String,
        tooltip: String
    },
    data() {
        return {
            hovered: false
        };
    }
};
</script>

<style lang="scss" scoped>
.v-btn:before {
    opacity: 0 !important;
}
.v-ripple__container {
    opacity: 0 !important;
}
</style>