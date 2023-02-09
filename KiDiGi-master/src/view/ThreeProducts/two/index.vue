<template>
  <div id="JobChance">
     <div class="fgx">.</div>
    <!-- 视频 -->
    <div id="bigData" class="container-fuild">
      <img src="./img/lbxq2t.jpg" alt="" style="width:100%;">
    </div>

    <!-- 切换显示 -->
    <div id="qiehuan">
      <div class="taohe">
        <!--3个按钮-->
        <button
          :class="index == number ? 'btn1' : 'btn'"
          @click="tab(index)"
          v-for="(item, index) in dataList"
          :key="item.flag"
        >
          {{ item.option }}
        </button>
      </div>
      <!-- <div class="an"> -->
      <!--3个div-->
      <div id="content1" v-show="number == 0">
        <!-- 1 -->
        <div class="JobChance-container" style="background: url() no-repeat">
          <img src="./img/lbxq2t (2).png" alt="" style="width: 100%" />
                    <!-- 按钮控制拼接 -->
          <div id="JobChance">
            <div class="tou">
              <!-- <img src="./img/ces1.png" alt=""> -->
              <h1>Gaphic</h1>
            </div>
            <div class="ti">
              <div class="anniuhe">
                <button 
                @click="show(1)"
                >
                  主机A
                  <div class="xst"></div>
                <div class="xiaot">
                  <span>屏幕</span><span>手机充</span><span>底座</span>
                </div>
                </button>
              </div>
              <div class="anniuhe">
                <button
                @click="show(2)"
                
                >
                  配件B
                  <div class="xst"></div>
                
                <div class="xiaot"><span>平板充</span><span>电脑充 </span></div>
                </button>
              </div>
              <div class="anniuhe">
                <button
                @click="show(3)"
               
                >
                  配件B
                  <div class="xst"></div>
                
                <div class="xiaot"><span>大型储物</span></div>
                </button>
              </div>
              
            </div>
            <div class="jiao">
                <img src="" alt="图片" />
                <span
                  >支持24个手机同时充电 <br />
                  type-c 5v/2.1v <br />
                  usb 5v/2.1v <br />
                  lithing-c 5v/2.1v</span
                >
              </div>
<!-- 图片区 -->
    <div class="tupq wow slideInRight">
          <div id="pj0 wow slideInRight">
            <img src="./img/ces1.png" alt="">
          </div>
          <div id="pj1 wow slideInRight" v-show="index===2 && isShow">
             <img src="./img/ces2.png" alt="">
          </div>
          <div id="pj2 wow slideInRight" v-show="index===3 && isShow">
             <img src="./img/ces3.png" alt="">
          </div>
    </div>

          </div>
          <!-- /按钮控制拼接 -->
        </div>
      </div>
    </div>
    <div id="content2" v-show="number == 1">
      <div class="JobChance-container" style="background: url() no-repeat">
        <img src="./img/lbxq1t.png" alt="" style="width: 100%" />
      </div>
    </div>
    <div id="content3" v-show="number == 2">
      <div class="JobChance-container">
        <div class="ddd">
          <div class="ddhez">
            <el-carousel
              height="674px"
              width="333px"
              indicator-position="outside"
              id="tupp"
              style="overflow: hidden"
            >
              <el-carousel-item :key="item" v-show="xqnumber == 0">
                <img src="./img/xql1.png" style="margin: 0 auto" alt="" />
              </el-carousel-item>
              <el-carousel-item :key="item" v-show="xqnumber == 0">
                <img src="./img/xql2.png" style="margin: 0 auto" alt="" />
              </el-carousel-item>
              <el-carousel-item :key="item" v-show="xqnumber == 0">
                <img src="./img/xql3.png" style="margin: 0 auto" alt="" />
              </el-carousel-item>

              <!-- 切换显示隐藏 -->
              <!-- 控制轮播的切换 -->
              <!-- 图片 -->

              <!-- 3D -->
              <div id="dd2" style="overflow: hidden" v-show="xqnumber == 1">
                <iframe
                  src="http://127.0.0.1:5501/src/view/ThreeProducts/two/untitled.90/untitled.90.html
                  "
                  style="
                    width: 674px;
                    height: 742px;
                    border: 0;
                    margin-left: 130px;
                    transform: scale(1, 1);
                    cursor: pointer;
                  "
                >
                </iframe>
              </div>
            </el-carousel>

            <!-- 按钮与图片 -->
            <div class="sanhe">
              <!-- SP-02 -->
              <div class="spsp">
                <div class="hezhez"></div>
                <span class="zfx">CT-19</span>
              </div>

              <div class="ta">
                <button
                  :class="index == number ? 'liang1' : 'liang'"
                  @click="xqieh(index)"
                  v-for="(item, index) in xqiehList"
                  :key="item.flag"
                >
                  <img :src="item.imgsrc" alt="" class="imimg" />
                  {{ item.xq }}
                </button>

                  <a href="https://seller.dhgate.com/#hp-lc-1"
                    ><button class="quan">BUY from Alibaba</button></a
                  >
                
              </div>

              <!-- O图 -->
              <div class="otu">
                <img src="./img/XQLQ.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="ddd2">
            <div class="dddx">
              <img src="./img/xql3x.png" alt="" />
              <img src="./img/xql2x.png" alt="" />
              <img src="./img/xql1x.png" alt="" />
            </div>
          </div>
          <!-- 3 -->
          <div class="ddd3">
            <p>Categories All Products, Charging Station,Power Solutions</p>
            <h1>EKO</h1>
            <h3>EKO 32 inches Digital Signage Charging Station</h3>
            <p>
              The EKO 32″ Digital Signage Charging Station is an innovative
              solution for charging your guest’s devices while they consume
              video marketing materials on the built-in 32” HD (1920 x 1080)
              Android Screen. It includes four Apple Lightning cables, one
              Micro-USB cables (old Android devices), and three Type-C cables to
              charge today’s newest phones. Made with durable, industrial-grade
              materials to protect from theft and wear.
            </p>

            <h3>关键词</h3>
            <h5>充电</h5>
            <h5>环保</h5>
            <h5>夜间照明</h5>
            <h5>可持续性</h5>
            <h5>广告</h5>
            <h5>好看的外</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import imgArr from "./img/lbqh1.png"
// import imgArr from "./img/lbqh3.png"

import { WOW } from "wowjs";
export default {
  name: "soho",
  data() {
    return {
      number: 0,
      dataList: [
        { option: "Features" },
        { option: "Teach Specs" },
        { option: "Purchase" },
      ],
      xqnumber: 0,
      xqiehList: [
        {
          imgsrc: require("./img/lbqh1.png"),
          xq: "Picture",
        },
        {
          imgsrc: require("./img/lbqh3.png"),
          xq: "3D",
        },
      ],
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();

window.addEventListener("scroll",()=>{
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
    let offsetTop = document.querySelector('.taohe ').offsetTop;
    if (scrollTop > 800) {
         document.querySelector('.taohe ').style.position="fixed";
         document.querySelector('.taohe ').style.zIndex=9000000;
         document.querySelector('.taohe ').style.top="0";
          document.querySelector('.taohe').style.width='100%';
           document.querySelector('.taohe ').style.backgroundColor='black';
           document.querySelector('.taohe ').style.padding='0px 100px 0px 100px'
            document.querySelector('.taohe ').style.margin='95px 0px';
    } else {
         document.querySelector('.taohe ').style.position="";
         document.querySelector('.taohe').style.top="";
         document.querySelector('.taohe').style.width='';
           document.querySelector('.taohe').style.backgroundColor='';
           document.querySelector('.taohe').style.padding='0px';
           document.querySelector('.taohe').style.margin='0px';
         
    }
})
window.addEventListener("scroll",()=>{
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
    let offsetTop = document.querySelector('.fgx ').offsetTop;
    if (scrollTop > 800) {
         document.querySelector('.fgx ').style.position="fixed";
         document.querySelector('.fgx ').style.zIndex=9000000;
         document.querySelector('.fgx ').style.top=" 0";
          document.querySelector('.fgx').style.width='100%';
           document.querySelector('.fgx ').style.backgroundColor='#495c69';
          //  document.querySelector('.fgx ').style.padding='0px 100px 0px 100px';
           document.querySelector('.fgx ').style.margin='90px 0px';
    } else {
         document.querySelector('.fgx ').style.position="";
         document.querySelector('.fgx').style.top="";
         document.querySelector('.fgx').style.width='';
           document.querySelector('.fgx').style.backgroundColor='';
          //  document.querySelector('.fgx').style.padding='0px';
           document.querySelector('.fgx').style.margin='0px';
         
    }
})
  },

  methods: {
    //定义切换方法
    tab(index) {
      this.number = index;
      // console.log("tab____:",index, this.number);
    },
    xqieh(index) {
      this.xqnumber = index;
      // console.log("xq____:",index, this.number);
    },
  },
};
</script>


<style scoped>
.fgx {
  width: 100%;
  height: 5px;
  background-color: #495c69;
}

/* 按钮控制拼接 */
#JobChance {
  background-color: #1e434c;
}
.tou h1 {
  margin-left: 150px;
  width: 200px;
  height: 200px;
  font-size: 150px;
  color: #f0f9f4;
}
.ti {
  margin-left: 150px;
  display: inline-block;
  background-color: #1e434c;
  width: 350px;
  height: 400px;
}
.ti button:hover {
  background-color: #ddede2;
  border-radius: 15px;
  background: linear-gradient(to right, #ef4d2c, #f27b36);
}
.anniuhe:hover {
  background: #222;
  /* border-image: radial-gradient(#de4632, #faae3e) 5 / 5px; */
  background: linear-gradient(to right, #de4632, #faae3e);
}
.xst {
  margin-left: 25px;
  margin-right: 18px;
  border-radius: 15px;
  width: 5px;
  height: 28px;
  display: inline-block;
  background-color: #1e434c;
}
.xiaot {
  width: 100px;
  /* height: 100px; */
  float: right;
  border: 0px;
  line-height: 18px;
}
.xiaot span {
  border: 0px;
  height: 12px;
  display: block;
  font-size: 1px;
}
.anniuhe button {
  padding: 6px 6px;
  text-align: center;
  font-size: 30px;
  border: 2px solid #fed71a;
  border-radius: 15px;
  background-color: #fed71a;
  /* border-image:linear-gradient(to right,#000718,#23b7cb) 1 10; */
}

.anniuhe {
  margin: 3px 0;
  background-color: #2e5f66;
  height: 50px;
  display: inline-block;
  border: 1px solid #2e5f66;
  border-radius: 18px;
}
.jiao {
  display: inline-block;
}
.jiao img {
  width: 100px;
  height: 100px;
  display: block;
  float: left;
}
.tupq{
  /* position: absolute; */
  width: 800px;
  display: inline-flex;
  box-shadow: 0px 60px 20px rgb(17 32 35 / 50%);
  transition: flex-wrap .3s;
}
.tupq div{
  
  /* width: 400px;
  height: 200px;
  background-color: red; */
}
.tupq img{
  /* width: 400px; */
  /* position: relative; */
  height: 400px;

  flex-wrap: 1;
}

/* #JobChance {
  background: #ffffff;
} */
#swiper {
  height: auto;
}
#swiper .banner-swiper {
  width: 100%;
  height: auto;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: auto;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  line-height: 80px;
}
/*按钮样式*/
/*未选中时*/
.btn {
  width: 380px;
  height: 32px;
  border: 0;
  color: #040000;
  /* margin: 0 1px; */
  border: 0;
  border-radius:0 ;
  font-weight: bold;
  background-color: #fed71a;
}

/*选中时*/
.btn1 {
  /* line-height: 28px; */
  /* margin-left: 160px; */
  width: 380px;
  height: 30px;
  border: 0;
  font-weight: bold;
  color: #ffffff;
  /* margin: 0 1px; */
  background-color: #fed71a;
}

.taohe button:hover{
  color: #ffffff;
  background-color: #fed71a;
}

#content1,
#content2,
#content3 {
  background-color: #e8eeef;
  height: 100%;
  font-size: 16px;
  line-height: 30px;
  border: 0;
}

.taohe {

  width: 100%;
  background-color: #fed71a;
  width: 100%;
  text-align: center;
}
.taohe :focus {
  outline: 0;
}
/* 3盒子 */
.ddd {
  display: flex;
  margin: 2px 5px;
}
.ddhez {
  width: 925px;
  height: 100%;
  background-color: #e8eeef;
}
.ddd2 {
  width: 462px;
  height: 100%;
  background-color: #e8eeef;
}
.ddd3 {
  width: 462px;
  height: 100%;
  background-color: #e8eeef;
}
/*按钮样式*/
/*未选中时*/
.liang {
 
  line-height: 30px;
  text-align: center;
  width: 200px;
  height: 30px;
  border: 0;
  color: #ffffff;
  background-color: #040000;
}


.liang:hover {
  background-color: #fed71a;
}
.liang1:focus {
  background-color: #040000;
}

.quan {
  width: 400px;
  color: #fff;
  background-color: #181818;
  line-height: 28px;
  border: 0;
  font-weight: bold;
}
.ddd p {
  padding-left: 25px;
}
.ddd a :hover {
  width: 400px;
  color: #181818;
  background-color: #fff;
}
.xiaoq {
  margin-left: 250px;
}

/* 2 */
/*滚动条整体宽度*/
.dddx::-webkit-scrollbar {
  width: 5px; /*宽对应滚动条的尺寸*/
}
/*轨道*/
.dddx::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/*滑块*/
.dddx::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #c1c1c1;
}

.dddx {
  height: 900px;
  overflow: auto;
}
.dddx img {
  margin: 0 auto;
  height: 540px;
  width: 100%;
  border: 0;
  margin-bottom: 8px;
}
.ddd3 h1 {
  padding-left: 25px;
  font-size: 36px;
  font-weight: bold;
}
.ddd3 h3 {
  padding-top: 30px;
  padding-left: 25px;
  font-size: 24px;
}
.ddd3 p {
  margin-top: 100px;
  font-size: 14px;
  font-weight: bold;
}
.ddd3 h5 {
  padding-left: 25px;
  font-weight: bold;
}
/* 按钮样式 */
.sanhe {
  display: flex;
}

.spsp {
  width: 260px;
  margin-left: 30px;
  display:inline-block
}
.hezhez {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #181818;
  display: inline-block;
}
.zfx {
  top: 15px;
  /* right: -5px; */
  position: relative;
  color: #fed71a;
  font-size:45px;
  font-weight: bold;
}
.tad {
  display: inline-block;
}
.ta {
  border: 0;
  display: inline-block;
  margin-left: 50px;
  /* margin: 0 auto; */
}
.imimg {
  display: inline-block;
  text-align: center;
}
.otu {
  display: inline-block;
 margin-right: 80px;

}

/* teach */
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>
