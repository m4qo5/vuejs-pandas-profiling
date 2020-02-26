<template>
  <v-carousel :show-arrows="false" cycle height="835" hide-delimiters>
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
            src: require('@/assets/flow-slider-1.png'),
          },
          {
            src: require('@/assets/flow-slider-2.jpg'),
          },
          {
            src: require('@/assets/flow-slider-3.jpeg'),
          },
          {
            src: require('@/assets/flow-slider-4.png'),
          },
        ],
      }
    },
  }
</script>