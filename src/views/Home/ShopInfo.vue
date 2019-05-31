<template>
  <div class='shopinfo'>
    <div class='shopinfo-left'>
      <img class='shopinfo-avatar' :src='shopInfo.image'>
      <div class='shopinfo-main'>
        <div class='shopinfo-name one-line-dot'>{{shopInfo.name}}</div>
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
        <span class='shopinfo-right-label one-line-dot'>平均送达时间</span>
        <span class='shopinfo-right-label--big'>{{shopInfo.average}}分钟</span>
      </div>
      <div class='shopinfo-right-love' @click='toggleLove'>
        <LoveIcon :full='shopInfo.love'></LoveIcon>
        <span class='shopinfo-right-love-label'>{{shopInfo.love?'取消收藏':'收藏'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const LoveIcon = () => import("@/components/LoveIcon");
export default {
  name: "ShopInfo",
  components: { LoveIcon },
  data() {
    return {
      shopInfo: {
        image:
          "https://fuss10.elemecdn.com/4/cd/061b6f57400501f7a1640bfc266ebjpeg.jpeg?imageMogr2/thumbnail/190x190/format/webp/quality/85",
        name: "老李烤鸭(西城永捷店)",
        stars: 4.5,
        startPrice: 45,
        distributionPrice: 3,
        average: 30,
        love: 0
      }
    };
  },
  methods: {
    toggleLove() {
      this.shopInfo.love = !this.shopInfo.love;
    }
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
  max-width: 150px;
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
  width: 10vw;
}

.shopinfo-right-label {
  font-size: 14px;
  color: white;
  font-weight: 400;
  margin-bottom: 15px;
  max-width: 100px;;
}
.shopinfo-right-love {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.shopinfo-right-label--big {
  font-size: 18px;
  color: white;
  font-weight: 700;
}
.shopinfo-right-love-label {
  color: white;
  font-size: 13px;
  display: inline-block;
  margin-top: -10px;
}
</style>

