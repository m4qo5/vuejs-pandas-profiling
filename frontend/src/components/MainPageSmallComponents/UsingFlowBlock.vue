<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="blue lighten-2"
      right
    >
      <v-card>
        <v-card-title class="blue lighten-2">
          <h2 class="display-2 text-center font-weight-thin">Sign Up</h2>
        </v-card-title>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue lighten-2"
      left
    >
      <v-card>
        <v-card-title class="blue lighten-2 justify-end">
          <h2 class="display-2 text-center font-weight-thin">Create First Project</h2>
        </v-card-title>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue lighten-2"
      right
    >
      <v-card>
        <v-card-title class="blue lighten-2">
          <h2 class="display-2 text-center font-weight-thin">Upload your dataset</h2>
        </v-card-title>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue lighten-2"
      left
    >
      <v-card>
        <v-card-title class="blue lighten-2 justify-end">
          <h2 class="display-2 text-center font-weight-thin">Get a report</h2>
        </v-card-title>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue lighten-2"
      right
    >
      <v-card>
        <v-card-title class="blue lighten-2">
          <h2 class="display-2 text-center font-weight-thin">Create new versions</h2>
        </v-card-title>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>