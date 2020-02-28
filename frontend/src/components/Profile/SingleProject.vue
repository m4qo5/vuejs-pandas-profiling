<template>
    <v-row justify="center" v-if="!loading">
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
    },
    created() {
        this.$store.dispatch("selectProject", this.$route.params.id);
    }
}
</script>