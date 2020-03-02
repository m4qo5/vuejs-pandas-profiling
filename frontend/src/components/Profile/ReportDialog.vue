<template>
  <v-row justify="center">
    <v-dialog v-model="reportDialog" :retain-focus="false" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" @click="generateReport(file_id)" dark v-on="on">Generate Report</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-progress-circular
        style="margin: 0 auto;"
        v-if="loading"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        ></v-progress-circular>
        <v-responsive :aspect-ratio="16/7" v-if="!loading">
            <v-card-text class="font-weight-thin display-1 justify-center">
                Generated report
            </v-card-text>
            <iframe width="100%" :srcdoc="fileReport" height="100%">
            </iframe>
        </v-responsive>
      </v-card>
      
    </v-dialog>
  </v-row>
</template>


<script>
import { mapGetters } from "vuex";
  
  export default {
    props: ['file_id'],
    name: 'ReportDialog',
    computed: {
    ...mapGetters(["reportDialog", "fileReport", "loading"]),
    reportDialog: {
        get() {
            return this.$store.getters.reportDialog
        },
        set() {
            this.$store.commit('SET_SHOW_REPORT_DIALOG')
        }
    }
    },
    methods: {
        close() {
            this.$store.commit('SET_SHOW_REPORT_DIALOG')
        },
        generateReport(value) {
        this.$store.dispatch("getFileReport", value);
        }
    }
  }
</script>