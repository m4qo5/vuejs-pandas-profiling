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
        v-if="!isAuthenticated && !main"
        class="mx-2"
        vertical
        inset
        color="black"/>
      <v-btn v-if="!isAuthenticated" text class="black--text">Sign Up</v-btn>
      <VerticalDivider
        v-if="!isAuthenticated"
        class="mx-2"
        vertical
        inset
        color="black"/>
      <v-btn v-if="!isAuthenticated" to="/sign-in" text class="black--text">Sign In</v-btn>
      <v-btn v-if="isAuthenticated" text class="black--text">Profile</v-btn>
      <VerticalDivider
        v-if="isAuthenticated"
        class="mx-2"
        vertical
        inset
        color="black"/>
      <v-btn v-if="isAuthenticated" @click="signOut" text class="black--text">Sign Out</v-btn>
    </v-app-bar>
</template>

<script>
import VerticalDivider from './MainPageSmallComponents/VerticalDivider'
import { mapGetters } from "vuex";

export default {
  name: 'Header',
  components: {
      VerticalDivider,
  },
  computed: {
    ...mapGetters(["isAuthenticated", "currentUser"]),
    main(){
        return this.$route.path === '/'
  }},
  methods: {
        signOut() {
            try {
                this.$store.dispatch("signOut");
            }
            catch {
                alert("Something wrong")
            }
        }
    }
}
</script>