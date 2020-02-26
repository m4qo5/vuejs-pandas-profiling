<template>
  <v-app id="inspire">
      <Layout />
      <DrawerList />
      <SingleProject v-if="isSelectedProject"/>
  </v-app>
</template>

<script>
import Layout from '../components/Profile/Layout'
import DrawerList from '../components/Profile/DrawerList'
import SingleProject from '../components/Profile/SingleProject'
import { mapGetters } from "vuex";

export default {
  name: "ProjectFiles",
  components: {
    Layout, DrawerList, SingleProject
  },
  computed: {
    ...mapGetters(["isSelectedProject"])
  },
};
</script>