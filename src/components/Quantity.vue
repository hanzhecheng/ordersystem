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
  </div>
</template>

<script>
export default {
  name: "Quantity",
  data() {
    return {
      num: 1
    };
  },
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
</style>

