<template>
  <v-main class="overflow-hidden">
    <v-app-bar
      flat
      height="40"
      app
      color="blue-grey lighten-5"
      dark
      shrink-on-scroll
      prominent
    >
      <v-toolbar-title>
        <v-img src="../assets/CADelaide-Logo.png" max-width="200"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          dark
          show-arrows=""
          center-active
          slider-size="4"
          slider-color="yellow darken-4"
          align-with-title
        >
          <v-tab
            v-scroll-to="{
              el: '#home',
              duration: 500,
              lazy: false,
              easing: 'linear',
              offset: -150,
              force: true,
              cancelable: true,
              onStart: onStart,
              onDone: onDone,
              onCancel: onCancel,
              x: false,
              y: true,
            }"
            class="tab"
            >home</v-tab
          >
          <v-tab
            v-scroll-to="{
              el: '#services',
              duration: 500,
              lazy: false,
              easing: 'linear',
              offset: -65,
              force: true,
              cancelable: true,
              onStart: onStart,
              onDone: onDone,
              onCancel: onCancel,
              x: false,
              y: true,
            }"
            class="tab"
            >services</v-tab
          >
          <v-menu min-width="30%" rounded="0" offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-tab v-bind="attrs" v-on="on" class="tab">general</v-tab>
            </template>
            <v-list>
              <v-list-item
                link
                v-scroll-to="{
                  el: '#WHATWEDO',
                  duration: 500,
                  lazy: false,
                  easing: 'linear',
                  offset: -100,
                  force: true,
                  cancelable: true,
                  onStart: onStart,
                  onDone: onDone,
                  onCancel: onCancel,
                  x: false,
                  y: true,
                }"
              >
                <v-list-item-title>WHAT WE DO</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-scroll-to="{
                  el: '#EXPERTISE',
                  duration: 500,
                  lazy: false,
                  easing: 'linear',
                  offset: -100,
                  force: true,
                  cancelable: true,
                  onStart: onStart,
                  onDone: onDone,
                  onCancel: onCancel,
                  x: false,
                  y: true,
                }"
                link
              >
                <v-list-item-title>OUR CAD EXPERTISE</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-scroll-to="{
                  el: '#PROCESS',
                  duration: 500,
                  lazy: false,
                  easing: 'linear',
                  offset: -100,
                  force: true,
                  cancelable: true,
                  onStart: onStart,
                  onDone: onDone,
                  onCancel: onCancel,
                  x: false,
                  y: true,
                }"
                link
              >
                <v-list-item-title>
                  ENGINEERING DESIGN PROCESS
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-tab
            v-scroll-to="{
              el: '#contact',
              duration: 500,
              lazy: false,
              easing: 'linear',
              offset: -100,
              force: true,
              cancelable: true,
              onStart: onStart,
              onDone: onDone,
              onCancel: onCancel,
              x: false,
              y: true,
            }"
            class="tab"
            >contact</v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>
    <div id="home">
      <WelcomePage />
    </div>
    <div id="services">
      <ServiceCard />
    </div>
    <div id="WHATWEDO">
      <WhatWeDo />
    </div>
    <div id="EXPERTISE">
      <OURCADEXPERTISE />
    </div>
    <div id="PROCESS">
      <ENGINEERINGDESIGNPROCESS />
    </div>
    <div id="contact">
      <ContactUs />
    </div>
  </v-main>
</template>

<script>
import WelcomePage from "../A-Home/WelcomePage.vue";
import ServiceCard from "../A-Home/ServiceCard.vue";
import WhatWeDo from "../A-Home/WhatWeDo.vue";
import OURCADEXPERTISE from "../A-Home/OURCADEXPERTISE.vue";
import ENGINEERINGDESIGNPROCESS from "../A-Home/ENGINEERINGDESIGNPROCESS.vue";
import ContactUs from "../A-Home/ContactUs.vue";
const components = {
  WelcomePage,
  ServiceCard,
  WhatWeDo,
  OURCADEXPERTISE,
  ENGINEERINGDESIGNPROCESS,
  ContactUs,
};
export default {
  name: "Home",
  components,
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.tab {
  color: $fontcolorlinks !important;
  font-family: $fontfamliy;
  letter-spacing: 1px;
  font-size: 16px !important;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 13px !important;
  }
}
::v-deep .v-list-item__title {
  color: $fontcolorlinks !important;
  font-family: $fontfamliy;
  letter-spacing: 1px;
  font-size: 15px;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 12px !important;
  }
}
::v-deep
  .v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom)
  .v-toolbar__title
  .v-image.v-responsive.theme--dark {
  max-width: 150px !important;
  @media (max-width: 700px) {
    max-width: 120px !important;
  }
}
::v-deep .v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title {
  @media (max-width: 700px) {
    max-width: 15git init0px !important;
  }
}
::v-deep .v-slide-group__prev {
  flex: 0 1 40px;
  min-width: 40px;
}
::v-deep .v-slide-group__next {
  flex: 0 1 40px;
  min-width: 40px;
}
::v-deep i.v-icon.notranslate.material-icons.theme--dark {
  color: #f57f17 !important;
}
</style>
