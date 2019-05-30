<template>
  <div class='shopinfo'>
    <div class='shopinfo-left'>
      <img class='shopinfo-avatar' :src='shopInfo.image'>
      <div class='shopinfo-main'>
        <div class='shopinfo-name'>{{shopInfo.name}}</div>
        <div class='shooinfo-star'>5星</div>
      </div>
    </div>
    <div class='shopinfo-right'>
      <div class='shopinfo-right-item'>
        <span class='shopinfo-right-label'>起送价</span>
        <span class='shopinfo-right-label--big'>&yen;{{shopInfo.startPrice}}</span>
      </div>
      <div class='shopinfo-right-item'>
        <span class='shopinfo-right-label'>配送费</span>
        <span class='shopinfo-right-label--big'>&yen;{{shopInfo.distributionPrice}}</span>
      </div>
      <div class='shopinfo-right-item'>
        <span class='shopinfo-right-label'>平均送达时间</span>
        <span class='shopinfo-right-label--big'>{{shopInfo.average}}分钟</span>
      </div>
      <div class='shopinfo-right-love'>
        <span class='shopinfo-right-love-icon'></span>
        <span class='shopinfo-right-love-label'></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  data() {
    return {
      shopInfo: {
        image:
          "https://fuss10.elemecdn.com/4/cd/061b6f57400501f7a1640bfc266ebjpeg.jpeg?imageMogr2/thumbnail/190x190/format/webp/quality/85",
        name: "老李烤鸭(西城永捷店)",
        stars: 4.5,
        startPrice: 45,
        distributionPrice: 3,
        average: 30
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.shopinfo {
  height: 142px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 0 10vw;
  justify-content: space-between;
}
.shopinfo-left {
  display: flex;
  width: 30vw;
  @include center;
}

.shopinfo-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.shopinfo-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  @include center;
  margin-left: 10px;
}
.shopinfo-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-bottom: 5px;
}
.shooinfo-star {
  width: 100%;
  text-align: left;
  color: rgb(230, 193, 28);
}
.shopinfo-right {
  display: flex;
  position: relative;
  width: 40vw;
}
.shopinfo-right-item {
  display: flex;
  flex-direction: column;
  @include center;
  width: 150px;
}
.shopinfo-right-label {
  font-size: 14px;
  color: white;
  font-weight: 400;
}
.shopinfo-right-label {
  font-size: 14px;
  color: white;
  font-weight: 400;
  margin-bottom: 15px;
}
.shopinfo-right-love {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 0;
  right: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  @include center;
}
.shopinfo-right-label--big {
  font-size: 18px;
  color: white;
  font-weight: 700;
}
.shopinfo-right-love-icon {
  display: block;
  position: relative;
  width: 40px;
  height: 30px;
  &::before,
  &::after {
    position: absolute;
    content: "";
    left: 10px;
    top: 0;
    width: 50px;
    height: 80px;
    background: white;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg) scale(.5);
    transform-origin: 0 100%;
  }
  &::after {
    left: -40px;
    transform: rotate(45deg) scale(.5);;
    transform-origin: 100% 100%;
  }
}
</style>

