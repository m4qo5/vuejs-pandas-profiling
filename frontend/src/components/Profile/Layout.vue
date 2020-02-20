<template>
  <v-app id="inspire">
    <DrawerList ref="drawer"/>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white darken-3"
      white
    >
      <v-app-bar-nav-icon @click.stop="$refs.drawer.drawer = !$refs.drawer.drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down black--text">The Flow</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        large
      >
        <v-avatar
          size="48px"
          item
        >
          <v-img
            class="mr-0"
            src="@/assets/logo.png"
            alt="The Flow Logo"
          /></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      </v-container>
    </v-content>
    <v-btn
      bottom
      color="black"
      dark
      fab
      fixed
      right
      @click="$refs.dialog.dialog = !$refs.dialog.dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <Dialog ref="dialog"/>
  </v-app>
</template>

<script>
  import VerticalDivider from '../MainPageSmallComponents/VerticalDivider'
  import DrawerList from './DrawerList'
  import Dialog from './Dialog'

  export default {
    name: 'Layout',
    components: {
        VerticalDivider, DrawerList, Dialog
    },
    data: () => ({
      items: [
        { icon: 'mdi-plus', text: 'Add data to project' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
      ],
    }),
  }
</script>