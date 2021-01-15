<template>
  <div class="index_vessel">
    <div class="head_size">共0套 关注房源</div>

    <!--aname-->
    <div class="house" v-for="o in fovor" >
      <div style="width: 200px;float: left"><img :src="o.pic1" class="image"></div>
      <div style="width: 450px;float: left;margin-left: 20px;height: 150px">
        <div style="height: 30px;float: left;font-size: 20px;color: #009de8">{{o.aname}}</div>
        <div style="width: 450px;float: left;height: 30px;margin-top:20px">
          <div style="height: 30px;float: left;"> {{o.ahouse}}</div>
          <div style="height: 30px;float:left;margin-left: 20px"> {{o.houseType}}&nbsp&nbsp&nbsp&nbsp|</div>
          <div style="height: 30px;float:left;margin-left: 20px"> {{o.houseArae}}平米&nbsp&nbsp&nbsp&nbsp|</div>
          <div style="height: 30px;float:left;margin-left: 20px"> {{o.orientation}}</div>
        </div>
        <div style= "width: 450px;float: left;height: 30px;margin-top:20px">
          <div style="height: 30px;float: left;color: #bbb">
            {{o.rentTime}} / {{o.floor}}层
          </div>
        </div>
      </div>
      <div style="float: left;height: 150px;width: 70px">
        <div style="float: left;height: 40px;margin-top: 40px;color: #E4393C;font-size: 23px;width: 68px">{{o.price}}</div>
        <div style="height: 30px;width: 68px;font-size: 12px">元/每月</div>
      </div>
    </div>
    <!--<div style="height: 20px;width: 750px;float: left">
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    </div>-->
</div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "favorHouse",
      data(){
          return{
            fovor:[
             /* {idl:0,View:require("../assets/img/logo4.png"),chotry:"美国·达拉斯",hosename:"美国-达拉斯-学府别墅",type:"3室/4室 192~213m²"},*/
            ],
            user:{
              id:'',
              email:'',
              userName: '',
              image:'',
            }

          }
      },
      methods:{

        finduser:function () {

          axios.get("http://10.12.154.50:7000/house-user/user/getUser?token="+this.$cookie.get("token")).then(res=>{

            if (res.data.code==200){

              this.user.id=res.data.data.id;
             /* alert(this.user.id)*/
              this.$cookie.set("uid",this.user.id)
            }
          })

        },
        findHouse: function () {
          //alert(this.user.id)
          var uid=this.$cookie.get("uid");
          //alert(uid)
          axios.get("http://10.12.154.50:7000/house-order/order/findByUserId?uid="+uid).then(res => {
            if (res.data.code == 200) {
              this.fovor=res.data.data
            }
            else{
              alert(res.data.message)
            }
          })
        },
      },


      mounted() {
          this.finduser();
          this.findHouse();

      },

    }
</script>

<style scoped>
  .index_vessel{
    width: 800px;
    float: left;
    margin-left: 20px;
    background-color: white;
  }
  .head_size{
    font-size: 22px;
    font-weight: bold;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .house{
    height: 170px;
    width: 750px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;

  }
  .image {
    height: 150px;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }

</style>
