<template>
  <div>
    <v-container>
      <div class="Section">
        <v-col cols="12" class="pa-0">
          <span class="title"> Contact Us </span>
          <v-row class="mt-4">
            <v-col cols="12" md="6" lg="6">
              <v-card class="mx-auto" height="100%">
                <v-form ref="form" v-model="form" class="pa-4 pt-6">
                  <v-text-field
                    v-model="phone"
                    filled
                    color="light-blue darken-1"
                    label="Your Name *"
                  ></v-text-field>
                  <v-text-field
                    v-model="phone"
                    filled
                    color="light-blue darken-1"
                    label="Phone Number *"
                  ></v-text-field>
                  <v-text-field
                    v-model="phone"
                    filled
                    color="light-blue darken-1"
                    label="subject *"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    filled
                    color="light-blue darken-1"
                    label="Email address *"
                    type="email"
                  ></v-text-field>
                  <v-textarea
                    auto-grow
                    filled
                    color="light-blue darken-1"
                    label="Your Message *"
                    rows="1"
                  ></v-textarea>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn class="Send-email" text @click="$refs.form.reset()">
                    Clear
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled="!form"
                    :loading="isLoading"
                    class="white--text Send-email"
                    color="light-blue darken-1"
                    depressed
                  >
                    send email
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <v-card flat height="100%" class="mx-auto">
                <v-list three-line class="pa-0">
                  <template v-for="(item, index) in items">
                    <v-subheader
                      class="text"
                      v-if="item.header"
                      :key="item.header"
                      v-text="item.header"
                    ></v-subheader>
                    <v-divider
                      v-else-if="item.divider"
                      :key="index"
                      :inset="item.inset"
                    ></v-divider>
                    <v-list-item v-else :key="item.title">
                      <v-list-item-content>
                        <v-list-item-title
                          class="text"
                          v-html="item.title"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          class="text"
                          v-html="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    agreement: false,
    bio: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    Name: undefined,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "NEED HELP ?",
        subtitle: `We strive to provide the best engineering <span class="primary--text mx-1">services</span> possible with every Contact!`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Don’t hesitate to ask us something. Email us directly",
        subtitle: `<span class="primary--text mx-1">info@astcad.com.au</span> &mdash; or call us at <span class="mx-1 primary--text">-800-287-223</span>`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "GIVE US A CALL",
        subtitle:
          '<span class="primary--text mx-1">-800-287-223</span> &mdash; <span class="primary--text mx-1">-800-287-223</span> &mdash; <span class="primary--text mx-1">-800-287-223</span>',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.Section {
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;

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
    width: 60px;
    height: 5px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $color-1;
    border-radius: 50px;
  }
  .text {
    font-family: sans-serif !important;
    line-height: 1.3;
    font-size: 14px !important;
  }
  .Send-email {
    font-family: $fontfamliy !important;
    letter-spacing: 1px !important;
    font-size: 13px !important;
    font-weight: 600;
    text-transform: uppercase;
  }
}
::v-deep label.v-label.theme--light {
  font-family: $fontfamliy !important;
  letter-spacing: 0px !important;
  font-size: 12px !important;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
