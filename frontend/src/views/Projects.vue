<template>
  <v-app id="inspire">
      <Layout />
      <DrawerList/>
      <Content />
      <ProjectFileDialog v-if="fileDialog"/>
      <ProjectDialog v-if="projectDialog"/>
  </v-app>
</template>

<script>
import Layout from '../components/Profile/Layout'
import DrawerList from '../components/Profile/DrawerList'
import ProjectDialog from '../components/Profile/ProjectDialog'
import ProjectFileDialog from '../components/Profile/ProjectFileDialog'
import Content from '../components/Profile/Content'
import { mapGetters } from "vuex";

export default {
  name: "Projects",
  components: {
    Layout, DrawerList, ProjectDialog, Content, ProjectFileDialog
  },
  computed: {
    ...mapGetters(["projectDialog", "fileDialog"])
  },
};
</script>