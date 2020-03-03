<template>
    <div>
        <v-expansion-panels>
            <v-expansion-panel
            multiple
            v-for="file in projectFiles"
            :key="file.id"
            >
                <v-expansion-panel-header class="display-1 font-weight-thin">{{file.file_name}}</v-expansion-panel-header>
                <v-expansion-panel-content class="content">
                    Description: {{file.description}} <br/> Size: {{file.filesize}}
                    <div v-if="file.report">
                        <v-card-text class="font-weight-thin display-1 justify-center" center>
                            Generated report
                        </v-card-text>
                        <iframe frameborder="0" seamless align="baseline" class="frameReport" width="100%" :src="file.report" height="100%">
                        </iframe>
                    </div>
                    <ReportDialog :file_id="file.id" v-else/>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
import ReportDialog from './ReportDialog'

export default {
    name: "SingleProject",
    components: {ReportDialog},
    data () {
        return { 

        }
    },
    computed: {
    ...mapGetters(["loading", "selectedProject", "reportDialog"]),
    projectFiles() {
        return this.$store.getters.selectedProject.project_files
    },
    },
    mounted: function() {
        this.$store.dispatch("selectProject", this.$route.params.id);
        this.$store.dispatch("getProjects");
    },
    methods: {
      generateReport(value) {
        this.$store.dispatch("getFileReport", value);
      }
    }
}
</script>


<style scoped>
.frameReport {
    position: relative;
    width: 100%;
    height: 800px;
}

.content {
    min-height: 100%
}


</style>