<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 id="title">My Repositories</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-container>
                    <v-row v-for="repo in repos" :key="repo.name">
                        <repo-card repo="repo" />
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RepoCard from '~/components/RepoCard.vue';
export default {
    components: {
        RepoCard
    },
    data() {
        return {
            repos: []
        };
    },
    created() {
        console.log('reload');
        // Fetch
        // Sort by pushed_at
    }
};
</script>

<style lang="scss">
#title {
    text-align: center;
}
</style>