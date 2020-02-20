<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white darken-3"
      white
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="white darken-2 font-weight-thin display-1">
          Create project
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="6"
            >
              <v-row
                align="center"
                class="mr-0 ml-0"
              >
                <v-text-field
                  placeholder="Name"
                />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                type="number"
                min="0"
                placeholder="Version"
              />
            </v-col>
            <v-col cols="12">
                <v-textarea
                solo
                name="input-7-4"
                label="Description"
                ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="dialog = false"
          >Cancel</v-btn>
          <VerticalDivider
            class="mx-2 mb-2"
            vertical
            inset
            color="black"/>
          <v-btn
            text
            @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import VerticalDivider from '../MainPageSmallComponents/VerticalDivider'

  export default {
    name: 'Layout',
    components: {
        VerticalDivider,
    },
    data: () => ({
      dialog: false,
      drawer: null,
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