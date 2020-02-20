<template>
    <v-card>
      <v-responsive>
        <h1 class="display-2 text-center pt-12 pb-12 font-weight-thin">Data Science is everywhere. We can help you keep your project going on.</h1>
        <WeProvideBlock />
      </v-responsive>
    </v-card>
</template>


<script>
import WeProvideBlock from './MainPageSmallComponents/WeProvideBlock'
import VerticalDivider from './MainPageSmallComponents/VerticalDivider'

  export default {
    name: 'MainPageAboutBlock',
    components : {
        WeProvideBlock, VerticalDivider
    }
}
</script>