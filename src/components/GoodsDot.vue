<template>
  <div class='goodsdot' @click="startAnimation">
    <div
      :class='[className,"goodsdot-outer-item","goodsdot-outer-none"]'
      v-for='item in list'
      :key='item'
    >
      <div class='goodsdot-inner'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDot",
  data() {
    return {
      list: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    };
  },
  props: {
    id: {
      type: [String, Number],
      default: 1
    },
    client: {
      type: Object,
      default: function() {
        return { x: "", y: "" };
      }
    },
    addnum: {
      type: Number,
      default: 1
    }
  },
  methods: {
    startAnimation() {
      let outter = document.querySelectorAll(
        `.${this.className}.goodsdot-outer-none`
      )[0];
      let inner = outter.firstElementChild,
        self = this;
      outter.classList.remove("goodsdot-outer-none");
      setTimeout(function() {
        let transformY = 200,
          transformX = 270; // window.innerWidth * 0.86 - self.client.x;
        inner.style.transform = `translate3d(${transformX}px,0,0)`;
        outter.style.transform = `translate3d(0,${transformY}px,0)`;

        setTimeout(function() {
          outter.classList.add("goodsdot-outer-none");
          outter.removeAttribute("style");
          inner.removeAttribute("style");
        }, 1000);
      }, 0);
    }
  },
  computed: {
    className() {
      return "goodsdot-outer" + this.id;
    }
  },
  watch: {
    addnum(val) {
      this.startAnimation();
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsdot {
  position: relative;
}
.goodsdot-outer-item {
  position: absolute;
  z-index: 2;
  transition: all 1s cubic-bezier(0.39, -0.4, 0.83, 0.23) 0s;
}
.goodsdot-outer-none {
  display: none;
}
.goodsdot-inner {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #0089dc;
  transition: all 1s ease 0s;
}
</style>

