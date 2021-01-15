<template>
  <div>
  <div class="head">
    <div class="banner" style="display: block">
      <div class="container">
          <ul class="channelList">
              <li>
                <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">首页</el-link>
              </li>
              <li class="selected">
                <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">二手房</el-link>
              </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">新房</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6" >租房</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">海外</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">商业办公</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">小区</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">百科</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">发布房源</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">贝壳研究院</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">下载APP</el-link>
            </li>
            <li class>
              <el-link :underline="false" href="#" style="font-size: 12px;color: #f5f5f6">开放平台</el-link>
            </li>
          </ul>
        <div class="banner-right">
          <div class="login">
            <i class="el-icon-s-custom"></i>
            <router-link to="/MyHouse" style="color: white">{{userName}}/</router-link>>
            <a href="#" style="color: white">注册</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-phone"></i>
            <span style="color: white">热线电话1010-6188</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="header">
      <div class="menu">
        <div class="menuLeft">
          <div style="float: left">
            <img src="../assets/1.png">
          </div>
          <ul class="typeList">
            <li>
              <a href="#">在售</a>
            </li>
            <li>
              <a href="#">成交</a>
            </li>
            <li>
              <a href="#">小区</a>
            </li>
            <li>
              <a href="#">地图找房</a>
            </li>
          </ul>
        </div>
      </div>
      <div style="float: left;margin-left: 170px">
        <el-input v-model="input" placeholder="请输入区域或小区名开始找房" style="width:400px;margin-left: 100px;">
        </el-input>
        <el-button type="primary" @click="houseType" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div class="m-filter" >
        <div class="position">
            <dl>
              <dt>
                <h2>位置</h2>
              </dt>
              <dd>
                <h2 @click="findAll">
                  区域
                </h2>
                    <el-row style="padding-top: 20px">
                      <el-col :span="2" v-for="(o, index) in addressList" :key="o" :offset="index > 0 ? 1: 0" @click="">
                        <div style="padding:10px; width: 40px;height: 15px">
                          <span>{{o.district}}</span>
                        </div>
                      </el-col>
                    </el-row>
              </dd>
              <div style="float: left;margin-top: -56px;margin-left: 80px;">
                <h2 @click="findmetro">
                  地铁线
                </h2>
                <el-row>
                  <el-col :span="4" v-for="(o, metroList) in 4" :key="o" :offset="metroList > 0 ? 0: 0">
                    <div style="padding:10px; ">
                      <span></span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </dl>
        </div>
    </div>
    <!--<div class="box">-->
      <!--<span style="float: left;font-size: 12px;margin-left: 170px">价格</span>-->
      <!--<div class="boc">-->
        <!--<template>-->
          <!--<el-checkbox-group v-model="checkList">-->
            <!--<el-checkbox label="40万以下"></el-checkbox>-->
            <!--<el-checkbox label="40-60万"></el-checkbox>-->
            <!--<el-checkbox label="60-80万"></el-checkbox>-->
            <!--<el-checkbox label="80-100万"></el-checkbox>-->
            <!--<el-checkbox label="100-150万"></el-checkbox>-->
            <!--<el-checkbox label="150-200万"></el-checkbox>-->
          <!--</el-checkbox-group>-->
        <!--</template>-->
      <!--</div>-->
    <!--</div>-->
    <div class="box">
      <span style="float: left;font-size: 12px;margin-left: 170px">房型</span>
      <div class="boc">
      <template>
        <el-checkbox-group v-model="checkList1" @change="houseType">
          <el-checkbox label="1室" >一室</el-checkbox>
          <el-checkbox label="2室" >二室</el-checkbox>
          <el-checkbox label="3室" >三室</el-checkbox>
          <el-checkbox label="4室" >四室</el-checkbox>
          <el-checkbox label="5室" >五室</el-checkbox>
          <el-checkbox label="5室以上" >五室以上</el-checkbox>
        </el-checkbox-group>

      </template>
      </div>
    </div>
    <!--<div class="box">-->
      <!--<span style="float: left;font-size: 12px;margin-left: 170px">建筑面积</span>-->
      <!--<div class="boc">-->
        <!--<template>-->
          <!--<el-checkbox-group v-model="checkList">-->
            <!--<el-checkbox label="50㎡以下"></el-checkbox>-->
            <!--<el-checkbox label="50㎡-70㎡以下"></el-checkbox>-->
            <!--<el-checkbox label="70㎡-90㎡以下"></el-checkbox>-->
            <!--<el-checkbox label="90㎡-120㎡以下"></el-checkbox>-->
            <!--<el-checkbox label="120㎡-150㎡以下"></el-checkbox>-->
            <!--<el-checkbox label="150㎡-200㎡以下"></el-checkbox>-->
          <!--</el-checkbox-group>-->
        <!--</template>-->
      <!--</div>-->
    <!--</div>-->
    <div style="text-align: center">

        <!--<div class="box">-->
          <!--<span style="float: left;font-size: 12px;margin-left: 170px">房源特色</span>-->
          <!--<div class="boc">-->
            <!--<template>-->
              <!--<el-checkbox-group v-model="checkList" @change="houseType">-->
                <!--<el-checkbox label="必看好房"></el-checkbox>-->
                <!--<el-checkbox label="满五年"></el-checkbox>-->
                <!--<el-checkbox label="满两年"></el-checkbox>-->
                <!--<el-checkbox label="近地铁"></el-checkbox>-->
                <!--<el-checkbox label="VR房源"></el-checkbox>-->
                <!--<el-checkbox label="7日新上"></el-checkbox>-->
              <!--</el-checkbox-group>-->
            <!--</template>-->
          <!--</div>-->
        <!--</div>-->
        <div class="box">
          <span style="float: left;font-size: 12px;margin-left: 170px">朝向</span>
          <div class="boc">
            <template>
              <el-checkbox-group v-model="checkList1" @change="houseType">
                <el-checkbox label="南">朝南</el-checkbox>
                <el-checkbox label="东">朝东</el-checkbox>
                <el-checkbox label="北">朝北</el-checkbox>
                <el-checkbox label="西">朝西</el-checkbox>
              </el-checkbox-group>
            </template>
          </div>
        </div>
        <div class="box">
          <span style="float: left;font-size: 12px;margin-left: 170px">价格</span>
          <div class="boc">
            <template>
              <el-radio-group v-model="checkList" @change="houseType">
                <el-radio :label="0.0">≤1000元</el-radio>
                <el-radio :label="1000.0">1000-2000元</el-radio>
                <el-radio :label="2000.0">2000-3000元</el-radio>
                <el-radio :label="3000.0">3000-4000元</el-radio>
                <el-radio :label="4000.0">4000-5000元</el-radio>
              </el-radio-group>
            </template>
          </div>

        </div>
        <!--<div class="box">-->
          <!--<span style="float: left;font-size: 12px;margin-left: 170px">楼龄</span>-->
          <!--<div class="boc">-->
            <!--<template>-->
              <!--<el-checkbox-group v-model="checkList">-->
                <!--<el-checkbox label="5年以内"></el-checkbox>-->
                <!--<el-checkbox label="10年以内"></el-checkbox>-->
                <!--<el-checkbox label="15年以内"></el-checkbox>-->
                <!--<el-checkbox label="20年以内"></el-checkbox>-->
                <!--<el-checkbox label="20年以上"></el-checkbox>-->
              <!--</el-checkbox-group>-->
            <!--</template>-->
          <!--</div>-->

        <!--</div>-->
        <!--<div class="box">-->
          <!--<span style="float: left;font-size: 12px;margin-left: 170px">用途</span>-->
          <!--<div class="boc">-->
            <!--<template>-->
              <!--<el-checkbox-group v-model="checkList">-->
                <!--<el-checkbox label="普通住宅"></el-checkbox>-->
                <!--<el-checkbox label="商业类"></el-checkbox>-->
                <!--<el-checkbox label="别墅"></el-checkbox>-->
                <!--<el-checkbox label="四合院"></el-checkbox>-->
                <!--<el-checkbox label="车位"></el-checkbox>-->
                <!--<el-checkbox label="其他"></el-checkbox>-->
              <!--</el-checkbox-group>-->
            <!--</template>-->
          <!--</div>-->

        <!--</div>-->
        <div class="box">
          <span style="float: left;font-size: 12px;margin-left: 170px">租赁方式</span>
          <div class="boc">
            <template>
              <el-checkbox-group v-model="checkList1" @change="houseType">
                <el-checkbox label="合租"></el-checkbox>
                <el-checkbox label="整租"></el-checkbox>
              </el-checkbox-group>
            </template>
          </div>
        </div>
    </div>
    <div class="leftContent">
        <div class="orderFilter">
            <div class="sellListPage">
                <ul>
                  <li style="padding-left: 20px;">
                    <h2>
                      <el-link :underline="false" @click="defaultSort" style="font-size:20px;font-weight:bolder">默认排序</el-link>
                    </h2>
                  </li>
                  <li >
                    <h2 style="padding-left: 20px;font-size: 16px">
                      <el-link :underline="false" @click="newest" style="font-size:20px;font-weight:bolder">最新发布</el-link>
                    </h2>
                  </li>
                  <li >
                    <h2 style="padding-left: 20px;">
                      <el-link :underline="false" @click="totalPrice" style="font-size:20px;font-weight:bolder">总价</el-link>
                    </h2>
                  </li>
                  <li >
                    <h2 style="padding-left: 20px;">
                      <el-link :underline="false" @click="unitPrice" style="font-size:20px;font-weight:bolder">房屋单价</el-link>
                    </h2>
                  </li>
                  <li >
                    <h2 style="padding-left: 20px;">
                      <el-link :underline="false" @click="area" style="font-size:20px;font-weight:bolder">面积</el-link>
                    </h2>
                  </li>
                </ul>
            </div>
        </div>
      <div style="width: 960px;border: #0a41ad solid 1px"></div>
    </div>
    <div style="width: 1150px">
    <div style="padding-left: 260px;padding-top: 20px;width:200px;height:220px;float: left">
      <el-row>
        <el-col :span="24" v-for="(o, index) in houseList" :key="o" :offset="index > 0 ? 0: 0">
          <div style="margin-top:35px">
            <el-card :body-style="{ padding: '0px' }" style="width:200px;height:200px">
              <el-image :src="o.pic1" style="width:200px;height:220px" @click="findById(o.id)"></el-image >
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="float:left;padding-left: 50px;margin-left: 500px;margin-top:-210px">
      <el-row>
        <el-col :span="24" v-for="(o, index) in houseList" :key="o" :offset="index > 0 ? 0 : 0">
          <div style="margin-top: 35px">
            <el-card :body-style="{ padding: '0px' }" style="width:600px;height:200px;float: left">
              <div style="padding: 14px;">
                <span style="font-weight: bolder;font-size: 24px;float: left"  v-html="o.typeName+'·'"></span>
                <span style="font-weight: bolder;font-size: 24px;float: left" v-html="o.ahouse"></span><br>
              </div>
              <div style="padding: 14px;">
                <span style="font-size: 16px;float: left;" class="el-icon-location-outline" v-html="o.aname">&nbsp;&nbsp;</span><br>
              </div>
              <span style="font-size:20px;float:right;color: red;font-weight: bolder;padding-right: 50px">{{o.price}}<font style="font-size: 15px">.00元/每月</font></span>
              <div style="padding: 14px;">
                <span style="font-size: 16px;float: left;" class="el-icon-s-home">&nbsp;&nbsp;{{o.floor}} | 2000年建 |<span v-html="o.houseType"></span> | {{o.houseArae}}平米 | <span v-html="o.orientation"></span></span><br>
              </div>
              <!--<span style="font-size:12px;float:right;padding-right: 50px">单价31690元/平米</span>-->
              <!--<div style="padding: 14px;">-->
              <!--<span style="font-size: 16px;float: left;" class="el-icon-star-off">&nbsp;&nbsp;5人关注 / 3天前发布</span><br>-->
              <!--</div>-->
              <div>
                <div style="background-color: #86a5e7;width: 50px;height: 20px;margin-left:20px;float: left">满5年</div>
                <div style="background-color: #86a5e7;width: 80px;height: 20px;margin-left:20px;float: left">VR看装修</div>
                <div style="background-color: #86a5e7;width: 50px;height: 20px;margin-left:20px;float: left">新上</div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    </div>
    <div style="padding-top:2454px;text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.params.page"
        :page-sizes="this.pagesizes"
        :page-size="this.params.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total">
      </el-pagination>
    </div>
    <div style="background-color: #b3b1b1;width:100%;height:250px">
          <div style="padding-top:30px;">
            <span style="font-weight: bolder;float: left;padding-left: 100px;font-size:24px">推荐楼盘</span>
          </div>
      <div style="padding-top: 50px;padding-left: 100px">
        <el-row style="float: left">

              <img src="../assets/2.png" class="image" style="float: left;width:200px ;height:150px;">

            <img src="../assets/3.png" class="image" style="float: left;width:200px ;height:150px;padding-left: 15px">


            <img src="../assets/4.png" class="image" style="float: left;width:200px ;height:150px;padding-left: 15px">


            <img src="../assets/5.png" class="image" style="float: left;width:200px ;height:150px;padding-left: 15px">


            <img src="../assets/6.png" class="image" style="float: left;width:200px ;height:150px;padding-left: 15px">

        </el-row>
      </div>
    </div>
    <div style="width:100%;height:250px">
      <img src="../assets/7.png" class="image">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
name: "shop",
  data() {
    return {
      userName: '登录',
      addressList:'',
      src:'',
      input: '',
      goodsList:[],
      metroList:[],
      houseList:[],
      checkList: [],
      checkList1: [],
      activeNames: ['4'],
      total:100,
      params:{
        page:1,
        size:10
      },
      numsort:'',
      pricesort:'',
      pagesizes:[5,10,15]
    }


  },
  methods:{

    handleSizeChange:function (val) {
      this.params.size=val;
      this.houseType();
    },
    handleCurrentChange:function (val) {
      this.params.page=val;
      this.houseType();
    },

    handleChange(val) {
      console.log(val)
    },
    search:function (){

      axios.get("http://localhost:7000/house-search/search/selectKey?key="+this.input+"&page="+this.params.page+"&size="+this.params.size+"&pricesort="+3000).then(res=>{
        if (res.data.code==200){
          this.total = res.data.total;
          this.houseList=res.data.data;
        }
      })
      },
    findAll:function (){
      axios.get("http://localhost:7000/house-address/address/addressfindAll").then(res=>{
        if (res.data.code==200){
          this.addressList=res.data.data;
        }
      })
    },

    findmetro:function (){

    }
    ,area:function (){

    },
    unitPrice:function (){

    },
    totalPrice:function (){

    },
    newest:function (){

    },
    defaultSort:function (){

    },
    findById:function (id){
      console.log(id)
      this.$router.push({name:'shopone',params:{id:id}})
    },
    houseType:function () {

      // alert(this.input)
      // alert(this.checkList1)
      // alert(this.checkList)
      axios.get("http://localhost:7000/house-search/search/selectHouse?key="+this.input+"&check="+this.checkList1+"&tariff="+this.checkList+"&page="+this.params.page+"&size="+this.params.size).then(res=>{
        console.log(res)
        if (res.data.code==200){
          this.total = res.data.total;
          this.houseList=res.data.data;
        }
      })

    },
    getUser:function () {

      //alert(this.$cookie.get("token"))
      axios.get("http://localhost:7000/house-user/user/getUser?token="+this.$cookie.get("token")).then(res=>{
        console.log(res);
       this.userName=res.data.data.userName;
        //alert(res.data.data.userName)
      })
    }

  },
  mounted(){
  this.houseType();
  this.findAll();
  this.getUser();
  }
}
</script>

<style scoped>
  .head{
    margin: 0;
    padding: 0;
  }
  .banner {
    background-color: #2c3e50;
    line-height: 38px;
    font-size: 12px;
    height: 38px;

  }
  .banner .container {
    width:1000px;
    margin: 0 auto;
  }
  .banner .container .channelList {
    display: table-cell;
    white-space: nowrap;
  }
  dd, dl, dt, li, ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .banner .container .channelList li {
    display: inline-block;
    margin-right:20px;
    position: relative;
    font-size: 12px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
 .banner-right {
    display: table-cell;
    width: 1150px;
    text-align: right;
  }
  .banner-right .phone {
    display: inline-block;
  }
  .phone{
    text-align: right;
  }

  .header {
    background-color: #f5f5f6;
    line-height: 1;
    padding: 30px 0 40px;
  }

  .menu .menuLeft .typeList {
    display: inline-block;
    margin-left: 34px;
    font-size: 16px;
    line-height: 26px;
  }
  .menu {
    width: 1150px;
    margin: 0 auto;
  }
  .menu .menuLeft {
    width: 50%;
  }
  .menu .menuLeft .typeList li {
    display: inline-block;
    margin-right: 30px;
  }
  .menu .menuLeft .typeList li.selected a {
    color: #0a41ad;
  }
  .menu .menuLeft .typeList li a {
    color: #101d37;
    text-decoration: none;
    font-weight: 700;
  }
  .m-filter{
    width: 1100px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 25px;
    padding-bottom: 14px;
    padding-top: 14px;
    background-color: #fafafa;
    box-shadow: 0 1px 2px -1px rgba(0,0,0,.2);
    font-size: 12px;
    line-height: 1;
    position: relative;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: 400;
  }
  h2 {
   float: left;
  }
  dt {
    display: block;
  }

  dd {
    display: block;
    margin-inline-start: 40px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-col-2 {
    width: 4%;
  }
  .box{
    width: 1000px;
    padding-top: 30px;
    margin-left: 100px;


  }
  template{
    margin-left: 50px;
  }
  .boc{
    width: 950px;
    text-align: left;
    margin-left:270px;
    font-size: 30px;
  }

  .leftContent {

    width: 910px;
    margin-left:260px;
    margin-top: 20px;

  }
  .sellListPage {
    margin: 0 auto;
    margin-top: 26px;
    line-height: 1;
    width: 1150px;
    overflow: visible;
  }
  .orderFilter{
    width: 960px;
    height: 25px;
  }

</style>
