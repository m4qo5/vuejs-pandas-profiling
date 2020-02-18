<template>
  <v-carousel :show-arrows="false" cycle height="980" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    name: 'MainPageSlider',

    data () {
      return {
        items: [
          {
            src: 'https://inflowanalysis.com/wp-content/uploads/2016/02/flOw_postercolor72-01.png',
          },
          {
            src: 'https://ain.ua/special/data-science/images/tild3634-3164-4337-b561-633663663261__1.jpg',
          },
          {
            src: 'https://miro.medium.com/max/1200/1*eDZkMx3ewFG9bim7lXE_-Q.jpeg',
          },
          {
            src: 'https://theme.zdassets.com/theme_assets/727006/0f12823aa58add30640e72566822b84437a96bc2.png',
          },
        ],
      }
    },
  }
</script>