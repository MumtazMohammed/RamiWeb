<template>
  <div class="box">
    <v-container>
      <v-col cols="12">
        <span class="title">our Strengths</span>
      </v-col>
      <v-card tile flat class="overflow-hidden">
        <v-card
          v-for="(Service, i) in ServiceCard"
          :key="i"
          cols="12"
          class="pa-4 Strength-card"
          tile
          flat
        >
          <v-row class="hidden-xs-only">
            <v-col cols="7" class="pa-0 px-2">
              <v-card-text
                class="pa-0 ServiceTitel"
                v-text="Service.ServiceTitel"
              >
              </v-card-text>
            </v-col>
            <v-col class="pa-0 px-2 d-flex justify-space-between align-center">
              <v-card flat class="progress">
                <v-card
                  class="d-flex justify-end align-center pr-3"
                  flat
                  color="light-blue darken-1"
                  height="100%"
                  max-width="50%"
                >
                </v-card>
              </v-card>
              <span class="grey--text text--darken-1 progress-count">45%</span>
            </v-col>
          </v-row>
          <v-row class="hidden-sm-and-up">
            <v-col cols="12" class="d-flex py-1">
              <v-card-text
                class="pa-0 ServiceTitel"
                v-text="Service.ServiceTitel"
              >
              </v-card-text>
              <span class="grey--text text--darken-1 progress-count">45%</span>
            </v-col>
            <v-col cols="12" class="d-flex pt-2 justify-center align-center">
              <v-card class="progress">
                <v-card
                  class="pr-3"
                  elevation="8"
                  color="light-blue darken-1"
                  height="100%"
                  max-width="50%"
                  dark
                >
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import ServiceCard from "../data-json/Service.json";

export default {
  name: "WhatWeDo",
  components: {},
  data() {
    return {
      ServiceCard,
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
      font-size: 17px !important;
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
    background-color: $color-1;
    border-radius: 50px;
  }
  .ServiceTitel {
    font-family: $fontfamliy !important;
    color: #757575;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 13px;
    @media (max-width: 700px) {
      font-size: 13px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
  .progress {
    display: block;
    width: 60%;
    height: 10px;
    background-color: rgb(235, 235, 235);
    border-radius: 50px;
    overflow: hidden;
    @media (max-width: 600px) {
      height: 8px;
      width: 90%;
    }
  }
  .progress-count {
    font-size: 14px;
  }
  .Strength-card:not(:last-child) {
    border-bottom: 1px solid rgb(227, 227, 227);
  }
}
</style>
