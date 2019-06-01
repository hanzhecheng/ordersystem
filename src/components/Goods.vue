<template>
  <div class='goods'>
    <div class='goods-left'>
      <img class='goods-left-image' :src='info.image'>
    </div>
    <div class='goods-right'>
      <h3 class='goods-right-name goods-margin0 one-line-dot'>{{info.name}}</h3>
      <p class='goods-right-desc goods-margin0 one-line-dot'>{{info.desc}}</p>
      <div class='goods-right-score'>
        <Stars :number='info.score'></Stars>
      </div>
      <div class='goods-right-price'>&yen;{{info.price}}</div>
      <div class='goods-right-cart'>
        <button class='goods-addcart' type='button' v-if='!isAdd' @click='add'>加入购物车</button>
        <Quantity v-else></Quantity>
      </div>
    </div>
  </div>
</template>

<script>
const Stars = () => import("@/components/Stars");
const Quantity = () => import("@/components/Quantity");
export default {
  name: "Goods",
  components: { Stars, Quantity },
  data() {
    return {
      isAdd: false
    };
  },
  props: {
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    add() {
      this.isAdd = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.goods {
  position: relative;
  display: flex;
  width: 45%;
  box-sizing: border-box;
  margin: 10px;
  height: 100px;
  border: 1px solid #eee;
  background-color: white;
}
.goods-margin0 {
  margin: 0;
}
.goods-left {
  width: 20%;
  box-sizing: border-box;
  margin-right: 10px;
}
.goods-left-image {
  width: 100%;
  height: 100%;
}
.goods-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.goods-right-name {
  max-width: 100%;
  font-size: 14px;
  font-weight: 700;
}
.goods-right-desc {
  max-width: 100%;
  color: #999;
  font-size: 12px;
}
.goods-right-price {
  color: #f74342;
  font-size: 14px;
}
.goods-right-cart {
  position: absolute;
  right: 15px;
  bottom: 10px;
}
.goods-addcart {
  background-color: #0089dc;
  color: white;
  border: 0;
  cursor: pointer;
  width: 90px;
  height: 26px;
  line-height: 26px;
  border-radius: 20px;
  text-align: center;
  outline: 0;
  font-size: 12px;
}
</style>

