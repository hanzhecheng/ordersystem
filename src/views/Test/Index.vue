<template>
  <div class='test'>
    <h2>{{date}}</h2>
    <DatePicker v-model='date'></DatePicker>
  </div>
</template>

<script>
const DatePicker = () => import("@/views/Date/Index");
export default {
  name: "Test",
  data() {
    return {
      date: "2019/5/15"
    };
  },
  components: { DatePicker }
};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

