<template>
  <div class="Section">
    <v-card flat tile>
      <v-toolbar color="blue-grey lighten-5" dark extended flat>
        <v-btn icon to="/">
          <v-icon class="light-blue--text text--darken-1" size="36">
            mdi-arrow-left-thin
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="ThreeD = !ThreeD">
          <v-icon size="25" class="grey--text text--darken-1">
            {{ ThreeD ? "mdi-view-module" : "mdi-view-carousel" }}
          </v-icon>
        </v-btn>
        <v-btn icon @click="show = !show">
          <v-icon
            :class="
              show ? 'red--text text--darken-1' : 'grey--text text--darken-1'
            "
            size="25"
          >
            mdi-video
          </v-icon>
        </v-btn>
      </v-toolbar>

      <v-card
        class="mx-auto card-box"
        max-width="90%"
        style="margin-top: -45px"
      >
        <v-toolbar flat>
          <v-toolbar-title class="grey--text subheader-titel">
            AUTOMOTIVE DESIGN & STYLING
          </v-toolbar-title>
          <!-- <v-spacer></v-spacer>
          <v-btn icon @click="ThreeD = !ThreeD">
            <v-icon size="30">
              {{ ThreeD ? "mdi-view-module" : "mdi-view-carousel" }}
            </v-icon>
          </v-btn>
          <v-btn icon @click="show = !show">
            <v-icon size="30" class="red--text"> mdi-video </v-icon>
          </v-btn> -->
        </v-toolbar>
        <v-divider></v-divider>
        <v-sheet class="overflow-hidden">
          <v-container fluid class="">
            <!-- video  -->
            <v-slide-y-transition>
              <v-sheet class="pa-4 pt-0" v-show="show">
                <v-card-actions class="justify-center">
                  <iframe
                    width="350"
                    height="215"
                    src="https://www.youtube.com/embed/IQw-4JABPCM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-card-actions>
              </v-sheet>
            </v-slide-y-transition>
            <!-- 3D images  -->
            <v-col v-if="ThreeD" cols="12">
              <div class="example-3d">
                <swiper v-model="active" class="swiper" :options="swiperOption">
                  <swiper-slide v-for="n in 12" :key="n">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${
                        n * 5 + 10
                      }`"
                      aspect-ratio="1.2"
                      contain
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </swiper-slide>
                  <div
                    class="swiper-button-prev swiper-button-white hidden-sm-and-down"
                    slot="button-prev"
                  >
                    <v-icon class="light-blue--text text--darken-1" size="30">
                      mdi-chevron-left
                    </v-icon>
                  </div>
                  <div
                    class="swiper-button-next swiper-button-white hidden-sm-and-down"
                    slot="button-next"
                  >
                    <v-icon class="light-blue--text text--darken-1" size="30">
                      mdi-chevron-right
                    </v-icon>
                  </div>
                </swiper>
              </div>
            </v-col>
            <!-- list image  -->
            <v-responsive
              style="overflow-y: scroll"
              height="300"
              v-if="ThreeD == false"
            >
              <v-row>
                <v-col
                  v-for="n in 12"
                  :key="n"
                  class="d-flex child-flex pa-1"
                  md="3"
                  lg="3"
                  sm="3"
                  cols="6"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1.9"
                    class="grey lighten-2"
                    contain
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-responsive>
            <v-col class="px-0" cols="12">
              <v-card-text class="Service_text py-2 px-0">
                <v-subheader
                  style="height: 30px"
                  class="font-weight-bold Service_titel"
                >
                  Lorem ipsum dolor
                </v-subheader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>
              <v-card-text class="Service_text py-2 px-0">
                <v-subheader
                  style="height: 30px"
                  class="font-weight-bold Service_titel"
                >
                  Lorem ipsum dolor
                </v-subheader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>
              <v-card-text class="Service_text py-2 px-0">
                <v-subheader
                  style="height: 30px"
                  class="font-weight-bold Service_titel"
                >
                  Lorem ipsum dolor
                </v-subheader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>
              <v-card-text class="Service_text py-2 px-0">
                <v-subheader
                  style="height: 30px"
                  class="font-weight-bold Service_titel"
                >
                  Lorem ipsum dolor
                </v-subheader>
                <ul class="pl-4">
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                </ul>
              </v-card-text>
            </v-col>
          </v-container>
        </v-sheet>
      </v-card>
    </v-card>
    <div class="mt-4">
      <ContactUs />
    </div>
  </div>
</template>

<script>
import ContactUs from "../A-Home/ContactUs.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Information",
  components: {
    Swiper,
    SwiperSlide,
    ContactUs,
  },
  data: () => ({
    show: false,
    ThreeD: false,
    swiperOption: {
      loop: true,
      loopedSlides: 12,
      effect: "coverflow",
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: "auto",
      slideToClickedSlide: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  }),
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.Section {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 30px;
  .card-box {
    @media (max-width: 700px) {
      max-width: 92% !important;
    }
  }
  .subheader-titel {
    font-family: $fontfamliy;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 500;
    @media (max-width: 550px) {
      font-size: 14px;
    }
  }
  // .titel-down {
  //   font-family: $fontfamliy;
  //   font-size: 18px;
  //   letter-spacing: 1px;
  //   font-weight: 500;
  //   color: $fontcolorlinks !important;
  //   @media (max-width: 550px) {
  //     font-size: 17px;
  //   }
  // }
  .Service_text {
    text-align: justify;
    font-family: $fontfamliy !important;
    font-size: 15px;
    line-height: 1.5;
    color: #999;
    letter-spacing: 1px !important;
    @media (max-width: 750px) {
      font-size: 15px;
    }
  }
  .Service_titel {
    text-align: justify;
    font-family: $fontfamliy;
    font-size: 17px;
    @media (max-width: 750px) {
      font-size: 16px;
    }
  }
  .YesItHover {
    transform: scale(1.3);
    position: relative;
    z-index: 1;
    transition: transform 0.2s 0s linear;
    cursor: pointer;
  }
}

// 3D images
.example-3d {
  width: 100%;
  height: 220px;
}
.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    width: 300px;
    height: 220px;
    background-position: center;
    background-size: cover;
  }
}
::v-deep .swiper-container-3d .swiper-slide-shadow-left {
  background-image: none !important;
}
::v-deep .swiper-container-3d .swiper-slide-shadow-right {
  background-image: none !important;
}
::v-deep .swiper-slide.swiper-slide-active {
  transform: scale(1.2) !important;
}
::v-deep .swiper-button-prev:after {
  display: none;
}
::v-deep .swiper-button-next:after {
  display: none;
}
::v-deep .swiper-button-white {
  background-color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
::v-deep .swiper-container {
  overflow: visible !important;
}
// ::v-deep .swiper-slide.swiper-slide-next {
//   transform: translate3d(0px, 0px, -100px) rotateX(0deg) rotateY(-40deg)
//     scale(1) !important;
// }
// ::v-deep .swiper-slide.swiper-slide-prev {
//   transform: translate3d(0px, 0px, -100px) rotateX(0deg) rotateY(40deg) scale(1) !important;
// }
</style>
