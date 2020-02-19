<template>
  <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="ML Flow Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="50"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="!main" to="/" text class="black--text">Back</v-btn>
      <VerticalDivider
        class="mx-2"
        vertical
        inset
        color="black"/>
      <v-btn text class="black--text">Sign Up</v-btn>
      <VerticalDivider
        class="mx-2"
        vertical
        inset
        color="black"/>
      <v-btn to="/sign-in" text class="black--text">Sign In</v-btn>
    </v-app-bar>
</template>

<script>
import VerticalDivider from './MainPageSmallComponents/VerticalDivider'

export default {
  name: 'Header',
  components: {
      VerticalDivider,
  },
  computed: {
    main(){
        return this.$route.path === '/'
    },
}
}
</script>