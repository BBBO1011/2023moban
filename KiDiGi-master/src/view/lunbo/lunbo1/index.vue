<template>
  <div id="JobChance">
    <div class="fgx">.</div>
    <!-- 视频 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <video
          class="zsy"
          autoplay="autoplay"
          loop="loop"
          id="video"
          x-webkit-airplay="true"
          webkit-playsinline="true"
          muted=""
          style="width: 100%; height: 100%"
        >
          <source
            src="./img/sp (2).mp4"
            type="video/mp4"
            style="width: auto; height: 100%"
          />
        </video>
      </div>
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
        <!-- 介绍 -->
          <div>
            1. Easy installion <br>
            2. trendy appearance<br>
            3, Ad space reserved<br>
            4. Compatible with 99% mobile phone models on the market<br>
            5. automatic lighting system<br>
            6. The cylindrical shape of the solar panel is designed to better resist the blowing of the wind<br>
            7. RYA Solar Power Charging Station brings countless power to life. It is designed to increase the value of outdoor spaces by enhancing the natural beauty of the surrounding rather than diminishing it. This unique solar charging station provides a way to efficiently charge any device, making it a powerful tool for keeping visitors connected. It also offers accent LED lighting and other amenities to enrich your environment.
           
          </div>
          <!-- /介绍 -->
        <div class="JobChance-container">
          <img src="./img/lbxq1t.png" alt="" style="width: 100%" />
        </div>
      </div>
    </div>
    <div id="content2" v-show="number == 1">
      <div class="JobChance-container" style="background: url() no-repeat">
        <img src="./img/2t.png" alt="" style="width: 100%" />
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
                <img src="./img/360.png" style="margin: 0 auto" alt="" />
              </el-carousel-item>
              <el-carousel-item :key="item" v-show="xqnumber == 0">
                <img src="./img/360.png" style="margin: 0 auto" alt="" />
              </el-carousel-item>
              <el-carousel-item :key="item" v-show="xqnumber == 0">
                <img src="./img/360.png" style="margin: 0 auto" alt="" />
              </el-carousel-item>

              <!-- 切换显示隐藏 -->
              <!-- 控制轮播的切换 -->
              <!-- 图片 -->

              <!-- 3D -->
              <div id="dd2" style="overflow: hidden" v-show="xqnumber == 1">
                <iframe
                  src="http://127.0.0.1:5501/src/view/lunbo/lunbo1/SP-02.9/SP-02.9.html"
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
              <div class="small360"></div>
            </el-carousel>

            <!-- 按钮与图片 -->
            <div class="sanhe">
              <!-- SP-02 -->
              <div class="spsp">
                <div class="hezhez"></div>
                <span class="zfx">SP-02</span>
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
                <img src="./img/ot.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="ddd2">
            <div class="dddx">
              <img src="./img/1.png" alt="" />
              <img src="./img/2.png" alt="" />
              <img src="./img/3.png" alt="" />
            </div>
          </div>
          <!-- 3 -->
          <div class="ddd3">
            <p>Apollo</p>
            <h3>Apollo Solar Power Charging Station</h3>
            <p>
              KIDIGI Apollo Solar Charging Station (SP-02 ) is a charging
              station installed outdoors. We provide 2 USB charging. To meet the
              needs of different personnel. It has a 5V2.4A output to meet the
              needs of mobile phones. This equipment combines beaches, courts,
              communities, parks, university campuses, corporate campuses,
              swimming pools, private clubs and resort leisure areas. We design
              this product mainly to contribute to environmental protection.
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
      // 控制切换按钮后按钮改变样式
      index: 0,
      // 控制点击按钮后子组件显示，再次点击隐藏
      isShow: true,
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();

    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector(".taohe ").offsetTop;
      if (scrollTop > 800) {
        document.querySelector(".taohe ").style.position = "fixed";
        document.querySelector(".taohe ").style.zIndex = 9000000;
        document.querySelector(".taohe ").style.top = " 0";
        document.querySelector(".taohe").style.width = "100%";
        document.querySelector(".taohe ").style.backgroundColor = "black";
        document.querySelector(".taohe ").style.padding = "0px 95px 0px 9px";
        document.querySelector(".taohe ").style.margin = "95px 0px";
      } else {
        document.querySelector(".taohe ").style.position = "";
        document.querySelector(".taohe").style.top = "";
        document.querySelector(".taohe").style.width = "";
        document.querySelector(".taohe").style.backgroundColor = "";
        document.querySelector(".taohe").style.padding = "0px";
        document.querySelector(".taohe").style.margin = "0px";
      }
    });
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector(".fgx ").offsetTop;
      if (scrollTop > 800) {
        document.querySelector(".fgx ").style.position = "fixed";
        document.querySelector(".fgx ").style.zIndex = 9000000;
        document.querySelector(".fgx ").style.top = " 0";
        document.querySelector(".fgx").style.width = "100%";
        document.querySelector(".fgx ").style.backgroundColor = "#22a3c3";
        //  document.querySelector('.fgx ').style.padding='0px 100px 0px 100px';
        document.querySelector(".fgx ").style.margin = "90px 0px";
      } else {
        document.querySelector(".fgx ").style.position = "";
        document.querySelector(".fgx").style.top = "";
        document.querySelector(".fgx").style.width = "";
        document.querySelector(".fgx").style.backgroundColor = "";
        //  document.querySelector('.fgx').style.padding='0px';
        document.querySelector(".fgx").style.margin = "0px";
      }
    });
  },
  watch: {},
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
    show(value) {
      this.index === value
        ? (this.isShow = !this.isShow)
        : (this.isShow = true);
      this.index = value;
    },
  },
};
</script>


<style scoped>
.fgx {
  width: 100%;
  height: 5px;
  background-color: #22a3c3;
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
  border-radius: 0;
  font-weight: bold;
  background-color: #22a2c3;
}

/*选中时*/
.btn1 {
  /* line-height: 30px; */
  /* margin-left: 160px; */
  width: 380px;
  height: 30px;
  border: 0;

  font-weight: bold;
  color: #ffffff;
  /* margin: 0 1px; */
  background-color: #1a708c;
}

.taohe button:hover {
  color: #ffffff;
  background-color: #1a708c;
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
  background-color: #22a2c3;
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
.liang2 {
  line-height: 30px;
  text-align: center;
  width: 200px;
  height: 30px;
  border: 0;
  color: #8be6ef;
  background-color: #22a2c3;
}

/*选中时*/

.liang:hover {
  background-color: #22a2c3;
}
.liang1:focus {
  background-color: #040000;
}

.btn3 {
  line-height: 30px;
  text-align: center;
  width: 200px;
  height: 30px;

  border: 0;
  color: #8be6ef;
  background-color: #000000;
}
.quan {
  width: 400px;
  color: white;
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
  background-color: white;
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
  width: 200px;
  margin-left: 30px;
  display: inline-block;
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
  position: relative;
  color: #22a2c3;
  font-size: 45px;
  font-weight: bold;
}
.tad {
  display: inline-block;
}
.ta {
  border: 0;
  display: inline-block;
  margin-left: 90px;
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
/* 中间 */

/* teach */
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>
