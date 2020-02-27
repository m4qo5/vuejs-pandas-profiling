<template>
  <v-content style="padding: 0 0 0 0">
    <v-container grid-list-lg text-xs-center>
      <v-layout row wrap v-if="!loading">
        <v-flex v-for="project in projects" :key="project.id" xs3>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto scroll-y" max-width="500px" shaped :elevation="24">
              <v-img
                class="align-top"
                height="250px"
                :src="project.image"
                gradient="to top right, rgba(255,255,255,.33), rgba(0,100,170,.15)"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-slow-in-slow-out v-card--reveal"
                    style="height: 100%;"
                  >
                    <v-btn @click="fileUploadClick(project)" color="green" class="mr-5" dark fab>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn @click="selectProject(project)" color="dark" dark fab>
                      <v-icon>mdi-chevron-up</v-icon>
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
    <v-btn
        bottom
        color="black"
        dark
        fab
        fixed
        right
        @click="openModal"
        >
        <v-icon>mdi-plus</v-icon>
        </v-btn>
  </v-content>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Content",
  computed: {
    ...mapGetters(["projects", "loading", "selectedProject", "projectDialog", "fileDialog"]),
  },
  methods: {
      openModal() {
        this.$store.commit('SET_SHOW_PROJECT_DIALOG')
      },
      fileUploadClick(project) {
        this.$store.commit('SET_SHOW_FILE_DIALOG');
        this.$store.dispatch("selectProject", project);
        
      },
      selectProject(project) {
        this.$store.dispatch("selectProject", project);
        this.$store.commit('SET_IS_SELECTED_PROJECT')
        this.$store.dispatch("getProjectFiles");
        this.$router.push({ name: 'projectFiles', params: { id: project.id } })
      }
  },
  async mounted() {
    await this.$store.dispatch("getProjects");
  }
};
</script>