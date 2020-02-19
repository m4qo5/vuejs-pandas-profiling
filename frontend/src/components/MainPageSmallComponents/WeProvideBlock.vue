<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="step in steps" :key="step.id" xs4>
        <v-card class="mx-auto" max-width="600">
          <v-img class="align-top" height="250px" :src="step.picture">
           <v-card-title class="display-2 font-weight-thin">{{ step.title }}</v-card-title>
           <v-card-text class="font-italic font-weight-bold subtitle-2">{{ step.description }}</v-card-text>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "WeProvideBlock",
  computed: {
    ...mapGetters(["steps", "stepsAreLoading"])
  },
  async mounted() {
    await this.$store.dispatch("getSteps");
  }
};
</script>
