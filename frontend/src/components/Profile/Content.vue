<template>
    <v-content style="padding: 0 0 0 0">
        <v-container grid-list-lg text-xs-center>
            <v-layout row wrap v-if="!projectsAreLoading">
            <v-flex v-for="project in projects" :key="project.id" xs3>
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" max-width="400px" shaped>
                    <v-img class="align-top" height="200px" :src="project.image" gradient="to top right, rgba(255,255,255,.33), rgba(0,100,170,.15)">
                        <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-slow-in-slow-out v-card--reveal font-italic font-weight-light headline black--text"
                                style="height: 100%;"
                            >
                            {{ project.description }}
                            </div>
                        </v-expand-transition>
                    <v-card-title class="display-1 font-weight-light">{{ project.title }} v{{ project.version }}</v-card-title>
                    </v-img>
                    </v-card>
                </v-hover>
            </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>


<script>
import { mapGetters } from "vuex";

export default {
    name: "Content",
    computed: {
    ...mapGetters(["projects", "projectsAreLoading"])
    },
    async mounted() {
        await this.$store.dispatch("getProjects");
    }
}
</script>