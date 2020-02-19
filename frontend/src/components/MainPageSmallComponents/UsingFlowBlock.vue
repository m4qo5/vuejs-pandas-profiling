<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap v-if="!stepsAreLoading">
      <v-flex v-for="step in steps" :key="step.id" xs4>
        <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="600" shaped>
            <v-img class="align-top" height="250px" :src="step.picture" gradient="to top right, rgba(255,255,255,.33), rgba(0,100,170,.15)">
                <v-expand-transition>
                    <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out v-card--reveal font-italic font-weight-light headline black--text"
                        style="height: 100%;"
                    >
                      {{ step.description }}
                    </div>
                </v-expand-transition>
            <v-card-title class="display-2 font-weight-thin">{{ step.title }}</v-card-title>
            </v-img>
            </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>