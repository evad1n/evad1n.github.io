<template>
    <v-tooltip bottom :color="tipColor">
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon :href="url" v-bind="attrs" v-on="on">
                <v-hover v-model="hovered">
                    <v-icon x-large :color="hovered ? hoverColor : baseColor">{{ icon }}</v-icon>
                </v-hover>
            </v-btn>
        </template>
        <span>GitHub</span>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        baseColor: String,
        hoverColor: String,
        tipColor: String,
        url: String,
        icon: String
    },
    data() {
        return {
            hovered: false
        };
    }
};
</script>

<style>
.v-btn:before {
    opacity: 0 !important;
}
.v-ripple__container {
    opacity: 0 !important;
}
</style>