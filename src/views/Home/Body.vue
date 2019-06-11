<template>
  <div class='body'>
    <div class='body-goodslist'>
      <template v-for='(item,index) in goodsList'>
        <div class='body-goodslist-link' v-if='index%6==0' :id='"body-goodslist-link"+item.id'>
          <h3>{{item.name.substring(0,3)}}</h3>
          <span>{{item.desc}}</span>
        </div>
        <Goods :info='item'></Goods>
      </template>
    </div>
    <div class='body-notice'>
      <Notice></Notice>
    </div>
    <div class='body-cart'>
      <Cart :goods='cartList'></Cart>
    </div>
    <Category ref='myCategory' :show.sync='show'></Category>
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
    setTimeout(() => {
      this.initScroll();
    }, 500);
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
    },
    initScroll() {
      window.addEventListener("scroll", throttle(this.categoryScroll, 100));
    },
    categoryScroll() {
      if(this.$store.getters.isScrolling) return
      let links = document.querySelectorAll(".body-goodslist-link");
      links.forEach(item => {
        let link = document.getElementById(item.id);
        let top = link.getBoundingClientRect().top;
        if (top > 10 && top < 100) {
          let index = this.$refs.myCategory.list.findIndex(
            it => it.href == item.id.replace("body-goodslist-link", "")
          );
          this.$refs.myCategory.scrollTo(index);
        }
      });
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
.body-goodslist-link {
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
  h3 {
    margin: 0;
  }
  span {
    margin-left: 10px;
    font-size: 12px;
    color: #999;
  }
}
</style>

