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
    </div>
  </div>
</template>

<script>
const Stars = () => import("@/components/Stars");
export default {
  name: "Goods",
  components: { Stars },
  props: {
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.goods {
  display: flex;
  width: 48%;
  box-sizing: border-box;
  padding: 10px;
  height: 100px;
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
</style>

