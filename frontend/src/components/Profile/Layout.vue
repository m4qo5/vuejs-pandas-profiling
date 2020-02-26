<template>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white darken-3"
      white
    >
      <v-app-bar-nav-icon @click="clickDrawer"/>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down black--text">The Flow</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="!main" to="/" text class="black--text">Back</v-btn>
      <VerticalDivider
        class="mx-2"
        vertical
        inset
        color="black"/>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="48px"
          item
        >
          <v-img
            class="mr-0"
            src="@/assets/logo.png"
            alt="The Flow Logo"
          /></v-avatar>
      </v-btn>
    </v-app-bar>
</template>

<script>
  import VerticalDivider from '../MainPageSmallComponents/VerticalDivider'
  import { mapGetters } from "vuex";

  export default {
    name: 'Layout',
    components: {
        VerticalDivider
    },
    methods: {
        clickDrawer() {
            this.$store.commit('SET_SHOW_DRAWER')
        }
    },
    computed: {
    ...mapGetters(["isAuthenticated", "currentUser", "selectedProject", "drawer"]),
    main(){
        return this.$route.path === '/'
    }},
  }
</script>