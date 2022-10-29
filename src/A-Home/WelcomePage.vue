<template>
  <div class="selection">
    <v-container class="pa-0">
      <v-icon class="icon">mdi-cog</v-icon>
      <h1 class="welcome-titel px-2">
        Welcome to <span class="light-blue--text text--darken-1">Cad</span>elaie
      </h1>
      <v-subheader class="px-2 titel-welcom">
        <TypeEfect />
      </v-subheader>
      <v-card-text class="ma-0 pa-2 text-welcom">
        LEADING ENGINEERING CAD DESIGN AND DRAFTING SERVICES PROVIDER IN
        AUSTRALIA LEADING ENGINEERING CAD DESIGN AND DRAFTING SERVICES PROVIDER
        IN AUSTRALIA LEADING ENGINEERING CAD DESIGN AND DRAFTING SERVICES
        PROVIDER IN AUSTRALIA
      </v-card-text>
    </v-container>
  </div>
</template>
<script>
import TypeEfect from "../A-Home/TypeEfect.vue";
export default {
  components: { TypeEfect },
  name: "ToSellYourCarLayout",
  setup() {
    return {};
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");
@import "@/scss/virables";
@import "@/scss/mixin";
.selection {
  width: 100%;
  margin-top: 135.5px;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // background-color: #343434;

  .titel-welcom {
    font-family: $fontfamliy !important;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    color: $fontcolorlinks;
    position: relative;
  }
  .welcome-titel {
    font-family: $fontfamliy !important;
    font-weight: 600;
    letter-spacing: 1px;
    color: $fontcolorlinks;
    position: relative;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 25px;
    }
  }

  .text-welcom {
    font-family: $fontfamliy !important;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    color: $fontcolorlinks;
    position: relative;
    z-index: 1;
    line-height: 1.5;
    text-align: justify;
    @media (max-width: 900px) {
      font-size: 15px;
    }
    @media (max-width: 700px) {
      font-size: 13px;
    }
  }
  .icon {
    font-size: 350px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: #eceff1;
    opacity: 0.4;
    @media (max-width: 900px) {
      font-size: 300px;
    }
    @media (max-width: 700px) {
      font-size: 250px;
    }
    @media (max-width: 500px) {
      font-size: 200px;
    }
    @media (max-width: 400px) {
      font-size: 150px;
    }
  }
}
</style>
