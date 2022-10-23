<template>
  <div class="box">
    <v-container>
      <v-row class="section">
        <v-col cols="12">
          <span class="title">WHAT WE DO</span>
        </v-col>
        <v-col cols="4" class="hidden-sm-and-down">
          <v-img
            src="../assets/mechanical-engineering-drawing-services.jpg"
            aspect-ratio="1.7"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8" lg="8">
          <div class="imag mb-1 hidden-md-and-up"></div>
          <div
            :class="RedMore ? 'yesSeeMore' : 'noSeeMore'"
            style="height: 200px; overflow: hidden"
          >
            <v-card-text class="card_text pa-1">
              <v-subheader style="height: 30px" class="font-weight-bold">
                Lorem ipsum dolor
              </v-subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-card-text class="card_text pa-1">
              <v-subheader style="height: 30px" class="font-weight-bold">
                Lorem ipsum dolor
              </v-subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-card-text class="card_text pa-1">
              <v-subheader style="height: 30px" class="font-weight-bold">
                Lorem ipsum dolor
              </v-subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
          </div>
          <v-card-actions class="px-0 py-1 justify-end">
            <v-btn class="grey--text" text @click="RedMore = !RedMore">
              {{ RedMore ? "Red less" : "Red more" }}

              <v-icon right>
                {{ RedMore ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "WhatWeDo",
  components: {},
  data() {
    return {
      row: null,
      RedMore: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.box {
  min-height: 50vh;
  width: 100%;
  .title {
    font-family: $fontfamliy !important;
    display: block;
    text-align: center;
    color: $fontcolorlinks;
    font-weight: 600;
    font-size: 20px !important;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 15px;
    @media (max-width: 600px) {
      margin-bottom: 10px;
    }
  }
  .title::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 5px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f57f17;
    border-radius: 50px;
  }
  .card_text {
    font-size: 16px;
    color: $fontcolorlinks !important;
    font-family: $fontfamliy;
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: justify;
    @media (max-width: 750px) {
      font-size: 14px;
    }
  }
}
.v-subheader {
  font-size: 19px;
  color: $fontcolorlinks !important;
  font-family: $fontfamliy;
  letter-spacing: 1px;
  @media (max-width: 750px) {
    font-size: 17px;
  }
}
.imag {
  background-image: url("../assets/mechanical-engineering-drawing-services.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 170px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.yesSeeMore {
  height: fit-content !important;
  transition: all 0.5s 0s linear;
}
.noSeeMore {
  position: relative;
}
.noSeeMore::after {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 0;
  box-shadow: 0px -4px 32px 20px white;
}
</style>
