<template>
  <div class='operator'>
    <div class='operator-list'>
      <div
        class='operator-list-item'
        :class='{"active":currentItem.list==item.id}'
        v-for='item in list'
        :key='item.id'
        @click='changeList("list",item.id)'
      >{{item.name}}</div>
    </div>

    <div class='operator-sort'>
      <div
        v-if='currentItem.list==1'
        class='operator-sort-item'
        :class='{"active":currentItem.sort==item.id}'
        v-for='item in sortList'
        :key='item.id'
        @click='changeList("sort",item.id)'
      >
        {{item.name}}
        <svg-icon icon-class='down' class='operator-sort-icon'></svg-icon>
      </div>
    </div>

    <div class='operator-search'>
      <div class='operator-search-content'>
        <input type='text' placeholder='搜索商家,美食...' class='operator-search-input'>
        <svg-icon icon-class='search' class='operator-search-icon'></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Operator",
  data() {
    return {
      list: [
        {
          name: "所有商品",
          id: 1
        },
        {
          name: "评价",
          id: 2
        },
        {
          name: "商家资质",
          id: 3
        }
      ],
      currentItem: {
        list: 1,
        sort: 1
      },
      sortList: [
        {
          name: "默认排序",
          id: 1
        },
        {
          name: "评分",
          id: 2
        },
        {
          name: "销量",
          id: 3
        },
        {
          name: "价格",
          id: 4
        }
      ]
    };
  },
  methods: {
    changeList(type, id) {
      if (type == "list") {
        if (id != 1) {
          this.currentItem.sort = 1;
        }
      }
      this.currentItem[type] = id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.operator {
  display: flex;
  height: 60px;
  padding: 0 10vw;
  background-color: white;
  border-bottom: 1px solid #ccc;
}
.operator-list {
  width: 20vw;
  display: flex;
  box-sizing: border-box;
  padding: 0 15px;
}
.operator-list-item {
  display: flex;
  @include center;
  color: #333;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 10px;
  width: 33%;
  position: relative;
  cursor: pointer;
 
  &::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: #0089dc;
    position: absolute;
    left: 100%;
    bottom: 0;
    transition: all 0.4s;
  }
  &.active {
    color: #0089dc;
    &::after {
      width: 100%;
      left: 0;
      transition-delay: 0.1s;
    }
    & ~ .operator-list-item::after {
      left: 0;
    }
  }
}
.operator-sort {
  display: flex;
  width: 40vw;
  justify-content: flex-end;
}
.operator-sort-icon {
  height: 12px;
}
.operator-sort-item {
  display: flex;
  @include center;
  color: #333;
  font-size: 14px;
  width: 100px;
  cursor: pointer;
  &.active {
    color: #0089dc;
  }
}
.operator-search {
  display: flex;
  @include center;
  flex: 1;
}
.operator-search-content {
  height: 32px;
  border: 1px solid #eee;
  width: 100%;
  padding: 0 10px;
  display: flex;
  @include center;
}
.operator-search-input {
  height: 30px;
  width: 90%;
  outline: none;
  border: none;
}
.operator-search-icon {
  flex: 1;
  cursor: pointer;
  &:hover {
    color: #0089dc;
  }
}
</style>
