<template>
  <v-content style="padding: 0 0 0 0">
    <v-container grid-list-lg text-xs-center>
      <v-layout row wrap v-if="!projectsAreLoading">
        <v-flex v-for="project in projects" :key="project.id" xs3>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="400px" shaped :elevation="24">
              <v-img
                class="align-top"
                height="200px"
                :src="project.image"
                gradient="to top right, rgba(255,255,255,.33), rgba(0,100,170,.15)"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-slow-in-slow-out v-card--reveal"
                    style="height: 100%;"
                  >
                    <v-btn @click="fileUploadClick(project)" color="green" dark fab>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </v-expand-transition>
                <v-card-title
                  class="display-1 font-weight-light"
                >{{ project.name }} v{{ project.version }}</v-card-title>
                <v-card-subtitle class="title font-weight-bold">{{ project.description }}</v-card-subtitle>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    {{selectedProject}}
    <ProjectFileDialog ref="dialog"/>
  </v-content>
</template>


<script>
import { mapGetters } from "vuex";
import ProjectFileDialog from './ProjectFileDialog'


export default {
  name: "Content",
  components: {
      ProjectFileDialog
  },
  computed: {
    ...mapGetters(["projects", "projectsAreLoading", "selectedProject"])
  },
  methods: {
      fileUploadClick(project) {
        this.$store.dispatch("selectProject", project);
        this.$refs.dialog.dialog = !this.$refs.dialog.dialog
      }
  },
  async mounted() {
    await this.$store.dispatch("getProjects");
  }
};
</script>