<template>
  <div class='body'>
    <div class='body-goodslist'>
      <Goods v-for='item in goodsList' :info='item' :key='item.id'></Goods>
    </div>
    <div class='body-notice'>
      <Notice></Notice>
    </div>
    <div class='body-cart'>
      <Cart :goods='cartList'></Cart>
    </div>
  </div>
</template>

<script>
const Goods = () => import("@/components/Goods");
const Notice = () => import("@/components/Notice");
const Cart = () => import("@/components/Cart");
export default {
  name: "Body",
  components: {
    Goods,
    Notice,
    Cart
  },
  mounted() {
    let arr = [];
    Array(5)
      .fill(1)
      .forEach((item, index) => {
        arr.push({
          id: index + 1,
          title: "热销" + index,
          subtitle: "大家喜欢才是真的好",
          name: "招牌冻丝袜奶茶" + index,
          desc: "让你一秒感受冰爽提神！主要原料：奶茶",
          score: "5" - index,
          price: "14" - index,
          salesNo: "63" - index,
          count: 0,
          image:
            "https://fuss10.elemecdn.com/6/b0/96c04468114ada7c485b87893de27jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85"
        });
      });
    this.$store.dispatch("initGoodsList", arr);
  },
  computed: {
    goodsList() {
      return this.$store.getters.goodsList;
    },
    cartList() {
      return this.$store.getters.cartList;
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  padding: 0 15vw;
}
.body-goodslist {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  box-sizing: border-box;
  padding: 10px;
}
.body-notice {
  flex: 1;
  height: 300px;
  box-sizing: border-box;
  margin: 10px;
  border: 1px solid #eee;
}
.body-cart {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>

