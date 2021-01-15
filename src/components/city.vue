<template>
  <div class="vessel">
    <div class="firstVessel">
      <a href="http://10.12.154.48:8080/#/" style="text-decoration: none;color: white"> <div class="rightImge"></div></a>
      <div style="margin-top: 22px;float: left;margin-left: 100px;width: 700px;">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
         <!-- <el-button type="success">搜索</el-button>-->
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="secondVessel">
      <div style="float: left;font-size: 15px;height: 30px;width: 100px;margin-top: 5px"><strong>热门城市</strong></div>
      <div style="float: left;font-size: 15px;height: 30px;width: 80px;margin-top: 5px"><strong><a href="" style="text-decoration: none;color: black">西安</a></strong></div>
      <div style="float: left;font-size: 15px;height: 30px;width: 80px;margin-top: 5px"><strong><a href="" style="text-decoration: none;color: black">北京</a></strong></div>
      <div style="float: left;font-size: 15px;height: 30px;width: 80px;margin-top: 5px"><strong><a href="" style="text-decoration: none;color: black">上海</a></strong></div>
    </div>
    <div class="thirdlyVessel">
      <div style="float: left;font-size: 15px;height: 30px;width: 100px;margin-top:15px"><strong>城市选择</strong></div>
      <div class="change1">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="省份"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="change1">

        <el-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearchAsync1"
          placeholder="城市"
          @select="handleSelect1"
        ></el-autocomplete>
      </div>
    </div>
    <div class="fourVessel">
      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
      <div class="headly">
        <div style="margin-top: 20px;" ><strong>A</strong></div>
      </div>
      <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>安徽</strong></div>
      <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
        安庆 &nbsp&nbsp&nbsp&nbsp滁州&nbsp&nbsp&nbsp&nbsp 合肥 &nbsp&nbsp&nbsp&nbsp马鞍山&nbsp&nbsp&nbsp&nbsp 芜湖
      </div>
      </div>
      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
      <div class="headly">
        <div style="margin-top: 20px;" ><strong>B</strong></div>
      </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>北京</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          北京
        </div>
      </div>
        <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
      <div class="headly">
        <div style="margin-top: 20px;" ><strong>C</strong></div>
      </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>重庆</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          重庆
        </div>
      </div>
      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
      <div class="headly">
        <div style="margin-top: 20px;" ><strong>F</strong></div>
      </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>福建</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          福州 &nbsp&nbsp&nbsp&nbsp 泉州 &nbsp&nbsp&nbsp&nbsp 厦门 &nbsp&nbsp&nbsp&nbsp 漳州
        </div>
      </div>


      <!--多行城市-->
      <div style="width: 100%;height: 240px;border-bottom: #888c8e 1px solid;">
        <div class="headly" style="height: 240px">
          <div style="margin-top: 110px;" ><strong>G</strong></div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>广东</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          东莞 &nbsp&nbsp&nbsp&nbsp 佛山 &nbsp&nbsp&nbsp&nbsp 广州 &nbsp&nbsp&nbsp&nbsp 惠州 &nbsp&nbsp&nbsp&nbsp 江门 &nbsp&nbsp&nbsp&nbsp 清远 &nbsp&nbsp&nbsp&nbsp 深圳 &nbsp&nbsp&nbsp&nbsp 珠海 &nbsp&nbsp&nbsp&nbsp 湛江 &nbsp&nbsp&nbsp&nbsp 中山
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>广西</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          北海&nbsp&nbsp&nbsp&nbsp 防城港&nbsp&nbsp&nbsp&nbsp 桂林&nbsp&nbsp&nbsp&nbsp 柳州&nbsp&nbsp&nbsp&nbsp 南宁
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>甘肃</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
         兰州
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>贵州</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          贵阳
        </div>
        </div>
      </div>
      <div style="width: 100%;height: 360px;border-bottom: #888c8e 1px solid;">
        <div class="headly" style="height: 360px">
          <div style="margin-top: 170px;" ><strong>H</strong></div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>河北</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          保定&nbsp&nbsp&nbsp&nbsp 廊坊&nbsp&nbsp&nbsp&nbsp 秦皇岛&nbsp&nbsp&nbsp&nbsp 石家庄&nbsp&nbsp&nbsp&nbsp 唐山&nbsp&nbsp&nbsp&nbsp 张家口
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>海南</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          保亭&nbsp&nbsp&nbsp&nbsp 澄迈&nbsp&nbsp&nbsp&nbsp 儋州&nbsp&nbsp&nbsp&nbsp 海口&nbsp&nbsp&nbsp&nbsp 临高&nbsp&nbsp&nbsp&nbsp 乐东&nbsp&nbsp&nbsp&nbsp 陵水&nbsp&nbsp&nbsp&nbsp 琼海&nbsp&nbsp&nbsp&nbsp 三亚&nbsp&nbsp&nbsp&nbsp 五指山&nbsp&nbsp&nbsp&nbsp 文昌&nbsp&nbsp&nbsp&nbsp 万宁
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>湖南</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          长沙&nbsp&nbsp&nbsp&nbsp 常德&nbsp&nbsp&nbsp&nbsp 岳阳&nbsp&nbsp&nbsp&nbsp 株洲
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>河南</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          开封&nbsp&nbsp&nbsp&nbsp 洛阳&nbsp&nbsp&nbsp&nbsp 三门峡&nbsp&nbsp&nbsp&nbsp 新乡&nbsp&nbsp&nbsp&nbsp 许昌&nbsp&nbsp&nbsp&nbsp 信阳&nbsp&nbsp&nbsp&nbsp 郑州&nbsp&nbsp&nbsp&nbsp 周口&nbsp&nbsp&nbsp&nbsp 驻马店
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>湖北</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          鄂州&nbsp&nbsp&nbsp&nbsp 黄石&nbsp&nbsp&nbsp&nbsp 武汉&nbsp&nbsp&nbsp&nbsp 襄阳&nbsp&nbsp&nbsp&nbsp 宜昌
        </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>黑龙江</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 30px;font-size: 18px">
          哈尔滨
        </div>
        </div>
      </div>

      <div style="width: 100%;height: 180px;border-bottom: #888c8e 1px solid;">
        <div class="headly" style="height: 180px">
          <div style="margin-top: 80px;" ><strong>J</strong></div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>江西</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            赣州&nbsp&nbsp&nbsp&nbsp 九江&nbsp&nbsp&nbsp&nbsp 吉安&nbsp&nbsp&nbsp&nbsp 南昌&nbsp&nbsp&nbsp&nbsp 上饶
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>江苏</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            常州&nbsp&nbsp&nbsp&nbsp 海门&nbsp&nbsp&nbsp&nbsp 淮安&nbsp&nbsp&nbsp&nbsp 江阴&nbsp&nbsp&nbsp&nbsp 昆山&nbsp&nbsp&nbsp&nbsp 南京&nbsp&nbsp&nbsp&nbsp 南通&nbsp&nbsp&nbsp&nbsp 苏州&nbsp&nbsp&nbsp&nbsp 无锡&nbsp&nbsp&nbsp&nbsp 徐州&nbsp&nbsp&nbsp&nbsp 盐城&nbsp&nbsp&nbsp&nbsp 镇江
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>吉林</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            长春&nbsp&nbsp&nbsp&nbsp吉林
          </div>
        </div>
      </div>

      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
        <div class="headly">
          <div style="margin-top: 20px;" ><strong>F</strong></div>
        </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>辽宁</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          大连&nbsp&nbsp&nbsp&nbsp 丹东&nbsp&nbsp&nbsp&nbsp 沈阳
        </div>
      </div>

      <div style="width: 100%;height: 120px;border-bottom: #888c8e 1px solid;">
        <div class="headly" style="height: 120px">
          <div style="margin-top: 50px;" ><strong>N</strong></div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>内蒙古</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 30px;font-size: 18px">
            包头&nbsp&nbsp&nbsp&nbsp 赤峰&nbsp&nbsp&nbsp&nbsp 呼和浩特
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>宁夏</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            银川
          </div>
        </div>
      </div>

      <div style="width: 100%;height: 300px;border-bottom: #888c8e 1px solid;">
        <div class="headly" style="height: 300px">
          <div style="margin-top: 140px;" ><strong>S</strong></div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>山东</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            菏泽&nbsp&nbsp&nbsp&nbsp 济南&nbsp&nbsp&nbsp&nbsp 济宁&nbsp&nbsp&nbsp&nbsp 临沂&nbsp&nbsp&nbsp&nbsp 青岛&nbsp&nbsp&nbsp&nbsp 泰安&nbsp&nbsp&nbsp&nbsp 潍坊&nbsp&nbsp&nbsp&nbsp 威海&nbsp&nbsp&nbsp&nbsp 烟台&nbsp&nbsp&nbsp&nbsp 淄博
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>四川</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            巴中&nbsp&nbsp&nbsp&nbsp 成都&nbsp&nbsp&nbsp&nbsp 德阳&nbsp&nbsp&nbsp&nbsp 达州&nbsp&nbsp&nbsp&nbsp 广元&nbsp&nbsp&nbsp&nbsp 乐山&nbsp&nbsp&nbsp&nbsp 凉山&nbsp&nbsp&nbsp&nbsp 绵阳&nbsp&nbsp&nbsp&nbsp 眉山&nbsp&nbsp&nbsp&nbsp 南充&nbsp&nbsp&nbsp&nbsp 遂宁&nbsp&nbsp&nbsp&nbsp 宜宾&nbsp&nbsp&nbsp&nbsp 雅安
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>陕西</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            宝鸡&nbsp&nbsp&nbsp&nbsp 汉中&nbsp&nbsp&nbsp&nbsp 西安&nbsp&nbsp&nbsp&nbsp 咸阳
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>山西</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            晋中&nbsp&nbsp&nbsp&nbsp
            太原
          </div>
        </div>
        <div style="height: 60px;width: 1145px;float: left;">
          <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>上海</strong></div>
          <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
            上海
          </div>
        </div>
      </div>

      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
        <div class="headly">
          <div style="margin-top: 20px;" ><strong>T</strong></div>
        </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>天津</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          天津
        </div>
      </div>

      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
        <div class="headly">
          <div style="margin-top: 20px;" ><strong>X</strong></div>
        </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>新疆</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          乌鲁木齐
        </div>
      </div>

      <div style="width: 100%;height: 60px;border-bottom: #888c8e 1px solid;">
        <div class="headly">
          <div style="margin-top: 20px;" ><strong>Y</strong></div>
        </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>云南</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          大理&nbsp&nbsp&nbsp&nbsp 昆明&nbsp&nbsp&nbsp&nbsp 西双版纳
        </div>
      </div>

      <div style="width: 100%;height: 60px;">
        <div class="headly" style="height: 59px">
          <div style="margin-top: 20px;" ><strong>Z</strong></div>
        </div>
        <div style="float: left;margin-top: 20px;margin-left: 50px ;font-size: 18px"><strong>浙江</strong></div>
        <div style="float: left;margin-top: 20px;margin-left: 50px;font-size: 18px">
          杭州&nbsp&nbsp&nbsp&nbsp 湖州&nbsp&nbsp&nbsp&nbsp 嘉兴&nbsp&nbsp&nbsp&nbsp 金华&nbsp&nbsp&nbsp&nbsp 宁波&nbsp&nbsp&nbsp&nbsp 衢州&nbsp&nbsp&nbsp&nbsp 绍兴&nbsp&nbsp&nbsp&nbsp 台州&nbsp&nbsp&nbsp&nbsp 温州&nbsp&nbsp&nbsp&nbsp 义乌
        </div>
      </div>

    </div>
    <div style="height: 50px;width: 100%"></div>
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
            <a><div style="float: left;background-color: black;color: #888c8e;height: 25px;width: 100px;margin-left: 10px">小区二手房</div></a>
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
    <el-backtop><div style="font-size: 14px">顶部</div> </el-backtop>
  </div>

</template>
<script>
  import axios from "axios"
  export default {
    data() {
      return {
        options: [{
          id: '',
          province: ''
        }],
        state1: '',
        restaurants1:[],
        restaurants:[],
        provinceId:'',
        state: '',
        id: '',
        ids: '',
        input3: ''
      }
    },
    methods:{
      findAll:function () {
        axios.get("http://10.12.154.186:7000/house-city/city/findByPid?pid="+this.provinceId).then(res=>{

          if (res.data.code==200){
            this.restaurants1=res.data.data;
            this.state1 = this.restaurants1[0].address;
          }
        })
      },

      addressAll(){
        axios.get("http://10.12.154.186:7000/house-province/province/provincefindAll").then(res => {
          if (res.data.code == 200) {
            this.restaurants=res.data.data;

          }
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
        console.log(results)
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      }, createStateFilter(queryString) {

        return (state) => {
          return state.address;
        };
      },
      querySearchAsync1(queryString1, cb) {
        var restaurants1 = this.restaurants1;
        var results = queryString1 ? restaurants1.filter(this.createStateFilter1(queryString1)) : restaurants1;
        console.log(results)

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      }, createStateFilter1(queryString1) {
        return (state1) => {
          return state1.address;
        };
      },
      handleSelect(item) {
        console.log(item);
        this.provinceId=item.id;
        this.findAll();

        // alert(item.id);
      },
      handleSelect1(item) {
        console.log(item);
      }

      /*  findByPid:function () {
          axios.get("http://10.12.154.50:7000/house-city/city/findByPid/"+this.options.id).then(res=>{
            if (res.data.code==200){
                this.options=res.data.data;
            }
          })

        }*/
    },
    mounted() {
      this.addressAll();
      /* this.findByPid();*/
    }
  }
</script>

<style>
.vessel{
  width: 100%;
  height: 100%;
   /*border: red 1px solid;*/
  margin-top: -50px;
}
  .firstVessel{
    width: 80%;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
  /*  border: red 1px solid;*/
  }
  .rightImge{
    background-image: url("../assets/img/mylogo.png");
    background-size: 100%;
    width: 154px;
    height: 30px;
    margin-top: 27px;
    float: left;
  }
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
  .secondVessel{
    width: 80%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
  /*  border: red 1px solid;*/
    margin-top: 20px;
  }
  .thirdlyVessel{
    width: 80%;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    /*border: red 1px solid;*/
    margin-top: 20px;
  }
  .change1{
    float: left;
    margin-left: 20px;
    margin-top: 5px;
  }
  .fourVessel{
    width: 80%;
    height: 1750px;
    margin-left: auto;
    margin-right: auto;
    border: #888c8e 1px solid;
    margin-top: 20px;
  }
  .headly{
    float: left;
    width: 55px;
    height: 60px;
    background-color: #f8f8f9;
    font-size: 18px;
    color: #afb3bb;


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


</style>
