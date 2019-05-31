<template>
  <div class='home'>
    <div class='home-top'>
      <Header></Header>
      <ShopInfo></ShopInfo>
      <Operator></Operator>
    </div>
    <div class='home-body'>
      <Body></Body>
    </div>
  </div>
</template>

<script>
const Header = () => import("./Header");
const ShopInfo = () => import("./ShopInfo");
const Operator = () => import("./Operator");
const Body = () => import("./Body");
export default {
  name: "Home",
  components: {
    Header,
    ShopInfo,
    Operator,
    Body
  }
};
</script>

<style lang="scss" scoped>
.home-top {
  background-image: url("https://shadow.elemecdn.com/faas/desktop/media/img/shop-bg.0391dd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

