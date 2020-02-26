<template>
    <v-row justify="center" v-if="!loading">
        <v-expansion-panels accordion>
            <v-expansion-panel
                v-for="file in filesByProject"
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
    ...mapGetters(["loading", "selectedProject", "projectFiles"]),
    filesByProject() {
        let arr = this.projectFiles;
        return arr.filter(file => file.project == this.selectedProject.id);
    }   
    }
}
</script>