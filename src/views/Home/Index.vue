<template>
  <div class='home'>
    <div class='home-top'>
      <Header></Header>
      <ShopInfo></ShopInfo>
    </div>
  </div>
</template>

<script>
const Header = () => import("./Header");
const ShopInfo = () => import("./ShopInfo");
export default {
  name: "Home",
  components: {
    Header,
    ShopInfo
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

