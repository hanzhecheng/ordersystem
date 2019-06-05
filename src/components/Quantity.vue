<template>
  <div class='quantity'>
    <button
      type='button'
      class='quantity-btn-minus'
      :class='{"quantity-btn-cart":cart}'
      @click='minus'
    >-</button>
    <input type='text' class='quantity-input' v-model='num' @input='checkValid($event)'>
    <button
      type='button'
      class='quantity-btn-plus'
      :class='{"quantity-btn-cart":cart}'
      @click='plus'
    >+</button>

    <div class='goodsdot' @click='startAnimation($event)' v-if='!cart'>
      <div
        :class='[className,"goodsdot-outer-item","goodsdot-outer-none"]'
        v-for='item in list'
        :key='item'
      >
        <div class='goodsdot-inner'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  data() {
    return {
      num: 1,
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
  components: {},
  props: {
    goods: {
      type: Object,
      default: function() {
        return {};
      }
    },
    cart: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.num = this.goods.count;
  },
  methods: {
    checkValid(event) {
      let numReg = /[0-9]/;
      if (event.data === null) {
        this.num = this.num === "" ? "" : parseInt(this.num);
      } else if (!numReg.test(event.data)) {
        let numS = this.num.toString();
        this.num = parseInt(numS.substring(0, numS.length - 1));
      } else {
        this.num = parseInt(this.num);
      }
      this.updateCount();
    },
    minus() {
      if (this.num > 1) {
        this.num -= 1;
      } else {
        this.num = 0;
      }
      this.updateCount();
    },
    plus() {
      if (this.num === "") {
        this.num = 1;
      } else {
        this.num = parseInt(this.num);
        this.num += 1;
      }
      this.updateCount();
    },
    updateCount() {
      this.goods.count = this.num;
      this.$store.dispatch("updateGoodsCount", this.goods);
      this.$store.dispatch("updateCartCount", this.goods);
    },
    startAnimation(event) {
      //购物车动画
      this.plus();
      if (!this.cart) {
        let outter = document.querySelectorAll(
          `.${this.className}.goodsdot-outer-none`
        )[0];
        let inner = outter.firstElementChild;
        outter.classList.remove("goodsdot-outer-none");
        setTimeout(function() {
          let transformY = window.innerHeight - event.clientY,
            transformX = window.innerWidth * 0.8 - event.clientX;
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
  },
  computed: {
    className() {
      return "goodsdot-outer" + this.goods.id;
    }
  },
  watch: {
    num(val) {
      if (val != this.goods.count) {
        this.num = this.goods.count;
      }
    },
    "goods.count"(val) {
      this.num = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin btn {
  border: 0;
  width: 25px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  height: 22px;
  line-height: 22px;
  color: black;
  outline: 0;
  cursor: pointer;
  position: absolute;
  background-color: rgb(238, 238, 238);
}
.quantity {
  width: 82px;
  position: relative;
  border-radius: 10px;
  height: 22px;
}
.quantity-btn-minus {
  @include btn;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: 1px solid #ddd;
  left: 0;
}
.quantity-input {
  display: inline-block;
  border: 0;
  width: 32px;
  height: 18px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  outline: 0;
  font-size: 12px;
  text-align: center;
  position: absolute;
  left: 25px;
}
.quantity-btn-plus {
  @include btn;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid #ddd;
  right: 0;
}
.quantity-btn-cart {
  border-radius: 0;
  background-color: #fff;
  border: 1px solid #ddd;
}

.goodsdot {
  position: absolute;
  width: 25px;
  height: 20px;
  right: 0;
}
.goodsdot-outer-item {
  position: absolute;
  z-index: 2;
  transition: all 1s cubic-bezier(0.4, -0.6, 0.83, 0.14);
}
.goodsdot-outer-none {
  display: none;
}
.goodsdot-inner {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #0089dc;
  transition: all 1s ease;
}
</style>

