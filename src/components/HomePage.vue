<template>
  <div class="max">
    <div class="head">
      <div class="border">
          <div class="first">

            <!--<template>
              <el-button type="text" @click="login">登录</el-button>
            </template>-->
            <el-popover
              placement="bottom"
              width="400"
              trigger="click">
              <div style="height: 300px" :modal="formLabelAlign">
              <h2 style="width: 300px;height: 40px;float: left;color: black">邮箱快捷登录</h2>
              <div style="width: 300px;height: 40px;float: left;color: #AAA;font-size: 14px">别担心，无账号自动注册不会导致手机号被泄露</div>
              <div style="width: 300px;height: 40px;float: left; margin-top: 10px;margin-left: 45px">邮箱：<input  placeholder="请输入邮箱" style="width: 250px;height: 40px" v-model="user.email"></div>
              <div style="width: 300px;height: 40px;float: left; margin-top: 10px;margin-left: 45px">密码：<input  placeholder="请输入密码" ype="password" style="width: 250px;height: 40px" v-model="user.password"></div>
              <div style="height: 30px;width: 200px">
                <button style="width: 390px;height: 40px;background-color: green;margin-top: 17px;" type="primmary" @click="login()">登录</button>
              </div>
              </div>
              <el-button slot="reference" type="text">登录</el-button>
          </el-popover>
            <el-popover
              placement="bottom"
              width="400"
              trigger="click">
              <div style="height: 300px">
              <h2 style="width: 300px;height: 40px;float: left;margin-top: -0px;color: black">邮箱注册</h2>
              <div style="width: 300px;height: 40px;float: left;margin-top: -25px;color: #AAA;font-size: 14px">别担心，无账号自动注册不会导致手机号被泄露</div>
              <div style="width: 300px;height: 40px;float: left; margin-top: 10px;margin-left: 45px;">昵称：<input  placeholder="请输入昵称" style="width: 250px;height: 40px" v-model="user.userName"></div>
              <div style="width: 300px;height: 40px;float: left; margin-top: 10px;margin-left: 45px">邮箱：<input  placeholder="请输入邮箱" style="width: 250px;height: 40px" v-model="user.email"></div>
              <div style="width: 300px;height: 40px;float: left; margin-top: 10px;margin-left: 45px">密码：<input  placeholder="请输入密码" ype="password" style="width: 250px;height: 40px" v-model="user.password"></div>
              <div style="height: 30px;width: 300px">
                <button style="width: 390px;height: 40px;background-color: green;margin-top: 20px;" @click="registe()">注册</button>
              </div>
              </div>
              <el-button slot="reference" type="text">立即注册</el-button>
            </el-popover>

            <!--<template>
              <el-button type="text" @click="registe">立即注册</el-button>
            </template>-->
           </div>
        <div class="second">
          <a href="http://10.12.154.48:8080/#/" style="text-decoration: none;color: white"><div class="sfirst"></div></a>
          <div style="background: rgba(0,0,0,0.25);display: inline-block;height: 27px;line-height: 27px;text-align: center;color: #fff;margin-top: 12px;
                      cursor: pointer;border-radius: 15px;padding: 0 10px;font-size: 12px;float: left" ><a href="http://10.12.154.48:8080/#/city" style="text-decoration: none;color: white">西安</a> </div>
          <div class="ssecond"><strong>
            二手房&nbsp&nbsp
            新房&nbsp&nbsp
            租房&nbsp&nbsp
            海外&nbsp&nbsp
            商业办公&nbsp&nbsp
            经纪人&nbsp&nbsp
            指南&nbsp&nbsp
            问答&nbsp&nbsp
            百科&nbsp&nbsp
            工具&nbsp&nbsp
            发布房源&nbsp&nbsp
          </strong>
          </div>
        </div>
        <div class="third">
          <div class="third1">

          </div>
          <div class="third2">
            西安链家真实租房 65856 套
          </div>

        </div>
        <div class="four">
          <div class="four3">
          <div class="four1">
            找二手房&nbsp&nbsp
            找新房&nbsp&nbsp
            找租房&nbsp&nbsp
            搜问答&nbsp&nbsp
          </div>
          </div>
          <div class="four2">
            <el-autocomplete style="width: 527px"
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入区域、商圈或小区名开始找房"
              @select="handleSelect"
            ></el-autocomplete>
          </div>
          <div class="four4">
            <el-button type="success">开始找房</el-button>
          </div>

        </div>

      </div>
      <div class="size">
        关于仿冒我公司进行不正当竞争行为的郑重声明&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        房地产中介诚信服务承诺及保证书
      </div>
    </div>
    <div class="zhong" >
    </div>
    <div class="three">
      <div class="nei">
        <div class="head1">
          <div class="size1">
            <strong>
              二手好房
            </strong>
          </div>
          <div class="size2">
            为你而选
          </div>
        </div>
        <div class="size3">
          好房源那么多，我们为你精选，链家网会越来越懂你
        </div>
        <div class="size4">
          更多西安二手房
        </div>
        <div class="card">
          <el-row>
            <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/img/1.jpg" class="image">
                <div style="padding: 14px; float: left">
                  <div style="float: left;width: 200px;font-size: 20px">雁塔高新六路</div>
                  <div style="float: left;width: 200px;font-size: 20px">南窑国际</div>
                  <div class="bottom clearfix">
                    <div style="float: left;color: #999999;font-size:12px ">四室一厅</div>
                    <div style="color: red;float: right">161万</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="three">
      <div class="nei">
        <div class="head1">
          <div style="float: left;height: 50px;width: 75px;font-size: 35px;}">
            <strong>
              新房
            </strong>
          </div>
          <div class="size2">
            新启航
          </div>
        </div>
        <div style="float: left;height: 25px;width: 277px;">
          真实信息准确同步，楼盘动态一手掌握
        </div>
        <div class="size4">
          更多西安新房
        </div>
        <div class="card">
          <el-row>
            <el-col :span="6" v-for="(o, index) in imagesbox" :key="o.id" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.View" class="image">
               <!-- <div style="padding: 14px; float: left">
                  <div style="float: left;width: 200px;font-size: 20px">雁塔高新六路</div>
                  <div style="float: left;width: 200px;font-size: 20px">南窑国际</div>

                  <div class="bottom clearfix">
                    <div style="float: left;color: #999999;font-size:12px ">四室一厅</div>
                    <div style="color: red;float: right">161万</div>
                  </div>
                </div>-->
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="three">
      <div class="nei">
        <div class="head1">
          <div class="size1">
            <strong>
              海外地产
            </strong>
          </div>
          <div class="size2">
            做全球房东
          </div>
        </div>
        <div style="float: left;height: 25px;width: 210px;">
          海量全球好房，畅享美好生活
        </div>
        <div class="size4">
          更多海外房源
        </div>
        <div class="card">
          <el-row>
            <el-col :span="4" v-for="(o, index) in imagesboxl" :key="o.idl" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.View" class="image">
                <div style="padding: 14px; float: left">
                  <div style="float: left;width: 200px;font-size: 15px">{{o.chotry}}</div>
                  <div style="float: left;width: 200px;font-size: 20px"><strong>{{o.hosename}}</strong></div>
                  <div class="bottom clearfix">
                    <div style="float: left;color: #999999;font-size:12px ">{{o.type}}</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="five">
      <div class="five1">
        <div class="five_left">
          <div style="float: left;height: 60px;width: 500px;font-size: 35px;color: white">
            <strong>链家真实房源</strong>
          </div>
          <div style="float: left;height: 60px;width: 500px;font-size: 35px;color: white">
            不是嘴上说说就可以！
          </div>

        </div>
        <div class="five_right">
          <div style="float: left;height: 30px;width: 375px;font-size: 18px;color: white">
            真实存在，真实在售，真实价格，真实图片！
          </div>
          <div style="float: left;height: 30px;width: 395px;font-size: 18px;color: white">
          链家郑重向用户承诺：真实房源，假一赔百元！
        </div>
          <div style="float: left;height: 60px;width: 380px;margin-left: 9px">
            <el-input  placeholder="请输入链家编号查询真伪..."></el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom1">
      <div class="kuang">
        <div class="lan1">
          <div style="float: left;height: 20px;width: 80px;color: white">关于链家</div>
          <div style="float: left;height: 20px;width: 80px;color: white">联系我们</div>
          <div style="float: left;height: 20px;width: 80px;color: white">加入我们</div>
          <div style="float: left;height: 20px;width: 80px;color: white">隐私说明</div>
          <div style="float: left;height: 20px;width: 80px;color: white">网站地图</div>
          <div style="float: left;height: 20px;width: 80px;color: white">友情链接</div>
          <div style="float: right;height: 20px;width: 170px;color: green">官方客服 1010 9666</div>
        </div>
        <div class="lan2">
          <div class="lan2_1">
            <a><div style="float: left;background-color: black;color: #888c8e;height: 25px;width: 70px;margin-left: 10px">二手房</div></a>
            <a><div style="float: left;background-color: black;color: #888c8e;height: 25px;width: 70px;margin-left: 10px">热门小区</div></a>
            <a><div style="float: left;background-color: black;color: #888c8e;height: 25px;width: 70px;margin-left: 10px">二手房</div></a>
            <a><div style="float: left;background-color: black;color: #888c8e;height: 25px;width: 70px;margin-left: 10px">新房</div></a>
            <a><div style="float: left;background-color: black;color: #8e8888;height: 25px;width: 100px;margin-left: 10px">小区二手房</div></a>
            <a><div style="float: left;background-color: black;color: #888c8e;height: 25px;width: 130px;margin-left: 10px">合作与友情链接</div></a>
          </div>
          <div class="lan2_2">
            江门二手房&nbsp&nbsp银川二手房&nbsp&nbsp吉安二手房&nbsp&nbsp淮安二手房&nbsp&nbsp
            郑州二手房&nbsp&nbsp漳州二手房&nbsp&nbsp南宁二手房&nbsp&nbsp哈尔滨二手房&nbsp&nbsp衢州二手房&nbsp&nbsp清远二手房&nbsp&nbsp
            广元二手房&nbsp&nbsp徐州二手房&nbsp&nbsp三亚二手房&nbsp&nbsp呼和浩特二手房&nbsp&nbsp襄阳二手房&nbsp&nbsp张家口二手房&nbsp&nbsp
            赣州二手房&nbsp&nbsp威海二手房&nbsp&nbsp珠海二手房&nbsp&nbsp长春二手房&nbsp&nbsp鄂州二手房&nbsp&nbsp南京二手房&nbsp&nbsp
            上海二手房&nbsp&nbsp长沙二手房&nbsp&nbsp上饶二手房&nbsp&nbsp绍兴二手房&nbsp&nbsp南充二手房&nbsp&nbsp西安二手房&nbsp&nbsp信阳二手房&nbsp&nbsp
            吉林二手房&nbsp&nbsp兰州二手房&nbsp&nbsp太原二手房&nbsp&nbsp周口二手房&nbsp&nbsp义乌二手房&nbsp&nbsp
            济南二手房&nbsp&nbsp无锡二手房&nbsp&nbsp南昌二手房&nbsp&nbsp凉山二手房&nbsp&nbsp广州二手房&nbsp&nbsp沈阳二手房
          </div>
        </div>
        <div class="lan3">
          <div style="float: left;height: 25px;color: #888c8e;font-size: 12px;width: 100%">贝壳找房（北京）科技有限公司 | 网络经营许可证 京ICP备16057509号 | © Copyright©2010-2021 贝壳找房版权所有 | 营业执照</div>
          <div style="float: left;height: 25px;color: #888c8e;font-size: 12px;width: 100%">违法和不良信息举报电话：010-86440676 违法和不良信息举报邮箱：jubaoyouxiang@lianjia.com</div>
          <div style="float: left;height: 25px;color: #888c8e;font-size: 12px;width: 100%">京公网安备 11010802024019号 网上有害信息举报专区</div>
        </div>
      </div>
    </div>
    <el-backtop>
      <div style="font-size: 14px">顶部</div>
    </el-backtop>
  </div>

</template>

<script>
   /* export default {
        name: "HomePage"
    }*/
   import axios from 'axios';
   export default {
     name: "HomePage",
     data() {

       return {
         imagesbox:[
           {id:0,View:require("../assets/img/logo1.jpg")},
           {id:1,View:require("../assets/img/logo2.jpg")},
           {id:2,View:require("../assets/img/logo3.jpg")},
         ],
         imagesboxl:[
           {idl:0,View:require("../assets/img/logo4.png"),chotry:"美国·达拉斯",hosename:"美国-达拉斯-学府别墅",type:"3室/4室 192~213m²"},
           {idl:1,View:require("../assets/img/logo5.png"),chotry:"英国·曼彻斯特",hosename:"凡雅都市",type:"1室/2室 51~76²"},
           {idl:2,View:require("../assets/img/logo6.png"),chotry:"泰国·普吉岛",hosename:"普吉岛高级别墅",type:"1~3室 45~255m²"},
           {idl:3,View:require("../assets/img/logo7.png"),chotry:"美国·奇诺岗",hosename:"洛杉矶-东谷-Prado",type:"2-4室 100~300m²"},

         ],

           user:{
            userName:'',
             email:'',
             password:'',
           },

         restaurants: [],
         state: '',
         timeout: null,
         currentDate: 1
       };
     },
     methods: {
       loadAll() {
         return [
           {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
           {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
           {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
           {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
           {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"}
         ];
       },

       login: function () {
         axios.post("http://10.12.154.50:7000/house-user/user/login", this.user).then(res => {
           if (res.data.code == 200) {
             alert(res.data.message)
             //将返回的token设置的前端的cookie中
             this.$cookie.set("token", res.data.data);
             //设置完成跳转首页
             this.$router.push("/")
           }
           else{
             alert(res.data.message)
           }
         })
       },
       registe: function () {
         axios.post("http://10.12.154.50:7000/house-user/user/registry", this.user).then(res => {
           if (res.data.code == 200) {
             alert(res.data.message)
             //将返回的token设置的前端的cookie中
             this.$cookie.set("token", res.data.data);
             //设置完成跳转首页
           }
           else {
             alert(res.data.message)
           }
         })
       },
       querySearchAsync(queryString, cb) {
         var restaurants = this.restaurants;
         var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

         clearTimeout(this.timeout);
         this.timeout = setTimeout(() => {
           cb(results);
         }, 3000 * Math.random());
       },
       createStateFilter(queryString) {
         return (state) => {
           return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
         };
       },
       handleSelect(item) {
         console.log(item);
       },
       handleAvatarSuccess(res, file) {
         this.imageUrl = URL.createObjectURL(file.raw);
       },
       beforeAvatarUpload(file) {
         const isJPG = file.type === 'image/jpeg';
         const isLt2M = file.size / 1024 / 1024 < 2;

         if (!isJPG) {
           this.$message.error('上传头像图片只能是 JPG 格式!');
         }
         if (!isLt2M) {
           this.$message.error('上传头像图片大小不能超过 2MB!');
         }
         return isJPG && isLt2M;
       }
     },
     mounted() {
       this.restaurants = this.loadAll();
     },
   };
</script>

<style scoped>
  .card{
    float: left;
    height: 300px;
    width: 1310px;
    /*border: red 1px solid;*/
  }
  .max{
    width: 100%;
    height: 100%;
   /* border: red 1px solid;*/
    margin-top: -50px;
  }
  .head{
    background-image: url("../assets/img/bannerV2.jpg");
    background-size: 100%;
    width: 100%;
    height: 500px;

  }
  .border{

    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
    width: 1000px;
   /* border: red 1px solid;*/
  }
  .first{
    height: 30px;
    width: 200px;
    float: right;
    margin-top: 40px;
    margin-right: 30px;
    font-size: 12px;
    color: white;
  }
  .second{
    height: 50px;
    width: 1000px;
    float: right;
   /* border: red 1px solid;*/
  }
  .sfirst{
    background-image: url("../assets/img/logo.png");
    background-size: 100%;
    float: left;
    height: 50px;
    width: 100px;
  }
  .ssecond{
    margin-top: 13px;
    height: 30px;
    width: 630px;
    float: right;
    font-size: 17px;
    color: white;
  }
  .third{
    float: right;
    margin-top: 30px;
    width: 1000px;
    height: 100px;
  /*  border: red 1px solid;*/
  }
  .third1{
    background-image: url("../assets/img/banner-text.png");
    background-size: 100%;
    height: 60px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .third2{
    margin-top: 10px;
    font-size: 18px;
    color: white;
    margin-left: auto;
    margin-right: auto;
  }
  .four{
    float: right;
    margin-top: 30px;
    width: 800px;
    height: 100px;
  /*  border: red 1px solid;*/
    margin-right: 100px;
  }
  .four3{
    height: 40px;
    width: 900px;
  }
  .four1{
    float: left;
    color: white;
  }
  .four2{
    float: left;
    width: 527px;
    height: 40px;
  /*  border: red 1px solid;*/
  }
  .four4{
    float: right;
    margin-right: 173px;

  }
  .size{
    float: left;
    color: white;
    font-size: 10px;
    margin-left: 200px;
    margin-top: 77px;

  }
  .zhong{
    background-image: url("../assets/img/bgapp.png");
    background-size: 100%;
    height: 530px;
    width: 100%;
  }
  .three{
    width: 100%;
    height: 360px;
  }
  .nei{
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
    width: 1200px;
  /*  border: red 1px solid;*/
  }
  .head1{
    float: left;
    height: 50px;
    width: 1000px;
   /* border: red 1px solid;*/

  }
  .size1{
    float: left;
    height: 50px;
    width: 140px;
    /*border: blue 1px solid;*/
    font-size: 35px;
  }
  .size2{
    float: left;
    height: 50px;
    width: 200px;
  /*  border: blue 1px solid;*/
    font-size: 35px;
  }
  .size3{
    float: left;

    height: 25px;
    width: 368px;
  /*  border: blue 1px solid;*/

  }
  .size4{
    float: right;

    height: 25px;
    width: 112px;
   /* border: blue 1px solid;*/

  }


  .bottom {
    margin-top: 13px;
    line-height: 12px;
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
  .five{
    background-image: url("../assets/img/backgrondimg.jpg");
    background-size: 100%;
    height: 240px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .five1{
    float: right;
    height: 180px;
    width: 100%;
   /* border: red 1px solid;*/
    margin-top: 50px;
  }
  .five_left{
    height: 120px;
    width: 550px;
    float: left;
    margin-left: 100px;
  /*  border: blue 1px solid;*/
  }
  .five_right{
    height: 120px;
    width: 550px;
    float: left;
    margin-left: 100px;
   /* border: blue 1px solid;*/

  }
  .bottom1{
    background-image: url("../assets/img/footer-bg.jpg");
    background-size: 131%;
    height: 430px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .kuang{
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
    width: 1200px;
  /*  border: red 1px solid;*/
  }
  .lan1{
    height: 90px;
    border-bottom: 1px solid #393939;
    line-height: 75px;
    margin: 0;
  }
  .lan2{

    height: 200px;
    width: 100%;
    border-bottom: 1px solid #393939;

  }
  .lan2_1{
    margin-top: 20px;
    height: 40px;
    width: 1000px;
    float: left;

  }
  .lan2_2{
    height: 150px;
    width: 80%;
    color: #888c8e;

  }
  .lan3{
    margin-top: 30px;
    height: 100px;
    width: 100%;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
