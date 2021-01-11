<template>
  <div class="index_vessel">
    <div style="margin-top: 40px;font-size: 15px;"><strong>仅支持在链家App修改用户昵称及头像哦～</strong></div>
    <div style="margin-top: 20px">扫描二维码下载链家App</div>
    <div class="img" ></div>
    <div style="margin-top: 260px;color: #999999;font-size: 13px">如需要注销账户，请拨打10109666转7，告知客服操作</div>

  </div>
</template>

<script>
    export default {
        name: "client"
    }
</script>

<style scoped>
  .index_vessel{
    height: 500px;
    width: 755px;

    float: left;
    margin-left: 20px;
    background-color: white;
  }
  .img{
    float: left;
    margin-left: 285px;
    width: 129px;
    height: 129px;
    padding: 30px;
    margin-top: 20px;
    background-image: url("../assets/img/erweima.png");
  }

</style>
