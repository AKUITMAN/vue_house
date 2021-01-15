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
              <el-link :underline="false" href="https://news.ke.com/xa/baike/" style="font-size: 12px;color: #f5f5f6">百科</el-link>
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
            <a href="#" style="color: white">登录/</a>
            <a href="#" style="color: white">注册</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-phone"></i>
            <span style="color: white">热线电话1010-6188</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div style="width: 1340px;height: 200px;background-color: #c9c9c9">
      <div style="float: left;margin-left: 100px;margin-top: 20px;width: 200px;height:60px">
        <img src="../assets/1.png">
      </div>
      <div style="float: left;width:500px;height:50px;margin-top: 20px;margin-left: 50px">
        <ul style="font-size: 24px;color: black;font-weight: bolder">
          <li style="float: left;">
            <a >在售</a>
          </li>
          <li style="float: left;margin-left: 20px;font-weight: bolder">
            <a >成交</a>
          </li>
          <li style="float: left;margin-left: 20px;font-weight: bolder">
            <a >小区</a>
          </li>
          <li style="float: left;margin-left: 20px;font-weight: bolder">
            <a >地图找房</a>
          </li>
        </ul>
      </div>
      <div style="float: right;margin-top: 30px;padding-right: 750px">
        <el-input v-model="input" placeholder="请输入区域或小区名开始找房" style="width:400px;">
        </el-input>
        <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div style="width: 1340px; height:800px;">
      <div style="width: 1340px; height:100px;">
        <el-row style="padding: 50px">
          <el-col :span="8" v-for="(o, index) in goodsList" :key="o" :offset="index > 0 ? 1 : 0">

              <div>
                <span style="font-weight: bolder;font-size: 26px">{{o.ahouse}} {{o.typeName}} </span>
              </div>

          </el-col>
        </el-row>
      </div>
        <div style="width:650px;height: 420px;background-color: red;float: left;margin-left:50px;margin-top:50px">
          <div class="demo-image">
            <div class="block" v-for="fit in 1" :key="fit">
              <el-image style="width:650px; height: 420px" :src="img"></el-image>
            </div>
          </div>
        </div>
      <div style="width:600px;height:600px; float: right;margin-top: 50px">
        <el-row>
          <el-col :span="24" v-for="(o, index) in goodsList"  :key="o" :offset="index > 0 ? 1 : 0">

              <div>
                <span style="color: red;font-weight: bolder;float: left;padding-top: 20px;font-size:34px;padding-left: 50px"  >{{o.price}}</span>
                <span style="color: red;font-size:18px;float: left;padding-top:30px;">元/月({{o.rentTime}})</span>
              </div>
              <div style="padding-top: 70px">
                <el-divider></el-divider>
              </div>
              <div style="margin-left:50px;height:200px;width: 600px;">
                <div  class="left">
                  <div style="float: left">
                    <span style="font-size:14px;float: left;padding-top: 10px;color: #ada7a7;width:100px;height:30px; ">租赁方式:</span>
                  </div>
                  <div style="float: left;height: 30px;padding-top: 10px;">
                  <span>
                    <el-link  target="_blank" :underline="false">{{o.typeName}}</el-link>
                  </span>
                  </div>
                </div>
                <div style="margin-top: 10px" class="left">
                  <div style="float: left">
                    <span style="font-size:14px;float: left;padding-top: 10px;color: #ada7a7;width:100px;height:30px; ">房屋类型：</span>
                  </div>
                  <div style="float: left;height: 30px;padding-top: 10px;">
                  <span>
                    <el-link  target="_blank" :underline="false">{{o.houseType}} {{o.houseArae}}㎡</el-link>
                </span>
                  </div>
                </div>
                <div style="margin-top: 10px" class="left">
                  <div style="float:left">
                    <span style="font-size:14px;float: left;padding-top: 10px;color: #ada7a7;width:100px;height:30px;">朝向楼层：</span>
                  </div>
                  <div style="float: left;height: 30px;padding-top: 10px;">
                  <span>
                    <el-link  target="_blank" :underline="false">{{o.orientation}} 高楼层/{{o.floor}}层</el-link>
                </span>
                  </div>
                </div>
                <div style="margin-top: 10px" class="left">
                  <div style="float:left">
                    <span style="font-size:14px;float: left;padding-top: 10px;color: #ada7a7;width:100px;height:30px;">风险提示:</span>
                  </div>
                  <div style="float: left;height: 30px;padding-top: 10px;">
                  <span>
                    <el-link href="https://m.ke.com/text/disclaimer" target="_blank" :underline="false">用户风险提示</el-link>
                </span>
                  </div>
                </div>
              </div>
              <div >
                <el-divider></el-divider>
              </div>
              <div style="width: 600px;height:160px">
                <div style="width: 600px;height:100px;">
                    <div style="padding-left: 70px;width: 120px">
                      <img src="../assets/8.jpg" style="height:100px;width: 100px;float: left ;border-radius: 50%;">
                    </div>
                   <div style="width:250px;height:100px;float: left;padding-top:20px">
                    <span style="color: black;font-weight: bolder;float: left;font-size:26px;padding-left: 50px">诺克</span>
                    <span style="color: #aaaaaa;font-size:16px;float:left;padding-left: 50px;margin-top: 10px">好评经纪人,熟悉本房特色</span>
                   </div>
                </div>
                <div style="width: 600px;height:100px;">
                    <div style="width:200px;height: 100px;float: left;margin-left:75px">
                      <el-button plain  @click="consult" style="background-color: #0a41ad;width: 150px;height: 50px"><span class="el-icon-phone" style="color: #f5f5f6">电话咨询</span></el-button>
                    </div>
                    <div style="float: left;margin-left: 20px">
                      <el-button plain  @click="consult" style="background-color: #a7bfee;width: 150px;height: 50px"><span class="el-icon-pie-chart" style="color: #1414de">预约看房</span></el-button>
                    </div>
                </div>
              </div>

          </el-col>
        </el-row>
      </div>
      <div style="width:650px;height:170px;float: left;margin-left:50px;margin-top:15px;">
        <div class="demo-image" style="margin-top:30px" >
          <div class="block" v-for="fit in goodsList" :key="fit">
            <el-image style="width:122px; height: 120px ;float: left;padding-left:5px" :src="fit.pic1" @click="one"></el-image>
            <el-image style="width:122px; height: 120px ;float: left;padding-left:5px" :src="fit.pic2" @click="two"></el-image>
            <el-image style="width:122px; height: 120px ;float: left;padding-left:5px" :src="fit.pic3" @click="three"></el-image>
            <el-image style="width:122px; height: 120px ;float: left;padding-left:5px" :src="fit.pic4" @click="four"></el-image>
            <el-image style="width:122px; height: 120px ;float: left;padding-left:5px" :src="fit.pic5" @click="five"></el-image>
        </div>
        </div>
      </div>
    </div>
    <div style="width:1340px;height: 100px;margin-top: 10px">
      <span style="font-weight: bolder;font-size: 30px;float:left;margin-left: 50px;margin-top: 60px">
        房屋信息
      </span>
    </div>
    <div>
      <el-divider></el-divider>
    </div>
    <div style="width: 1340px;height: 250px;">
        <div style="float: left;width:300px;height: 250px;margin-left:50px;">
          <span style="float: left">基本信息</span>
        </div>
      <div style="float: left;width: 600px;height: 250px;margin-left: 50px">
        <el-row style="float: left">
          <el-col :span="24" v-for="(o, index) in goodsList" :key="o" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">面积:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">{{o.houseArae}}㎡</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">朝向:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">{{o.orientation}}</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">维护:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">今天</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">入住:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">随时入住</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">楼层:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">{{o.floor}}层</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">电梯:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">有</span>
                </div>
                </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">车位:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">暂无数据</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">用水:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">民水</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">用电:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">民电</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">燃气:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">有</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">采暖:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">自采暖</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">租期:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">一年以上</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <span style="font-size:14px;color: #999999;float: left">看房:</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">需提前预约</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div>
      <el-divider></el-divider>
    </div>
    <div style="width: 1340px;height: 200px;">
      <div style="float: left;width:300px;height: 200px;margin-left:50px;">
        <span style="float: left">交易属性</span>
      </div>
      <div style="float: left;width: 600px;height: 200px;margin-left: 50px">
        <el-row style="float: left">
          <el-col :span="24" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">挂牌时间</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">2020年10月18日</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">交易权属</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">商品房</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">上次交易</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">2017年01月05日</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">房屋用途</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">普通住宅</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">房屋年限</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">满两年</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">产权所属</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">非公有</span>
                </div>
              </div>
              <div style="padding: 14px;">
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">抵押信息</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">暂无数据</span>
                </div>
                <div style="width: 250px;height: 35px;float: left">
                  <span style="font-size:14px;color: #999999;float: left">房屋备件</span><span style="margin-left: 20px;font-size: 14px;color: black;float: left">已上传房本照片</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="width:1340px;height: 50px;margin-top: 10px">
      <span style="font-weight: bolder;font-size: 30px;float:left;margin-left: 50px">
        本房源特色
      </span>
    </div>
    <div style="width:1340px;height: 405px;margin-top:20px">
      <img src="../assets/9.png" style="float: left;margin-left: 45px">
    </div>
    <div style="width:1340px;height: 50px;margin-top: 10px">
      <span style="font-weight: bolder;font-size: 30px;float:left;margin-left: 50px">
        该户型分间
      </span>
    </div>
    <div style="width:1340px;height:200px;margin-top:20px">
      <img src="../assets/10.png" style="float: left;margin-left: 45px ;">
    </div>
    <div id="map" style="width:800px;height:300px;margin-left: 50px"></div>
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
      input: '',
      fits: [],
      goodsList:[],
      src:'',
      img:''

    }
  },
  methods: {
    findById(){
      axios.post("http://localhost:7000/house-house/house/findById",{id:this.$route.params.id}).then(res=>{
          if(res.data.code==200){
            this.goodsList=res.data.data;
            alert(this.goodsList.length);
          }
      })

    },
    search: function () {

    },
    consult:function (){

    },
    one:function (){
      this.goodsList.forEach(item=>{
        this.img=item.pic1;
      })
    },
    two:function (){
      this.goodsList.forEach(item=>{
        this.img=item.pic2;
      })
    },
    three:function (){
      this.goodsList.forEach(item=>{
        this.img=item.pic3;
      })
    },
    four:function (){
      this.goodsList.forEach(item=>{
        this.img=item.pic4;
      })
    },
    five:function (){
      this.goodsList.forEach(item=>{
        this.img=item.pic5;
      })
    },
    mapList:function (){
      var map = new BMap.Map("map");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(109.49,33.42), 12);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);
    }

  },
  mounted() {
      this.one();
      this.findById();
      this.mapList();
    var id=this.$route.params.id;
    alert(id);

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
    width: 100%;
    height: 180px;
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
    margin-left:100px;
  }

  .leftContent {

    width: 910px;
    margin-left:80px;
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
  .left{
    float: left;
    width: 600px;
    height:30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
</style>
