<template>
    <v-container fluid>
        <div id="link-back">
            <nuxt-link to="/">
                <v-icon size="35" icon="mdi-arrow-left" />
            </nuxt-link>
        </div>
        <v-row>
            <v-col>
                <h1 id="title">My Repositories</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card color="primary">
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <!-- <v-data-table
                        :headers="HEADERS"
                        :items="repos"
                        :search="search"
                        :items-per-page="15"
                        no-results-text="No matching repositories"
                        loading="loaded"
                        loading-text="Crunching the latest data...."
                        class="elevation-1 primary"
                        @click:row="handleClickRow"
                    >
                        <template v-slot:[`item.pushed_at`]="{ item }">
                            {{ new Date(item.pushed_at).toLocaleDateString() }}
                        </template>
                    </v-data-table> -->
                    <v-table id="table-repos" theme="light">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Primary Language</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(repo, i) in repos"
                                :key="i"
                                @click="handleClickRow(repo)"
                            >
                                <td>{{ repo.name }}</td>
                                <td>{{ repo.description }}</td>
                                <td>{{ repo.language }}</td>
                                <td>
                                    {{
                                        new Date(
                                            repo.pushed_at
                                        ).toLocaleDateString()
                                    }}
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
type Repository = {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    archived: boolean;
    description: string;
    language: string;
    pushed_at: string;
};

type State = {
    repos: Array<Repository>;
    loaded: boolean;
    search: string;
};

let state: State = reactive({
    repos: [],
    loaded: false,
    search: "",
});

const { repos, loaded, search } = toRefs(state);

onMounted(async () => {
    try {
        repos.value = await getRepos();
    } catch (error) {
        console.error(error);
    } finally {
        loaded.value = true;
    }
});

async function getRepos(): Promise<Array<Repository>> {
    // https://docs.github.com/en/rest/reference/repos
    // Get my public repos
    const data = await fetch("https://api.github.com/users/evad1n/repos");
    let repos: Array<Repository> = await data.json();
    // Filter out archived repos
    repos = repos.filter((repo) => !repo.archived);
    // Sort by most recent push
    repos.sort((a, b) => (a.pushed_at > b.pushed_at ? -1 : 1));
    return repos;
}

const handleClickRow = (item) => {
    // Open repo page in new tab/window
    window.open(item.html_url);
};
</script>

<style lang="scss">
#link-back {
    position: absolute;
    top: 5px;
    left: 5px;

    padding: 8px;
}

#title {
    margin-top: 20px;
    text-align: center;
}

#table-repos {
    th {
        text-align: left;
    }
    tbody {
        tr:hover {
            background-color: #0002;
            cursor: pointer;
        }
    }
}
</style>
