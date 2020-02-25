<template>
  <v-dialog v-model="dialog" width="500px" height="850px" v-on:click:outside="clear">
    <v-card>
      <v-card-title class="white darken-2 font-weight-thin display-1">Attach file to project</v-card-title>
      <v-container>
        <v-form enctype="multipart/form-data" method="post" @submit.prevent="createProjectFile">
            <v-row class="mx-0">
                <v-col cols="12" class="pt-0 pb-0">
                    <v-textarea solo name="description" v-model="projectFile.description" label="Description"></v-textarea>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0">
                    <v-file-input
                        v-model="projectFile.file"
                        accept=".csv"
                        name="file"
                        label="Project File"
                        class="mx-0"
                        clearable>
                    </v-file-input>
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
  name: "ProjectFileDialog",
  components: {
    VerticalDivider
  },
  data: function () {
    return  {
        dialog: false,
        projectFile: {
            description: "",
            file: null,
            project: null,
        }
    }
  },
  methods: {
    createProjectFile: function(event) {
        var fdata = new FormData();
        var image = document.getElementById("file-input").files[0];
        fdata.append("name", this.project.name);
        fdata.append("description", this.project.description);
        fdata.append("version", this.project.version);
        fdata.append("image", image);
        this.$store.dispatch('createProject', fdata);
        this.clear()
    },
    clear: function() {
        this.dialog = false;
        this.$store.dispatch("selectProject", null);
        //var form = document.getElementById('createProject');
        //var file = document.getElementById('file-input');
        //this.projectFile.file = null;
        //form.reset();
    }
}
};
</script>