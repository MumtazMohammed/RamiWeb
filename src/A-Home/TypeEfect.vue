<template>
  <div class="TypeEfect">
    <h1>
      <!-- <span class="typed-text">{{ typeValue }}</span> -->
      <h1>
        We Help
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </h1>
  </div>
</template>

<script>
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "YouTuber",
        "Developer",
        "Blogger",
        "Designer",
        "Freelancer",
      ],
      typingSpeed: 90,
      erasingSpeed: 90,
      newTextDelay: 800,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

h1 {
  text-align: start;
  font-size: 24px;
  font-weight: 600;
  font-family: $fontfamliy;
  text-transform: capitalize;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  span.typed-text {
    color: $color-1;
    position: relative;
  }
  span.typed-text::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 3px;
    background-color: $color-1;
    border-radius: 50px;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 24px;
  color: #555555;
  opacity: 0.7;
  -webkit-animation: 0.5s blink step-end infinite;
  -moz-animation: 0.5s blink step-end infinite;
  -ms-animation: 0.5s blink step-end infinite;
  -o-animation: 0.5s blink step-end infinite;
  animation: 0.5s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #555555;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #555555;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #555555;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #555555;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #555555;
  }
}
</style>
