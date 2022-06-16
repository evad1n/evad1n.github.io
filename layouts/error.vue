<template>
    <v-container class="fill-height text-center">
        <v-row>
            <v-col class="d-flex flex-column justify-center align-center">
                <h1 id="huge">404</h1>
                <h1 class="pb-10">Nope</h1>
                <NuxtLink to="/">To Will Dickinson's home page </NuxtLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
    font-size: 50px;
}

#huge {
    font-size: 200px;
}

#fancy {
    font-size: 1rem;
}
</style>
