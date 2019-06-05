<template>
  <div class='category' v-if='show'>
    <a
      class='category-item'
      :class='{"active":currentIndex==index}'
      v-for='(item,index) in list'
      :key='item.href'
      @click='scrollTo(index)'
    >
      <label class='category-item-name'>{{item.name}}</label>
      <span class='category-item-dot'></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      currentIndex: 0,
      list: [
        { name: "热销", href: "1" },
        { name: "优惠", href: "2" },
        { name: "当季新品", href: "3" },
        { name: "温馨提示", href: "4" },
        { name: "招牌柠檬系列", href: "5" },
        { name: "招牌奶茶系列", href: "6" },
        { name: "港式小食", href: "7" }
      ]
    };
  },
  props: {
    lists: {
      type: Array,
      default: function() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(index) {
      this.currentIndex = index;
      let element = document.getElementById(`goods${this.list[index].href}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.category {
  position: fixed;
  width: 15vw;
  left: 0;
  top: 15px;
}
.category-item {
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}
.category-item.active {
  color: #0089dc;
}
.category-item-name {
  font-size: 12px;
}
.category-item-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ddd;
  border: 2px solid #f7f7f7;
}
</style>

