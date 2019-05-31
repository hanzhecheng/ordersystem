<template>
  <div class='stars'>
    <ul class="stars-list">
      <li v-for='item in scores' :key='item'>
        <svg-icon icon-class='star-empty' v-if='item>number'></svg-icon>
        <svg-icon icon-class='star' style="color: rgb(242, 217, 104);" v-if='item<=number'></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Stars",
  data() {
    return {
      scores: [1, 2, 3, 4, 5]
    };
  },
  props: {
    number: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.stars-list{
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: flex-start;
}
</style>

