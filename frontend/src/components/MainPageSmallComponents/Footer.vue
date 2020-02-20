<template>
  <v-card height="50">
    <v-footer
      absolute
      class="font-weight-thin black--text"
      color="white lighten-1"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — Flow Inc.
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
    name: "Footer"
}
</script>