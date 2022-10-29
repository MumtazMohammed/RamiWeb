<template>
  <v-app>
    <v-main style="min-height: 100vh !important">
      <router-view />
    </v-main>
    <!-- <IconSearch /> -->
    <v-footer dark padless>
      <v-card
        flat
        tile
        color="blue-grey lighten-5"
        class="red--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 light-blue--text text--darken-1"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="grey--text text--darken-1 pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="grey--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      type: "number",
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");
@import "./scss/virables";
#app {
  background: white;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.v-main {
  padding: 0px !important;
}
::v-deep .v-application--wrap {
  min-height: 94vh !important;
}
</style>
