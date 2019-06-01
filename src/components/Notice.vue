<template>
  <div class='notice'>
    <div class='notice-main'>
      <p>商家公告</p>
      <div class='notice-main-content'>{{info.notice}}</div>
    </div>
    <div class='notice-deliveryfee'>
      <h5>配送说明</h5>
      <label>配送费：&yen;{{info.deliveryfee}}</label>
    </div>
    <div class='notice-invoice'>
      <p>票</p>
      <label>该商家支持开发票，请在下单时填写好发票抬头</label>
    </div>
    <div class='notice-report'>举报商家</div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  props: {
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.notice {
  width: 100%;
}
.notice-main {
  background-color: white;
  p {
    margin: 0;
    height: 30px;
    line-height: 30px;
    background-color: #0089dc;
    padding: 10px;
    color: #fff;
  }
}
.notice-main-content {
  padding: 10px;
}
.notice-deliveryfee {
  padding: 10px;
  h5 {
    margin: 5px 0;
  }
  label {
    font-size: 13px;
  }
}
.notice-invoice {
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 10px;
  p {
    margin: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    background-color: rgb(153, 153, 153);
    color: #fff;
    margin-right: 5px;
    font-size: 11px;
  }
  label {
    flex: 1;
    font-size: 13px;
    color: black;
  }
}
.notice-report {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #666;
  font-size: 18px;
  background-color: #fff;
  cursor: pointer;
}
</style>

