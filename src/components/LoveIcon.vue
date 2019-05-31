<template>
  <div class='loveicon'>
    <div class='loveicon-left'>
      <span class='loveicon-circle-left' :class="{'loveicon-white':full}"></span>
      <span class='loveicon-rect-left' :class="{'loveicon-white':full}"></span>
    </div>
    <div class='loveicon-right'>
      <span class='loveicon-rect-right' :class="{'loveicon-white':full}"></span>
      <span class='loveicon-circle-right' :class="{'loveicon-white':full}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoveIcon",
  props: {
    full: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
$circleWidth: 11px;
$circleHeight: 14px;
$border: 2px solid white;
@mixin rectBorder {
  border: $border;
  border-top-color: transparent;
  border-left: none;
  border-right-color: transparent;
}
.loveicon {
  display: flex;
  width: 50px;
  height: 40px;
  justify-content: center;
  transform: scale(0.8);
}
.loveicon-white{
    background-color: white;
}
.loveicon-left {
  position: relative;
  display: flex;
  transform: rotate(45deg) translateX(4px);
}
.loveicon-circle-left {
  display: inline-block;
  width: $circleWidth;
  height: $circleHeight;
  border: $border;
  border-radius: $circleWidth 0 0 $circleWidth;
  border-right: none;
}
.loveicon-rect-left {
  display: inline-block;
  width: $circleHeight;
  height: $circleHeight;
  border: $border;
  border-top-color: transparent;
  border-left: none;
  border-right-color: transparent;
}
.loveicon-right {
  position: relative;
  display: flex;
  transform: rotate(-45deg) translateX(-4px);
}
.loveicon-circle-right {
  display: inline-block;
  width: $circleWidth;
  height: $circleHeight;
  border: $border;
  border-radius: 0 $circleWidth $circleWidth 0;
  border-left: none;
}
.loveicon-rect-right {
  display: inline-block;
  width: $circleHeight;
  height: $circleHeight;
  border: $border;
  border-top-color: transparent;
  border-right: none;
  border-left-color: transparent;
}
</style>

