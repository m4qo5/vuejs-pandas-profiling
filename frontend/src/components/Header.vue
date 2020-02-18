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
          src="https://cdn.onlinewebfonts.com/svg/img_532570.png"
          transition="scale-transition"
          width="50"
        />
        <v-img
          alt="ML Flow Logo"
          class="shrink mr-2"
          contain
          src="https://pngimage.net/wp-content/uploads/2018/06/flow-png-5.png"
          transition="scale-transition"
          width="70"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn large color="primary" class="ml-5">Sign Up</v-btn>
      <v-btn large color="primary" class="ml-5">Sign In</v-btn>
      
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>