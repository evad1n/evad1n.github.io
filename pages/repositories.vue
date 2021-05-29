<template>
    <v-container fluid>
        <div id="back">
            <nuxt-link to="/">
                <v-icon large>mdi-arrow-left</v-icon>
            </nuxt-link>
        </div>
        <v-row>
            <v-col>
                <h1 id="title">My Repositories</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="primary">
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            color="secondary"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="repos"
                        :search="search"
                        :items-per-page="15"
                        no-results-text="No matching repositories"
                        loading="loaded"
                        loading-text="Crunching the latest data...."
                        class="elevation-1 primary"
                        @click:row="clickRow"
                    >
                        <!-- Date formatting -->
                        <template v-slot:item.pushed_at="{ item }">
                            {{ new Date(item.pushed_at).toLocaleDateString() }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loaded: false,
            search: '',
            repos: [],
            // Which fields to show
            headers: [
                {
                    text: 'Name',
                    value: 'name'
                },
                {
                    text: 'Description',
                    value: 'description',
                    sortable: false
                },
                {
                    text: 'Primary Language',
                    value: 'language'
                },
                {
                    text: 'Last Push',
                    value: 'pushed_at'
                }
            ]
        };
    },
    methods: {
        clickRow(item) {
            // Open repo page in new tab/window
            window.open(item.html_url);
        }
    },
    async created() {
        // https://docs.github.com/en/rest/reference/repos
        // Get my public repos
        let data = await fetch('https://api.github.com/users/evad1n/repos');
        let repos = await data.json();
        // Filter out archived repos
        repos = repos.filter((repo) => !repo.archived);
        // Sort by most recent push
        repos.sort((a, b) => (a.pushed_at > b.pushed_at ? -1 : 1));
        this.repos = repos;
        // Done loading
        this.loaded = true;
    }
};
</script>

<style lang="scss">
#back {
    position: absolute;
    top: 5;
    left: 5;

    & .v-icon:hover {
        color: black;
    }
}

#title {
    margin-top: 20px;
    text-align: center;
}

tbody {
    tr:hover {
        background-color: #0002 !important;
        cursor: pointer;
    }
}
</style>