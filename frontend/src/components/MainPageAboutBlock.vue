<template>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <h1 class="display-2 text-center pt-12 pb-12 font-weight-thin">Data Science is everywhere. We can help you keep your project going on.</h1>
        <WeProvideBlock />
      </v-responsive>
    </v-card>
  
</template>


<script>
import WeProvideBlock from './MainPageSmallComponents/WeProvideBlock'

  export default {
    name: 'MainPageAboutBlock',
    components : {
        WeProvideBlock
    }
}
</script>