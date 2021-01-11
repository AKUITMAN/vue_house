<template>
  <div >
    <div style="background-color: #f5f5f5;height: 800px" >
      <!--  顶部导航菜单  -->
      <div class="line" style="background-color:#39ac6a">
       <div style="float: left;margin-left: 200px;height:30px;margin-top: 15px; "><img src="../assets/img/mylogo2.png"></div>
        <div style="color: white;float: left;margin-top: 20px;">
          <a href="" style="text-decoration: none;color: white">二手房&nbsp&nbsp&nbsp&nbsp</a>
          新房&nbsp&nbsp&nbsp&nbsp
          租房&nbsp&nbsp&nbsp&nbsp
          海外&nbsp&nbsp&nbsp&nbsp
          商业办公&nbsp&nbsp&nbsp&nbsp
          经纪人&nbsp&nbsp&nbsp&nbsp
          指南&nbsp&nbsp&nbsp&nbsp
          问答&nbsp&nbsp&nbsp&nbsp
          百科&nbsp&nbsp&nbsp&nbsp
          工具&nbsp&nbsp&nbsp&nbsp
          发布房源&nbsp&nbsp&nbsp&nbsp
        </div>
        <div style="float: right;margin-right: 200px;margin-top: 20px;color: white">187...退出</div>
      </div>





      <!-- 左侧导航   -->
      <el-row>
        <el-col :span="18" :offset="3">
          <el-container style="height: 100%;">
            <el-col :span="6">
              <el-menu
                :default-active="$route.path"
                default-active="activeIndex"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                router>
                <el-menu-item index="/index">首页</el-menu-item>
                <el-menu-item index="/favorHouse">关注的房源</el-menu-item>
                <el-menu-item index="/favorCommunity">关注的小区</el-menu-item>
                <el-menu-item index="/myAgent">我的经纪人</el-menu-item>
                <el-menu-item index="/history">看房记录</el-menu-item>
                <el-menu-item index="/delegation">我的委托</el-menu-item>
                <el-menu-item index="/searchlist">我的搜索</el-menu-item>
                <el-menu-item index="/myWenda">我的问答</el-menu-item>
                <el-menu-item index="/client">编辑资料</el-menu-item>
              </el-menu>
            </el-col>
            <el-container>
              <router-view/>
            </el-container>
          </el-container>
        </el-col>
      </el-row>
      <div style="margin-top: 50px;font-size: 12px;color: #999">贝壳找房（北京）科技有限公司 | 网络经营许可证 京ICP备16057509号</div>
      <div style="margin-top: 10px;font-size: 12px;color: #999"> © Copyright©2010-2021 贝壳找房版权所有</div>

       <div style="margin-top: 10px;font-size: 12px;color: #999"> 京公网安备 11010802024019号 网上有害信息举报专区</div>
      </div>

    </div>

</template>

<script>
  export default {
    data() {
      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      };
      return {
        tableData: Array(20).fill(item),
        activeIndex: '1',
      };
    },
  };
</script>


<style>
  .line {
    margin-top: -37px;
    margin-bottom: 8px;
    height: 60px;
    width: 100%;

  }

  .box-a-1 img {
    display: block;
    width: 200px;
    height: 50px;
    cursor: pointer;
  }

  .box-ipt input {
    width: 420px;
    height: 25px;
    text-indent: 15px;
    line-height: 20px;
    outline: none;
    margin-top: 5px;
  }


  .box-ul li {
    float: left;
    line-height: 25px;
    color: #acd1f9;
    margin-left: 5px;
    cursor: pointer;
    font-size: 12px;
    margin-top: 10px;
  }

  .box-ul li .caret {
    margin-left: 5px;
    display: inline-block;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    border-width: 5px;
    cursor: pointer;
    border-style: solid dashed dashed dashed;
    border-color: #acd1f9 transparent transparent transparent;
    border-bottom: none;
    margin-right: 10px;
  }

  .box-ul .eng {
    margin-left: 80px;
  }

  .box-ul #user a {
    color: #000;
    margin-left: 5px;
  }

  /* 头部的鼠标划上事件 English 我的12306*/

  .wode {
    position: absolute;
    top: 34px;
    left: 90px;
    width: 80px;
    background: #fff;
    display: none;
    z-index: 201;
  }

  .wode li {
    line-height: 30px;
  }

  .wode li a {
    color: #000;
  }

  .box-ul .eng:hover ul {
    display: block;
  }

  .yi {
    position: absolute;
    top: 34px;
    left: 160px;
    width: 80px;
    background: #fff;
    display: none;
    z-index: 101;
  }

  .yi li {
    border-bottom: 1px dashed #000;
  }

  .yi li a {
    color: #000;
  }

  .box-ul .wo:hover ul {
    display: block;
    color: #000;
  }

  /* 二级菜单 */


  .box-list ul {
    width: 1200px;
    height: 40px;
  }

  .box-list ul li {
    float: left;
    width: 145px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    position: relative;
  }

  .box-list ul li span {
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
  }


  /*尾部*/
  .qianfeng {
    width: 1200px;
    height: 280px;
    background: #f8f8f8;
    margin: 0 auto;
  }

  .box-a {
    padding: 10px 0;
    width: 1200px;
    /* padding: 0 5px; */
    margin-left: auto;
    margin-right: auto;
    background: #fff;
  }

  .qian-a {
    margin-right: 20px;
    float: left;
    width: 420px;
    margin-left: 60px;
    /* margin-right: 195px; */
  }

  .qian-a h2 {
    height: 54px;
    line-height: 54px;
    font-size: 14px;
  }

  .qian-a ul {
    height: 100px;
  }

  .qian-a ul li {
    float: left;
    margin: 0 10px 10px 0;
  }

  .qian-a ul li a img {
    display: block;
    width: 198px;
    height: 34px;
    border: 1px solid #dedede;
  }

  .xian {
    float: left;
  }

  .xian li {
    float: left;
    width: 140px;
    text-align: center;
  }

  .xian li h2 {
    height: 54px;
    line-height: 54px;
    font-size: 14px;
  }

  .xian .dimg {
    width: 80px;
    height: 80px;
    background: #fff;
    margin: 0 auto;
    position: relative;
  }

  .xian .dimg img {
    display: block;
    width: 80px;
    height: 80px;
    border: 1px solid #dedede;
  }

  /* 底部 */

  .box-b {
    margin-top: 160px;
    width: 1200px;
    height: 80px;
    text-align: center;
    padding: 10px 0;
    background: #666;
    color: #c1c1c1;
  }

  .box-b p {
    line-height: 40px;
  }

  .box-b p span {
    font-size: 15px;
    color: #999;
    margin-left: 10px;
  }

  /* 返回顶端 */

  .box-c {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    background: #f8f8f8;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }

  .box-c span {
    font-size: 35px;
  }

</style>
