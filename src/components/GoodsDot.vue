<template>
  <div class='goodsdot'>
    <div class='goodsdot-outer goodsdot-outer-none' v-for='item in list' :key='item'>
      <div class='goodsdot-inner'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDot",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  props: {
    client: {
      type: Object,
      default: function() {
        return { x: "", y: "" };
      }
    }
  },
  methods: {
    startAnimation() {
      let outter = document.querySelectorAll(
        ".goodsdot-outer.goodsdot-outer-none"
      )[0];
      let inner = outter.firstElementChild,
        self = this;
      outter.classList.remove("goodsdot-outer-none");
      setTimeout(function() {
        let transformY = window.innerHeight - self.client.y,
          transformX = window.innerWidth - self.client.x;
        inner.style.transform = `translate3d(${transformX}px,0,0)`;
        outter.style.transform = `translate3d(0,${transformY}px,0)`;
        setTimeout(function() {
          outter.classList.add("goodsdot-outer-none");
          outter.removeAttribute("style");
          inner.removeAttribute("style");
        }, 1000);
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsdot {
  position: relative;
}
.goodsdot-outer {
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

