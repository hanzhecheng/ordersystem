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
    <Category :show.sync='show'></Category>
  </div>
</template>

<script>
const Goods = () => import("@/components/Goods");
const Notice = () => import("@/components/Notice");
const Cart = () => import("@/components/Cart");
const Category = () => import("@/components/Category");
import throttle from "@/assets/js/throttle";
export default {
  name: "Body",
  data() {
    return {
      show: false
    };
  },
  components: {
    Goods,
    Notice,
    Cart,
    Category
  },
  mounted() {
    let arr = [];
    Array(50)
      .fill(1)
      .forEach((item, index) => {
        arr.push({
          id: index + 1,
          title: "热销" + index,
          subtitle: "大家喜欢才是真的好",
          name: "招牌冻丝袜奶茶" + index,
          desc: "让你一秒感受冰爽提神！主要原料：奶茶",
          score: parseInt(Math.random() * 5 + 1, 10),
          price: "14" - index,
          salesNo: "63" - index,
          count: 0,
          image:
            "https://fuss10.elemecdn.com/6/b0/96c04468114ada7c485b87893de27jpeg.jpeg?imageMogr2/thumbnail/200x200/format/webp/quality/85"
        });
      });
    this.$store.dispatch("initGoodsList", arr);
    window.addEventListener("scroll", throttle(this.showCategory, 50));
  },
  methods: {
    showCategory() {
      let goods = document.getElementsByClassName("body-goodslist")[0];
      if (goods.getBoundingClientRect().top < 10) {
        if (!this.show) {
          this.show = true;
        }
      } else {
        if (this.show) {
          this.show = false;
        }
      }
    }
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

