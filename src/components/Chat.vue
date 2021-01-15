<template>
  <div style="margin-top: 0px">
    <el-row>
      <el-col :span="16">
        <div style="width: 160px;height: 570px;background-color: #FFFFFF;float: left">
          <div style="width: 160px;height: 60px;background-color: #409EFF;line-height: 60px;color: #FFFFFF">
            <el-button type="primary" @click="connect">用户连接</el-button><br/>
            <el-input v-model="config.name" placeholder="请输入您的昵称"></el-input>
          </div>

          <!--左侧好友列表-->
          <div style="width: 160px;height: 510px" id="leftDiv">
            <p v-for="(item,i) in leftConfig.list">
              <span style="font-size: 15px" @click="leftMet(i)">
                {{ item.name }}
              </span>
            </p>
          </div>

        </div>
        <!-- 聊天头部信息 -->
        <div style="height: 60px;width: 712px;background-color: #409EFF;line-height: 60px;color: #FFFFFF;">
          <JwChat-item :config="HeaderName" @click="bindClick"/>
        </div>
        <!-- 聊天框 -->
        <div style="float: left">
          <JwChat
            :taleList="taleList"
            scrollType="norell"
            :config="config"
            @enter="bindEnter"
            v-model="inputMsg"
            :toolConfig="tool"
          >
            <!-- 自定义插件 -->
            <div slot="tools">插槽</div>
          </JwChat>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      /*token值*/
      token:'',
      /*输入框的内容*/
      inputMsg: '',
      /*当前聊天记录的内容*/
      taleList: [],
      /*插件列表*/
      tool: {
        show: ['file', 'history', 'img'],
        callback: this.toolEvent
      },
      /*好友列表及好友聊天记录*/
      leftConfig: {
        listTip: '当前在线',
        // notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
        list: [
          {
            name: 'JwChat',
            img: "../image/three.jpeg",
            tableList: [
              {
                "date": new Date(),
                "text": {"text": "你好我是JwChat"},
                "mine": true,
                "name": "JwChat",
                "img": "../image/three.jpeg"
              },
              {
                "date": "2020/04/25 21:19:07",
                "text": {"text": "起床不"},
                "mine": true,
                "name": "JwChat",
                "img": "../image/one.jpeg"
                ,
                "uid1": 1,
                "uid2": 2
              },
              {
                "date": "2020/04/25 21:19:07",
                "text": {"text": "<img data-src='../image/three.jpeg'/>"},
                "mine": false,
                "name": "只盼流星不盼雨",
                "img": "../image/two.jpeg"
              },
              {
                "date": "2020/04/16 21:19:07",
                "text": {"text": "好的"},
                "mine": false,
                "name": "只盼流星不盼雨",
                "img": "../image/three.jpeg"
              },
            ]
          },
          {
            name: '留恋人间不羡仙',
            "img": "../image/one.jpeg",
            tableList: [{
              "date": new Date(),
              "text": {"text": "你好我是留恋人间不羡仙"},
              "mine": false,
              "name": "只盼流星不盼雨",
              "img": "../image/three.jpeg"
            }]
          },
          {
            name: '只盼流星不盼雨',
            "img": "../image/two.jpeg",
            tableList: [{
              "date": new Date(),
              "text": {"text": "只盼流星不盼雨"},
              "mine": false,
              "name": "只盼流星不盼雨",
              "img": "../image/three.jpeg"
            }]
          },{
            name: '李王智',
            "img": "https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/cd19d1ca-7598-4342-a679-a90aa719fc5b.jpg.480x640.jpg",
            tableList: [{
              "date": new Date(),
              "text": {"text": "李王智"},
              "mine": false,
              "name": "李王智",
              "img": "https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/cd19d1ca-7598-4342-a679-a90aa719fc5b.jpg.480x640.jpg"
            }]
          },
          {
            name: '高升',
            "img": "../image/two.jpeg",
            tableList: [{
              "date": new Date(),
              "text": {"text": "高升"},
              "mine": false,
              "name": "只盼流星不盼雨",
              "img": "../image/three.jpeg"
            }]
          }
        ]
      },
      //登录人员
      config: {
        img: '',
        name: '',
        dept: '',
        callback: this.headerEvent
      },
      //聊天头部信息
      HeaderName:{
        img: '',
        name: '',
        dept: '',
        callback: this.headerEvent
      }
    }
  },
  methods: {
    /*向后台发送*/
    sendMsg(msg){
      if (this.inputMsg!=null&&this.inputMsg!=""){
        axios.get("http://localhost:7000/house-chat/sendMessage?message="+msg+"&sender="+this.config.name+"&addressee="+this.HeaderName.name).then(res=>{
          alert(res.data);
        })
      }
    },
    /*发送信息*/
    bindEnter() {
      const msg = this.inputMsg;
      if (!msg) return;
      const msgObj = {
        "date": new Date(),
        "text": {"text": msg},
        "mine": true,
        "name": this.config.name,
        "img": "../image/three.jpeg"
      }
      this.taleList.push(msgObj);
      this.sendMsg(msg);
    },
    /*工具栏*/
    toolEvent(type) {
      console.log('tools', type)
    },
    headerEvent(type) {
      console.log('header', type)
    },
    /*左侧好友点击改变发送信息人*/
    leftMet(i) {
      this.HeaderName.name = this.leftConfig.list[i].name;
      this.taleList=this.leftConfig.list[i].tableList;
      // alert(this.taleList)
      // alert(this.leftConfig.list[i].tableList)
    },
    bindClick(play) {
      console.log('user', play)
    },
    /*连接信息*/
    connect:function (){
      var _this=this;
      alert(_this.config.name);
      if (_this.config.name!=''){
        this.ws=new WebSocket("ws://localhost:8016/socketServer/"+_this.config.name);
        this.ws.onmessage=function (evt){
          var parse = JSON.parse(evt.data);
          console.log(parse);
            const msgObj = {
              "date": new Date(),
              "text": {"text": parse.message},
              "mine": false,
              "name": parse.sender,
              "img": "../image/three.jpeg"
            };
          for (let i = 0; i < _this.leftConfig.list.length; i++) {
            if (parse.sender==_this.leftConfig.list[i].name){
              _this.leftConfig.list[i].tableList.push(msgObj);
            }
          }

        };
        this.ws.onclose=function (evt){
          _this.$message({
            type:'danger',
            message:'连接中断'
          });
        };
        this.ws.onopen=function (evt){
          _this.$message({
            type:'success',
            message:'连接成功'
          });
        };
      }else{
        _this.$message({
          type:'default',
          message:'请登录!!!'
        });
      }
    },
    getUser:function () {

      //alert(this.$cookie.get("token"))
      axios.get("http://localhost:7000/house-user/user/getUser?token="+this.$cookie.get("token")).then(res=>{
        console.log(res);
        this.config.name=res.data.data.userName;
        //alert(res.data.data.userName)
      })
    }
  },
  mounted() {
    this.taleList=this.leftConfig.list[0].tableList;
    this.HeaderName.name=this.leftConfig.list[0].name;
    this.getUser();
  }
}
</script>


<style scoped>

</style>
