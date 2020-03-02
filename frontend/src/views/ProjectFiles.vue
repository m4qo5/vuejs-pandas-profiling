<template>
  <div>
      <Layout />
      <DrawerList />
      <SingleProject/>
  </div>
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
  }
};
</script>