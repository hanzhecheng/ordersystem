<template>
  <div class='cart'>
    <div class='cart-header'>
      <div class='cart-header-left'>
        <label>购物车</label>
        <label @click='clearCart'>[清空]</label>
      </div>
      <div class='cart-header-right'>
        <svg-icon icon-class='cc-cart'></svg-icon>
      </div>
    </div>
    <div class='cart-body'>
      <div class='cart-body-item' v-for='(item,index) in goods' :key='index'>
        <div class='cart-body-item-name one-line-dot'>{{item.name}}</div>
        <Quantity cart :goods='item'></Quantity>
        <div class='cart-body-item-price'>&yen;{{item.price*item.count}}</div>
      </div>
    </div>
    <div class='cart-foot'>
      <div class='cart-foot-left'>
        <div class='cart-foot-left-count'>
          <svg-icon icon-class='cc-cart' class='cart-foot-left-icon'></svg-icon>
          <span class='cart-foot-left-number'>{{totalCount}}</span>
        </div>

        <label>&yen;{{totalAmount}}</label>
        <label>配送费:&yen;3</label>
      </div>
      <div v-if='goods.length>0' class='cart-foot-right cart-foot-right-full'>去结算 ></div>
      <div v-else class='cart-foot-right cart-foot-right-empty'>购物车是空的</div>
    </div>
  </div>
</template>

<script>
const Quantity = () => import("@/components/Quantity");
export default {
  name: "Cart",
  components: {
    Quantity
  },
  props: {
    goods: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearGoodsCount");
      this.$store.dispatch("clearCartCount");
    }
  },
  computed: {
    totalAmount() {
      return this.goods.reduce((origin, item) => {
        origin += item.count * item.price;
        return origin;
      }, 0);
    },
    totalCount() {
      return this.goods.reduce((origin, item) => {
        origin += item.count - 0;
        return origin;
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin lineHeight {
  height: 22px;
  line-height: 22px;
}
.cart {
  width: 20vw;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  border-top: 2px solid #0089dc;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 10px;
}
.cart-header-left {
  font-size: 14px;
  & label:last-child {
    margin-left: 5px;
    color: #0089dc;
  }
}
.cart-body-item {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #eee;
}
.cart-body-item-name {
  width: 8vw;
  font-size: 12px;
  @include lineHeight;
}
.cart-body-item-price {
  width: 4vw;
  color: #f17530;
  text-align: right;
  font-size: 10px;
  @include lineHeight;
}
.cart-foot {
  display: flex;
}
.cart-foot-left {
  width: 60%;
  height: 40px;
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  & > label:first-of-type {
    color: #fff;
    display: inline-block;
    font-size: 25px;
    font-weight: 700;
    line-height: 40px;
    width: 53%;
    text-align: center;
  }
  & > label:last-of-type {
    font-size: 12px;
    color: #999;
    line-height: 40px;
    display: inline-block;
    width: 25%;
    flex: 1;
    text-align: right;
    box-sizing: border-box;
    padding-right: 5px;
  }
  .cart-foot-left-icon {
    color: white;
    box-sizing: border-box;
    padding-left: 5px;
    width: 23px;
  }
}
.cart-foot-right {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.cart-foot-right-full {
  background-color: #51d862;
  color: white;
}
.cart-foot-right-empty {
  background-color: #e4e4e4;
  color: black;
}
.cart-foot-left-count {
  position: relative;
}
.cart-foot-left-number {
  position: absolute;
  height: 15px;
  min-width: 20px;
  border-radius: 10px;
  top: -10px;
  right: -10px;
  background-color: red;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
</style>
