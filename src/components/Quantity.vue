<template>
  <div class='quantity'>
    <button type='button' class='quantity-btn-minus' @click='minus'>-</button>
    <input type='text' class='quantity-input' v-model='num' @input='checkValid($event)'>
    <button type='button' class='quantity-btn-plus' @click='plus'>+</button>
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
    },
    minus() {
      if (this.num > 1) {
        this.num -= 1;
      } else {
          
      }
    },
    plus() {
      this.num += 1;
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
</style>

