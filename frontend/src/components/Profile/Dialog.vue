<template>
  <v-dialog v-model="dialog" width="850px" height="850px">
    <v-card>
      <v-card-title class="white darken-2 font-weight-thin display-1">Create project</v-card-title>
      <v-container>
        <v-form id="createProject" enctype="multipart/form-data" method="post" @submit.prevent="createProject">
            <v-row class="mx-0">
            <v-col class="align-center justify-space-between" cols="6">
                <v-row align="center" class="mx-0">
                <v-text-field name="name" placeholder="Name"/>
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-text-field name="version" type="number" min="0" placeholder="Version" />
            </v-col>
            <v-col cols="12">
                <v-textarea solo name="description" label="Description"></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-file-input id="file-input" accept="image/*" name="image" label="Project Image" class="mx-0"></v-file-input>
            </v-col>
            </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="clear">Cancel</v-btn>
        <VerticalDivider class="mx-2 mb-2" vertical inset color="black" />
        <v-btn type="submit" text>Save</v-btn>
      </v-card-actions>
      </v-form>
      </v-container>
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
    dialog: false,
  }),
  methods: {
    createProject: function(e) {
        var form = document.getElementById('createProject');
        var formData = new FormData(form);
        for(var pair of formData.entries()) {
    		console.log(pair); 
        }
        this.$store.dispatch('createProject', formData);
        this.clear()
    },
    clear: function() {
        this.dialog = false;
        var form = document.getElementById('createProject');
        var file = document.getElementById('file-input');
        form.reset();
    }
}
};
</script>