<template>
    <v-row justify="center" v-if="!loading">
        <h1 class="display-2 text-center pt-12 pb-12 font-weight-thin"
            v-if="!projectHaveFiles">
            You don't have any data yet. Please, come back and add data to your project.
        </h1>
        <v-expansion-panels accordion>
            <v-expansion-panel
                v-for="file in selectedProject.project_files"
                :key="file.id"
            >
                <v-expansion-panel-header class="display-1 font-weight-thin">{{ file.description }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
  </v-row>
</template>


<script>
import { mapGetters } from "vuex";

export default {
    name: "SingleProject",
    computed: {
    ...mapGetters(["loading", "selectedProject", "isSelectedProject"]),
    projectHaveFiles() {
        let isMyObjectEmpty = !Object.keys(this.selectedProject.project_files).length;
        return !isMyObjectEmpty
    }
    },
    created() {
        this.$store.dispatch("selectProject", this.$route.params.id);
    }
}
</script>