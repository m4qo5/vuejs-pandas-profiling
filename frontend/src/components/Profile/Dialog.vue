<template>
  <v-dialog v-model="dialog" width="850px" height="850px">
    <v-card>
      <v-card-title class="white darken-2 font-weight-thin display-1">Create project</v-card-title>
      <v-container>
        <v-row class="mx-0">
          <v-col class="align-center justify-space-between" cols="6">
            <v-row align="center" class="mx-0">
              <v-text-field placeholder="Name" />
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-text-field type="number" min="0" placeholder="Version" />
          </v-col>
          <v-col cols="12">
            <v-textarea solo name="input-7-4" label="Description"></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-file-input accept="image/*" label="Project Image" class="mx-0"></v-file-input>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="dialog = false">Cancel</v-btn>
        <VerticalDivider class="mx-2 mb-2" vertical inset color="black" />
        <v-btn text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import VerticalDivider from "../MainPageSmallComponents/VerticalDivider";

export default {
  name: "Dialog",
  components: {
    VerticalDivider
  },
  data: () => ({
    dialog: false
  })
};
</script>