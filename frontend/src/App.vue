<template>
  <v-app>
    <Header></Header>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/MainPageSmallComponents/Footer'

export default {
  name: "App",
  components: {
    Header, Footer
  },
  data: () => ({
    
  })
};
</script>
