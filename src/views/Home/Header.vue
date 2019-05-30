<template>
  <div class='header'>
    <div class='header-main'>
      <div class='header-left'>
        <div
          class='header-left-item'
          v-for='(item,index) in links.left'
          :key='item.name'
        >{{item.name}}</div>
      </div>
      <div class='header-right'>
        <span class='header-right-item'>{{links.right.uname}}</span>
        <span class='header-right-arrow--down' @mouseenter='showOpera' @mouseleave='hideOpera'></span>
        <ul class='header-right-operator' v-if='showOperator'>
          <li>个人中心</li>
          <li>我的地址</li>
          <li>我的收藏</li>
          <li>安全设置</li>
          <li class='header-right-devider'>退出登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: {
        left: [
          {
            name: "首页",
            url: "home"
          },
          {
            name: "我的订单",
            url: "home"
          },
          {
            name: "加盟合作",
            url: "home"
          },
          {
            name: "我的客服",
            url: "home"
          }
        ],
        right: {
          uname: "1119216543@qq.com"
        }
      },
      showOperator: false
    };
  },
  methods: {
    showOpera() {
      this.showOperator = true;
    },
    hideOpera() {
      this.showOperator = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.header {
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
}
.header-main {
  width: 85vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.header-left {
  display: flex;
  flex-direction: row;
}
.header-left-item {
  display: flex;
  @include center;
  font-size: 16px;
  width: 90px;
  color: white;
  font-weight: 500;
}
.header-right {
  display: flex;
  @include center;
  position: relative;
}
.header-right-item {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}
.header-right-arrow--down {
  display: inline-block;
  position: relative;
  width: 8px;
  height: 8px;
  margin-left: 10px;
  margin-top: -3px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-left: 2px solid rgba(255, 255, 255, 0.8);
  transform: rotate(-45deg);
}
.header-right-operator {
  position: absolute;
  width: 120px;
  top: 25px;
  right: -20px;
  background: white;
  box-sizing: border-box;
  padding: 5px;
  & li {
    text-align: center;
    padding: 5px;
    font-size: 14px;
  }
  & .header-right-devider {
    border-top: 2px solid #eee;
  }
}
</style>

