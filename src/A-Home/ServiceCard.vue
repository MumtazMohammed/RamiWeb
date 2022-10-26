<template>
  <div class="page-1">
    <v-container>
      <v-row id="element" class="my-4">
        <v-col cols="12">
          <span class="title">
            MECHANICAL DESIGN & DRAFTING SERVICES WE OFFER
          </span>
        </v-col>
        <v-col
          cols="6"
          sm="4"
          md="3"
          class="px-2"
          v-for="SingleServiceCard in historyList"
          :key="SingleServiceCard.id"
        >
          <v-card
            to="/Information"
            tile
            height="150"
            width="100%"
            style="overflow: hidden"
            class=""
          >
            <v-card-actions
              class="pa-1"
              style="height: 100%; flex-direction: column"
            >
              <v-card-actions
                style="width: 100%; justify-content: center"
                class="justify--center pa-1 icon"
              >
                <v-icon class="icon-icon" v-text="SingleServiceCard.icon">
                </v-icon>
              </v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text
                v-text="SingleServiceCard.ServiceTitel"
                class="service-titel pa-1"
              >
              </v-card-text>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-2">
          <v-pagination
            v-scroll-to="{
              el: '#element',
              duration: 500,
              lazy: false,
              easing: 'linear',
              offset: -95,
              force: true,
              cancelable: true,
              onStart: onStart,
              onDone: onDone,
              onCancel: onCancel,
              x: false,
              y: true,
            }"
            class="pagination mb-2"
            color="yellow darken-4"
            v-model="page"
            :length="pages"
            @input="updatePage"
          >
          </v-pagination>
          <v-card-actions class="justify-center pa-0"> </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ServiceCard from "../data-json/Service.json";
export default {
  name: "ServiceCard",
  data: () => ({
    ServiceCard,
    page: 1,
    pageSize: 8,
    list: [
      {
        title: "Title 1",
        description: "Content 1",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        title: "Title 2",
        description: "Content 2",
        image:
          "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        title: "Title 3",
        description: "Content 3",
        image:
          "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        title: "Title 4",
        description: "Content 4",
        image:
          "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        title: "Title 5",
        description: "Content 5",
        image:
          "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
    ],
    listCount: 0,
    historyList: [],
  }),
  created() {
    let _this = this;
    _this.initPage();
    _this.updatePage(_this.page);
  },
  methods: {
    initPage: function () {
      let _this = this;
      _this.listCount = _this.ServiceCard.length;
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.ServiceCard;
      } else {
        _this.historyList = _this.ServiceCard.slice(0, _this.pageSize);
      }
    },
    updatePage: function (pageIndex) {
      let _this = this;
      let _start = (pageIndex - 1) * _this.pageSize;
      let _end = pageIndex * _this.pageSize;
      _this.historyList = _this.ServiceCard.slice(_start, _end);
      _this.page = pageIndex;
    },
  },
  computed: {
    pages() {
      let _this = this;
      if (_this.pageSize == null || _this.listCount == null) return 0;
      return Math.ceil(_this.listCount / _this.pageSize);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.page-1 {
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  .title {
    font-family: $fontfamliy !important;
    display: block;
    text-align: center;
    color: $fontcolorlinks;
    font-weight: 600;
    font-size: 20px !important;
    letter-spacing: 1px !important;
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
    width: 70px;
    height: 5px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f57f17;
    border-radius: 50px;
  }

  .icon-icon {
    background-color: #f57f17;
    color: rgb(255, 255, 255);
    border-radius: 50%;
    padding: 3px;
    width: 45px;
    height: 45px;
    font-size: 30px !important;
  }

  .service-titel {
    font-family: $fontfamliy !important;
    letter-spacing: 1px;
    color: $fontcolorlinks !important;
    font-size: 14px;
    text-align: center;
    position: relative;
  }

  .service-tex {
    font-family: "Almarai", sans-serif;
    letter-spacing: 1px;
    color: #757575;
    font-size: 15px;
    margin: 5px;
    word-break: break-all;
  }
}
</style>
