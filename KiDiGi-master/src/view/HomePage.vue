<template>
  <div id="HomePage">
    <!-- <div class="fgx">.</div> -->
  
          <!-- 轮播图 -->
          <div id="swiper" class="container-fuild">
            <div class="swiper-container banner-swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, index) in swiperList"
                  :key="index"
                  @click="lunbo(item.path)"
                >
                  <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />

                  <div class="swiper-slide-title">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.content }}</p>
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->

              <div class="fyq swiper-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        <!-- cookie声明 -->
      <!-- <div class="cookieDiv" v-if="cookieDivOr">
        <span class="cookkeng">我们想使用cookie以便更好了解您对本网站的使用情况。这将有助于改善您今后访问本网站的体验。关于cookie的使用，以及如何撤回或管理您的同意，请详见我们的<a href="##">隐私政策</a>。如您点击右侧确认按钮，将视为您同意cookie的使用。</span>
        <div class="aDiv">
          <a href="##" style="margin-left:2.16em;" @click="closeDiv">确定</a>
          <a href="##" style="margin-left:2.16em;" @click="closeDiv">取消</a>
        </div>
     </div> -->
<!-- 6大 -->
<div class="liuda" style="background-color:#d3dce0;height:220px;width:100%">
            <!-- <img src="../assets/vipimg/liuda/lolo.png" /> -->
            <!-- <img src="../assets/vipimg/liuda/1 (2).png" /> -->   
<div class="liudat container" style="margin:0 auto">
  <el-row>
  <el-col :span="3"><div class="grid-content bg-purple" id="huo">
    <img src="../assets/vipimg/liuda/lolo.png" alt="图">
    <p>Top</p>
    <p>Sellers</p>
    </div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light">
    <img src="../assets/vipimg/liuda/1 (2).png" alt="图">
    </div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">
    <img src="../assets/vipimg/liuda/2 (2).png" alt="图">
    </div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light">
    <img src="../assets/vipimg/liuda/3 (2).png" alt="图">
    </div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">
    <img src="../assets/vipimg/liuda/4 (2).png" alt="图">
    </div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light">
    <img src="../assets/vipimg/liuda/5 (2).png" alt="图">
    </div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light">
    <img src="../assets/vipimg/liuda/6 (2).png" alt="图">
    </div></el-col>
</el-row>
</div>
</div>
     <!-- 6大冲品结束 -->
         <!-- 视频 -->
    <div id="bigData" class="container-fuild" @click="shiping">
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
            src="../assets/vipimg/sp (1).mp4"
            type="video/mp4"
            style="width: auto; height: 100%"
          />
        </video>
      </div>
    </div>
          <!-- 图片区 -->
          <!-- 一图 -->
<div class="tu" style="background-color:#fff;padding-bottom:25px">
          <div id="bigData" class="container-fuild" style="background-color:#fff">
            <div class="row bigData-container">
              <div class="col-xs-12 col-sm-12 col-md-6 wow slideInLeft"  @click="tp1">
                <!-- <img
                  class="img-responsive"
                  src="../assets/vipimg/tup3.png"
                  alt="图1"
                /> -->
<!-- 移入切换显示 -->
<div class="white-mask" style="background-color:#fff"></div>
  <div class="items">
    <div class="item-wrapper">
      <div class="left block big"></div>
      <div class="right block big"></div>
      <div class="top block big"></div>
      <div class="bottom block big"></div>
      <div class="item-block">
        <img src="../assets/vipimg/tup3.png"
                        alt="">
        <div class="left block"></div>
        <div class="right block"></div>
        <div class="top block"></div>
        <div class="bottom block"></div>
        <div class="mask">
           OMO | 8 Bay Cell Phone</br>
           Charging Locker</br>
           <button>More Detail</button>
          </div>
        
      </div>
    </div>
</div>
<!-- 结束 -->
              </div>
               <!-- 右边 -->
              <div class="col-xs-12 col-sm-12 col-md-6" @click="tp2">
                <!-- <img
                  class="img-responsive wow bounceInRight"
                  src="../assets/vipimg/tup2.png"
                  alt="图2"
                /> -->
                <!-- 移入切换显示 -->
<div class="white-mask"></div>
  <div class="items">
    <div class="item-wrapper">
      <div class="left block big"></div>
      <div class="right block big"></div>
      <div class="top block big"></div>
      <div class="bottom block big"></div>
      <div class="item-block">
        <img src="../assets/vipimg/tup2.png"
                        alt="">
        <div class="left block"></div>
        <div class="right block"></div>
        <div class="top block"></div>
        <div class="bottom block"></div>
        <div class="mask">
          Bary | 8 Bary </br>
           Charging Table</br>
           <button>More Detail</button>
          </div>
      </div>
    </div>
</div>
<!-- 结束 -->
              </div>
            </div>
          </div>
     
          <!-- 2图 -->
          <div id="bigData" class="container-fuild">
            <div class="row bigData-container">
              <div class="tup3 col-xs-12 col-sm-12 col-md-6 wow bounceInLeft"  @click="tp3">
                <!-- <img
                  class="img-responsive"
                  src="../assets/vipimg/tup1 (2).png"
                  alt="图3"
                /> -->
                <!-- 移入切换显示 -->
<div class="white-mask"></div>
  <div class="items">
    <div class="item-wrapper">
      <div class="left block big"></div>
      <div class="right block big"></div>
      <div class="top block big"></div>
      <div class="bottom block big"></div>
      <div class="item-block">
        <img src="../assets/vipimg/tup(1)2.png"
                        alt="">
        <div class="left block"></div>
        <div class="right block"></div>
        <div class="top block"></div>
        <div class="bottom block"></div>
        <div class="mask">
           Prema | Prema</br>
           Charging Station</br>
          <button>More Detail</button>
          </div>
      </div>
    </div>
</div>
<!-- 结束 -->
              </div>
              <!-- 右边 -->
              <div class="col-xs-12 col-sm-12 col-md-6" @click="tp4">
                <!-- <img
                  class="img-responsive wow bounceInRight"
                  src="../assets/vipimg/tup1 (3).png"
                  alt="图4"
                /> -->
                <!-- 移入切换显示 -->
<div class="white-mask"></div>
  <div class="items">
    <div class="item-wrapper">
      <div class="left block big"></div>
      <div class="right block big"></div>
      <div class="top block big"></div>
      <div class="bottom block big"></div>
      <div class="item-block">
        <img src="../assets/vipimg/tup1 (3).png"
                        alt="">
        <div class="left block"></div>
        <div class="right block"></div>
        <div class="top block"></div>
        <div class="bottom block"></div>
        <div class="mask">
          Apollo | Apollo Solar Power</br>
           Charging Station</br>
          <button>More Detail</button>
          </div>
      </div>
    </div>
</div>
</div>
<!-- 结束 -->
              </div>
            </div>
          </div>
     <!-- 更多解决方案 -->
<div id="gengduo" style="padding-bottom:30px">
      <h2 class="gengduofen" style="margin-top:0px">更多解决方案</h2>
          <div class="solve_flex-gengduofen">
             <div class="module_smallboxtou-gengduofen"></div>
             <div class="module_smallboxtou-gengduofen"></div>
             <div class="module_smallboxtou-gengduofen"></div>
            
          </div>
</div>
<!-- 更多解决方案结束 -->
         <!-- 产品大分类 -->
          <div id="whyChooseUs" class="conatiner-fuild">
            <div class="please" style="width:100%">
                    <h2 class="x" style="margin: 0">
                      Please select the desired scenario
                    </h2>
                    <div class="sanjiao" style=""></div>
                  </div>
            <div class="container" style="margin:0 auto;background-color:black">
              <div class="tab wow zoomIn">
                <div class="content">
                  

                  <!-- 10个 -->
                  <!-- 产品大分类按钮 -->
                  <div class="cpd">
                    <!--10个按钮-->
                    <button
                      :class="
                        (index == number ? 'btn1' : 'btn', 'butt' + index)
                      "
                      v-for="(item, index) in dataList"
                      @click="tab(index)"
                      :key="index"
                      class="butt"
                    >
                      {{ item.option }}
                    </button>
                  </div>

                  <!--对应出现的divimg-->
                  <div id="content1" v-show="number == 0">
                    <img
                      src="../assets/vipimg/dalei1img1/1(2.12).png"
                      alt=""
                      @click="xq1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img1/1(2.12).png"
                      alt=""
                      @click="xq2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img1/1(2.12).png"
                      alt=""
                      @click="xq3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img1/4(3.4).png"
                      alt=""
                      @click="xq4"
                    />
                  </div>
                  <div id="content2" v-show="number == 1">
                    <img
                      src="../assets/vipimg/dalei1img2/1(4.1).png"
                      alt=""
                      @click="xqtow1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img2/2(4.4).png"
                      alt=""
                      @click="xqtow2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img2/3(4.2).png"
                      alt=""
                      @click="xqtow3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img2/4(5.1).png"
                      alt=""
                      @click="xqtow4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img2/5(5.3).png"
                      alt=""
                      @click="xqtow5"
                    />
                    <img
                      src="../assets/vipimg/dalei1img2/6(5.4).png"
                      alt=""
                      @click="xqtow6"
                    />
                    <img
                      src="../assets/vipimg/dalei1img2/6(5.4).png"
                      alt=""
                      @click="xqtow7"
                    />
                  </div>
                  <div id="content3" v-show="number == 2">
                    <img
                      src="../assets/vipimg/dalei1img3/1(2.12).png"
                      alt=""
                      @click="xqthree1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/2(3.8).png"
                      alt=""
                      @click="xqthree2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/3(2.2).png"
                      alt=""
                      @click="xqthree3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/4(2.6).png"
                      alt=""
                      @click="xqthree4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/5(3.2).png"
                      alt=""
                      @click="xqthree5"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/6(1.1).png"
                      alt=""
                      @click="xqthree6"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/7(3.4).png"
                      alt=""
                      @click="xqthree7"
                    />
                  </div>
                  <div id="content4" v-show="number == 3">
                    <img
                      src="../assets/vipimg/dalei1img4/1(3.1).png"
                      alt=""
                      @click="xqfour1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img3/7(3.4).png"
                      alt=""
                      @click="xqfour2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img4/3(3.6).png"
                      alt=""
                      @click="xqfour3"
                    />
                  </div>
                  <div id="content5" v-show="number == 4">
                    <img
                      src="../assets/vipimg/dalei1img5/1(3.1).png"
                      alt=""
                      @click="xqfive1"
                    />
                    <!-- 无 -->
                    <img
                      src="../assets/vipimg/dalei1img5/1(3.1).png"
                      alt=""
                      @click="xqfive2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/3(3.6).png"
                      alt=""
                      @click="xqfive3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/4(3.8).png"
                      alt=""
                      @click="xqfive4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/5(5.1).png"
                      alt=""
                      @click="xqfive5"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/6(5.3).png"
                      alt=""
                      @click="xqfive6"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/7(5.4).png"
                      alt=""
                      @click="xqfive7"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/8(4.3).png"
                      alt=""
                      @click="xqfive8"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/9(1.1).png"
                      alt=""
                      @click="xqfive9"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/10(1.2).png"
                      alt=""
                      @click="xqfive10"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/10(1.2).png"
                      alt=""
                      @click="xqfive11"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/12(1.5).png"
                      alt=""
                      @click="xqfive12"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/12(1.5).png"
                      alt=""
                      @click="xqfive13"
                    />
                  </div>
                  <div id="content6" v-show="number == 5">
                    <img
                      src="../assets/vipimg/dalei1img6/1(3.2).png"
                      alt=""
                      @click="xqsix1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/14(2.12).png"
                      alt=""
                      @click="xqsix2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img6/3(3.3).png"
                      alt=""
                      @click="xqsix3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img6/4(3.4).png"
                      alt=""
                      @click="xqsix4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img6/5(3.5).png"
                      alt=""
                      @click="xqsix5"
                    />
                    <img
                      src="../assets/vipimg/dalei1img6/6(1.4).png"
                      alt=""
                      @click="xqsix6"
                    />
                  </div>
                  <div id="content7" v-show="number == 6">
                    <img
                      src="../assets/vipimg/dalei1img5/1(3.1).png"
                      alt=""
                      @click="xqserver1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img5/1(3.1).png"
                      alt=""
                      @click="xqserver2"
                    />
                  </div>
                  <div id="content8" v-show="number == 7">
                    <img
                      src="../assets/vipimg/dalei1img8/4(1.4).png"
                      alt=""
                      @click="xqent1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img8/4(1.4).png"
                      alt=""
                      @click="xqent2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img8/4(1.4).png"
                      alt=""
                      @click="xqent3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img8/4(1.4).png"
                      alt=""
                      @click="xqent4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img8/4(1.4).png"
                      alt=""
                      @click="xqent5"
                    />
                  </div>
                  <div id="content9" v-show="number == 8">
                    <img
                      src="../assets/vipimg/dalei1img9/1(2.2).png"
                      alt=""
                      @click="xqnint1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/2(2.3).png"
                      alt=""
                      @click="xqnint2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/3(2.10).png"
                      alt=""
                      @click="xqnint3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/4(2.13).png"
                      alt=""
                      @click="xqnint4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/5(2.5).png"
                      alt=""
                      @click="xqnint5"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/6(2.11).png"
                      alt=""
                      @click="xqnint6"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/7(2.1).png"
                      alt=""
                      @click="xqnint7"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/8(2.6).png"
                      alt=""
                      @click="xqnint8"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/9(2.9).png"
                      alt=""
                      @click="xqnint9"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/10(2.7).png"
                      alt=""
                      @click="xqnint10"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/11(5.1).png"
                      alt=""
                      @click="xqnint11"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/12(5.3).png"
                      alt=""
                      @click="xqnint12"
                    />
                    <img
                      src="../assets/vipimg/dalei1img9/13(5.4).png"
                      alt=""
                      @click="xqnint13"
                    />
                  </div>
                  <div id="content10" v-show="number == 9">
                    <img
                      src="../assets/vipimg/dalei1img10/1(1.1).png"
                      alt=""
                      @click="xqten1"
                    />
                    <img
                      src="../assets/vipimg/dalei1img10/1(1.1).png"
                      alt=""
                      @click="xqten2"
                    />
                    <img
                      src="../assets/vipimg/dalei1img10/3(2.7).png"
                      alt=""
                      @click="xqten3"
                    />
                    <img
                      src="../assets/vipimg/dalei1img10/4(2.8).png"
                      alt=""
                      @click="xqten4"
                    />
                    <img
                      src="../assets/vipimg/dalei1img10/1(1.1).png"
                      alt=""
                      @click="xqten5"
                    />
                    <img
                      src="../assets/vipimg/dalei1img10/1(1.1).png"
                      alt=""
                      @click="xqten6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分割线 -->
          <!-- <div
            class="kb container"
            style="width: 100%; height: 15px; background-color: #666"
          > 
          </div>-->

    
          <!-- 品牌合作 -->
          <div class="container wow bounceIn" style="background-color: #ffffff ;margin:0 auto;margin-top:20px">
            <img
              src="../assets/vipimg/helogo.png"
              alt=""
              style="width: 100%;
              "
            />
          </div>
          <!-- 分割线 -->
          <div
            class="kb"
            style="width: 100%; height: 15px; background-color: #666"
          >
            .
       
    </div>
  </div>
</template>
<script>
// 底部多个按钮导航
import Swiper from "swiper";
import { WOW } from "wowjs";
import animate from "animate";
export default {
  name: "HomePage",
  data() {
    return {
      //隐私证明显示
      // cookieDivOr: true,
     

      swiperList: [
        {
          img: require("@/assets/vipimg/lbb.jpg"),
          path: "/lunbo/lunbo1",
          // 轮播图中的文字
          title: "Let the World Charge Faster",
          content:
            "65W + 20W PD Fast Charging Support Mobile Phones, Tablets and Laptops",
        },
        {
          img: require("@/assets/vipimg/lb2.jpg"),
          path: "/lunbo/lunbo2",
          title: "The Best Solution for Portable Charging",
          content: "Portable, Easy to install",
        },
        {
          img: require("@/assets/vipimg/lb3.jpg"),
          path: "/lunbo/lunbo3",
          title: "Internet of Charging Stations",
          content: "Our charging station lineup now includes loT",
        },
      ],
      // 产品大全的数据
      number: 0, //点击后的值，与下标同步，为0表示默认第一个按钮与div为选中状态
      dataList: [
        { option: "Shopping Mall Store ConvenienceStore Office Buliding" },
        { option: "4S Shop,Shop,Telecom" },
        { option: "Cinema,Stadium,Arena,Concert,Museum" },
        { option: "Hospital,Clinic" },
        {
          option:
            "Restaurant,Hotel,Cafe,Bar,Privateclubs,Casino,Events,Party place",
        },
        {
          option:
            "Airport,SubwayStation,TrainStation,BusStation,Park,Cruise terminal,Metro,Exhibitions",
        },
        { option: "Uber,Taxi,Shuttle bus" },
        { option: "Roadside,Sandy beach,Court" },
        { option: "GYM,Fitness,SaunaShop,Staff lounge" },
        { option: "School,University,Library" },
      ],
    };
  },
  mounted() {
    this.screenWeight = document.documentElement.clientWidth;
    this.screenHeight = document.documentElement.clientHeight;
    this.main = document.getElementById("main");
    this.obj = document.getElementsByTagName("div");
    for (let i = 0; i < this.obj.length; i++) {
      if (this.obj[i].className == "page") {
        this.obj[i].style.height = this.screenHeight + "px";
      }
    }
    this.pageNum = document.querySelectorAll(".page").length;

    // 浏览器兼容
    if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
      document.addEventListener("DOMMouseScroll", this.scrollFun, false);
    } else if (document.addEventListener) {
      document.addEventListener("mousewheel", this.scrollFun, false);
    } else if (document.attachEvent) {
      document.attachEvent("onmousewheel", this.scrollFun);
    } else {
      document.onmousewheel = this.scrollFun;
    }

    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: "fade",
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true,
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  },
  methods: {
    // cookie
    // getCookie: function (cname) {
    //   var name = cname + "=";
    //   var ca = document.cookie.split(";");
    //   for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     console.log(c, "c");
    //     while (c.charAt(0) == " ") c = c.substring(1);
    //     if (c.indexOf(name) != -1) {
    //       return c.substring(name.length, c.length);
    //     }
    //   }
    //   return "";
    // },
    // setCookie: function (cname, cvalue, exdays) {
    //   var d = new Date();
    //   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    //   var expires = "expires=" + d.toUTCString();
    //   console.info(cname + "=" + cvalue + "; " + expires);
    //   document.cookie = cname + "=" + cvalue + "; " + expires;
    //   console.log(document.cookie);
    // },
    // clearCookie: function () {
    //   this.setCookie("传给cookie的值 可以自定义", "", -1000); //设置天数
    // },
    // checkCookie: function () {
    //   var user = this.getCookie("传给cookie的值 可以自定义");
    //   if (user != "") {
    //     this.cookieDivOr = false;
    //     // console.log(1111)
    //   } else {
    //     // console.log(2222)
    //     this.cookieDivOr = true;
    //   }
    // },
    // closeDiv() {
    //   // console.log('123123');
    //   this.setCookie("传给cookie的值 可以自定义", "1", 1000); //设置天数
    //   this.cookieDivOr = false;
    // },
    // created() {
    //   this.checkCookie();
    // },

    //定义切换方法
    tab(index) {
      this.number = index;
      //  console.log(index, this.number);
    },
    // 6大促销品
    gopage: function () {
      alert(this.Arr[2].url);
      this.$router.push({ path: this.Arr[2].url });
    },
    gaochanp() {
      this.$router.push("/shiping/ship");
    },
    // 视频
    shiping() {
      this.$router.push("/shiping/ship");
    },
    // shiping() {
    //   this.$router.push("/shiping/ship");
    // },
    // 轮播图链接事件
    lunbo(path) {
      // alert('dsd')
      this.$router.push(path);
    },
    tp1() {
      this.$router.push("/threeProducts/three");
    },
    tp2() {
      this.$router.push("/threeProducts/two");
    },
    tp3() {
      this.$router.push("/threeProducts/one");
    },
    tp4() {
      this.$router.push("/view/lunbo/lunbo1");
    },

    // 产品大全分类点击事件
    xq1() {
      this.$router.push("/product/product2/12");
    },
    xq2() {
      this.$router.push("/product/product1/2");
    },
    xq3() {
      this.$router.push("/product/product1/3");
    },
    xq4() {
      this.$router.push("/product/product3/4");
    },
    // product2
    xqtow1() {
      this.$router.push("/product/product4/1");
    },
    xqtow2() {
      this.$router.push("/product/product4/4");
    },
    xqtow3() {
      this.$router.push("/product/product4/2");
    },
    xqtow4() {
      this.$router.push("/product/product5/1");
    },
    xqtow5() {
      this.$router.push("/product/product5/3");
    },
    xqtow6() {
      this.$router.push("/product/product5/4");
    },
    xqtow7() {
      this.$router.push("/product/product5/4");
    },
    // 3
    xqthree1() {
      this.$router.push("/product/product2/12");
    },
    xqthree2() {
      this.$router.push("/product/product3/8");
    },
    xqthree3() {
      this.$router.push("/product/product2/2");
    },
    xqthree4() {
      this.$router.push("/product/product2/6");
    },
    xqthree5() {
      this.$router.push("/product/product3/2");
    },
    xqthree6() {
      this.$router.push("/product/product1/soho");
    },
    xqthree7() {
      this.$router.push("/product/product3/4");
    },
    // 4
    xqfour1() {
      this.$router.push("/product/product3/1");
    },
    xqfour2() {
      this.$router.push("/product/product2/2");
    },
    xqfour3() {
      this.$router.push("/product/product3/6");
    },
    // 5
    xqfive1() {
      this.$router.push("/product/product3/1");
    },
    xqfive2() {
      this.$router.push("/product/product2/2");
    },
    xqfive3() {
      this.$router.push("/product/product3/6");
    },
    xqfive4() {
      this.$router.push("/product/product3/8");
    },
    xqfive5() {
      this.$router.push("/product/product5/1");
    },
    xqfive6() {
      this.$router.push("/product/product5/3");
    },
    xqfive7() {
      this.$router.push("/product/product5/4");
    },
    xqfive8() {
      this.$router.push("/product/product4/3");
    },
    xqfive9() {
      this.$router.push("/product/product1/soho");
    },
    xqfive10() {
      this.$router.push("/product/product1/2");
    },
    xqfive11() {
      this.$router.push("/product/product1/5");
    },
    xqfive12() {
      this.$router.push("/product/product1/5");
    },
    xqfive13() {
      this.$router.push("/product/product2/13");
    },
    // 6
    xqsix1() {
      this.$router.push("/product/product3/2");
    },
    xqsix2() {
      this.$router.push("/product/product2/2");
    },
    xqsix3() {
      this.$router.push("/product/product3/3");
    },
    xqsix4() {
      this.$router.push("/product/product3/4");
    },
    xqsix5() {
      this.$router.push("/product/product3/5");
    },
    xqsix6() {
      this.$router.push("/product/product1/4");
    },
    // 7
    xqserver1() {
      this.$router.push("/product/product6/1");
    },
    xqserver2() {
      this.$router.push("/product/product6/2");
    },
    // 8
    xqent1() {
      this.$router.push("/product/product1/4");
    },
    xqent2() {
      this.$router.push("/product/product1/4");
    },
    xqent3() {
      this.$router.push("/product/product1/4");
    },
    xqent4() {
      this.$router.push("/product/product1/4");
    },
    xqent5() {
      this.$router.push("/product/product1/4");
    },
    // 9
    xqnint1() {
      this.$router.push("/product/product2/2");
    },
    xqnint2() {
      this.$router.push("/product/product2/3");
    },
    xqnint3() {
      this.$router.push("/product/product2/10");
    },
    xqnint4() {
      this.$router.push("/product/product2/13");
    },
    xqnint5() {
      this.$router.push("/product/product2/5");
    },
    xqnint6() {
      this.$router.push("/product/product2/11");
    },
    xqnint7() {
      this.$router.push("/product/product2/1");
    },
    xqnint8() {
      this.$router.push("/product/product2/6");
    },
    xqnint9() {
      this.$router.push("/product/product2/9");
    },
    xqnint10() {
      this.$router.push("/product/product2/7");
    },
    xqnint11() {
      this.$router.push("/product/product5/1");
    },
    xqnint12() {
      this.$router.push("/product/product5/3");
    },
    xqnint13() {
      this.$router.push("/product/product5/4");
    },
    // 10
    xqten1() {
      this.$router.push("/product/product2/2");
    },
    xqten2() {
      this.$router.push("/product/product2/2");
    },
    xqten3() {
      this.$router.push("/product/product2/2");
    },
    xqten4() {
      this.$router.push("/product/product2/2");
    },
    xqten5() {
      this.$router.push("/product/product2/2");
    },
    xqten6() {
      this.$router.push("/product/product2/2");
    },
  },
};
</script>
<style scoped>
/* html,
body {
  height: 100%;
} */
.cookkeng {
  color: #fff;
  font-weight: bold;
}
.cookkeng a {
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
}
.cookkeng a :hover {
  background-color: #529adb;
}
.aDiv {
  float: right;
  margin-right: 200px;
}
.aDiv a {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}
.cookkeng a:hover {
  color: #e83015;
}
.aDiv a:hover {
  color: #e83015;
}
body,
ul,
li,
a,
p,
div {
  /*慎删*/
  padding: 0px;
  margin: 0px;
}

#wrap {
  overflow: hidden;
  width: 100%;
}

#main {
  position: relative;
  transition: top 1.5s;
}

.page {
  /*谨删*/
  width: 100%;
  margin: 0;
}

#pageUl {
  /* position: fixed; */
  /* right: 10px; */
  /* bottom: 50%; */
}

.fgx {
  width: 100%;
  height: 5px;
  background-color: #383b94;
}
#myScrollspy {
  background: black;
}
/* 整体盒子 */
#HomePage {
  background: black;
  width: 100%;
}
/* 分页器 */

/* 轮播图 */
#swiper {
  height: 843px;
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
#swiper .banner-swiper .swiper-slide-title > h1 {
  color: #fff;
  font-size: 30px;
  margin-top: 15%;
  margin-right: 35%;
}
#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  margin-right: 25%;
  font-weight: 700;
}
/* 图片区*/
/* 移入显示 */
.items {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.item-block {
  width: var(--width);
  height: var(--height);
  background-color: rgb(251, 247, 233);
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.item-wrapper {
  /* padding: 10px 20px; */
  position: relative;
  box-sizing: border-box;
}

.block {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  clip-path: var(--clip-path);
}

.big {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* display: none; */
}

.big:hover {
  width: calc(100% + 40px);
  height: calc(100% + 20px);
  left: -20px;
  top: -10px;
  z-index: 2;
}

.top {
  --clip-path: polygon(0 0, 100% 0, 50% 50%);
  /* background-color: red; */
}

.bottom {
  --clip-path: polygon(0 100%, 100% 100%, 50% 50%);
  /* background-color: yellow; */
}

.left {
  --clip-path: polygon(0 0, 0 100%, 50% 50%);
  /* background-color: green; */
}

.right {
  --clip-path: polygon(100% 0, 100% 100%, 50% 50%);
  /* background-color: blue; */
}

.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;
  top: 0;
  background-color: rgba(26, 29, 29, 0.8);
  --startX: 0;
  --startY: 0;
  --x: 0;
  --y: 0;
  --animation-name: runner-back;
  animation: var(--animation-name) 0.3s linear;
  animation-fill-mode: forwards;
  color: white;
  font-size: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mask button {
  width: 200px;
  font-size: 18px;
  background-color: #fff !important;
  color: black;
  display: inline-block;
  margin-left: 50px;
}
.block:not(.big):hover {
  clip-path: unset;
  z-index: 2;
}

.big.top:hover ~ .item-block .mask {
  --startX: 100%;
  --startY: -100%;
  --x: 100%;
  --y: 0;
  --animation-name: runner-back;
}

.big.bottom:hover ~ .item-block .mask {
  --startX: 100%;
  --startY: 100%;
  --x: 100%;
  --y: 0;
  --animation-name: runner-back;
}

.big.left:hover ~ .item-block .mask {
  --startX: 0;
  --startY: 0;
  --x: 100%;
  --y: 0;
  --animation-name: runner-back;
}

.big.right:hover ~ .item-block .mask {
  --startX: 200%;
  --startY: 0;
  --x: 100%;
  --y: 0;
  --animation-name: runner-back;
}

.top:not(.big):hover ~ .mask {
  --startX: 100%;
  --startY: -100%;
  --x: 100%;
  --y: 0;
  --animation-name: runner;
}

.bottom:not(.big):hover ~ .mask {
  --startX: 100%;
  --startY: 100%;
  --x: 100%;
  --y: 0;
  --animation-name: runner;
}

.left:not(.big):hover ~ .mask {
  --startX: 0;
  --startY: 0;
  --x: 100%;
  --y: 0;
  --animation-name: runner;
}

.right:not(.big):hover ~ .mask {
  --startX: 200%;
  --startY: 0;
  --x: 100%;
  --y: 0;
  --animation-name: runner;
}

@keyframes runner {
  from {
    transform: translateX(var(--startX)) translateY(var(--startY));
  }

  to {
    transform: translateX(var(--x)) translateY(var(--y));
  }
}

@keyframes runner-back {
  from {
    transform: translateX(var(--x)) translateY(var(--y));
  }

  to {
    transform: translateX(var(--startX)) translateY(var(--startY));
  }
}

.content {
  /* --width: 28vw;
        --height: 14vw; */
  --h: calc(var(--height) / 2);
  --w: calc(var(--width) / 2);
  width: calc(var(--width) * 3 + 20px * 6);
  /* height: 100vh; */
  position: relative;
}

.white-mask {
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background-color: black; */
  z-index: 1;
}

.white-mask:hover ~ .items .mask {
  --startX: 100%;
  --startY: 100%;
  --x: 100%;
  --y: 0;
  --animation-name: runner-back;
}

img {
  width: 100%;
  height: auto;
}
/* 移入显示结束 */

.tup1 {
  display: flex;
  padding: 100px 50px;
}
.hhez {
  background-color: #495c69;
  width: 300px;
  height: 300px;
  disply: flex;
  /* margin-left: 20px; */
}
.tup1 img {
  position: absolute;
  margin-top: 60px;
  margin-left: 60px;
  width: 415px;
  height: 580px;
}
.tup1 p {
  width: 100%;
  position: relative;
  padding-top: 100px;
  padding-left: 120px;
  margin-top: 500px;
  font-weight: bold;
  font-size: 50px;
  color: #fff;
}
.tup2 {
  padding: 100px 0px;
  /* flex: 1; */
}
.tup2 img {
  width: 100%;
  height: 100%;
}
.tup3 img {
}
.tup6 img {
}
.da {
  display: flex;
}

/* 为什么选择我们 */

#whyChooseUs {
  /* background-color: #505050; */
  /* padding: 100px; */
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  margin: 10px 10px;
  padding: 50px 20px;
  border-radius: 10px;
  border: 5px solid red;
}
#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
  color: black;
  font-weight: bold;
}
#whyChooseUs .server-block > div {
  color: red;
}

#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}
#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}
#customer .customer-block {
  background: #fff;
  padding: 30px;
}
#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid red;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  /* 移动端布局3个 */
  .sange {
    width: 33%;
  }
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid red;
    border-bottom: 5px solid red;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: red;
  }
}

/* 产品大全分类 */
.cph {
  margin: 0 auto;
}
.cph h2 {
}
.please {
  background: black;
}
.please h2 {
  padding-left: 35%;
  line-height: 60px;
  background: #465b67;
  color: #fff;
  font-size: bold;
  margin-top: 10px;
}
#whyChooseUs {
  /* margin-bottom: 35px; */
  /* background-color: #424443; */
}
#whyChooseUs p {
  text-align: center;
  font-weight: bold;
  color: black;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

#bigData {
  margin: 0px 10px;
}
#bigData div {
  padding: 1px;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
}

/* 三角 */
.sanjiao {
  width: 30px;
  height: auto;
  border: 20px solid black;
  border-top-color: transparent;
  border-left-color: black;
  border-right-color: black;

  background-color: rgb(70, 91, 103);
  margin: 0 auto;
}

.tab {
  height: 100%;
}
.tab h2 {
  background-color: rgb(70, 91, 103);
  text-align: center;
  font-weight: bold;
  color: black;
  line-height: 100px;
  margin: 0 auto;
}
.cpd {
  background-color: black;
  color: white;
  font-size: 14px;
  width: auto;
  position: relative;
  margin: 0 15px;
}
.cpd:hover {
  color: black;
}
.butt {
  white-space: normal;
  margin: 2px 2px;
  width: 281px;
  height: 50px;
  color: white;
  background-color: black;
  font-size: 14px;
  border: 1px solid white;
  text-align: center;
}
.butt0 {
  white-space: normal;
  margin: 2px 2px;
  width: 281px;
  height: 50px;
  color: white;
  background-color: black;
  font-size: 14px;
  border: 1px solid white;
  text-align: center;
  position: relative;
  top: -10px;
  left: 0;
}
.butt4 {
  margin-left: ;
  white-space: normal;
  margin: 2px 2px;
  width: 568px;
  height: 50px;
  color: white;
  background-color: black;
  font-size: 14px;
  border: 1px solid white;
  text-align: center;
}
.butt5 {
  white-space: normal;
  margin: 2px 2px;
  width: 566px;
  height: 50px;
  color: white;
  background-color: black;
  font-size: 14px;
  border: 1px solid white;
  text-align: center;
}
.butt:hover {
  color: black;
  /* font-weight: bold; */
  background-color: white;
}

#content1 > img {
  width: 186px;
  display: inline-block;
  background-color: black;
}
#content2 > img {
  width: 186px;
  display: inline-block;
}
#content3 > img {
  width: 186px;
  display: inline-block;
}
#content4 > img {
  width: 186px;
  display: inline-block;
}
#content5 > img {
  width: 186px;
  display: inline-block;
}
#content6 > img {
  width: 186px;
  display: inline-block;
}
#content7 > img {
  width: 186px;
  display: inline-block;
}
#content8 > img {
  width: 186px;
  display: inline-block;
}
#content9 > img {
  width: 186px;
  display: inline-block;
}
#content10 > img {
  width: 186px;
  display: inline-block;
}
.container .logo1 {
  margin: 10px 45px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
.container .logo2 {
  margin: 10px 45px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
.container .logo3 {
  margin: 10px 45px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
.container .logo4 {
  margin: 10px 45px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
.container .logo5 {
  margin: 10px 45px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
.container .logo6 {
  margin: 10px 45px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
.logo1 img {
  width: 100%;
  height: 100%;
}
.logo2 img {
  width: 100%;
  height: 100%;
}
.logo3 img {
  width: 100%;
  height: 100%;
}
.logo4 img {
  width: 100%;
  height: 100%;
}
.logo5 img {
  width: 100%;
  height: 100%;
}
.logo6 img {
  width: 100%;
  height: 100%;
}
.container .logo1 img {
  object-fit: cover;
  transition: 0.2s;
}
.container .logo1 img:hover {
  transform: scale(1.2);
}
.container .logo2 img {
  object-fit: cover;
  transition: 0.2s;
}
.container .logo2 img:hover {
  transform: scale(1.2);
}
.container .logo3 img {
  object-fit: cover;
  transition: 0.2s;
}
.container .logo3 img:hover {
  transform: scale(1.2);
}
.container .logo4 img {
  object-fit: cover;
  transition: 0.2s;
}
.container .logo4 img:hover {
  transform: scale(1.2);
}
.container .logo5 img {
  object-fit: cover;
  transition: 0.2s;
}
.container .logo5 img:hover {
  transform: scale(1.2);
}
.container .logo6 img {
  object-fit: cover;
  transition: 0.2s;
}
.container .logo6 img:hover {
  transform: scale(1.2);
}
/* 品牌合作框 */
.container .zt {
  font-weight: bold;
  box-shadow: 10px 10px 20px rgb(192, 189, 189);
}
/* 产品分大类 */
.content img {
  object-fit: cover;
  transition: 0.2s;
}
.content img:hover {
  /* box-shadow: 10px 10px 20px rgb(177, 174, 174); */
  transform: scale(1.1);
}
/* 6大促销 */
.solve_flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  margin: 0 auto;
  width: 60%;
  height: 60%;
}
.module_smallboxtou {
  border-radius: 6%;
  width: 195px;
  height: 270px;
  margin: 10px 10px;
  padding: 25px;
  margin-left: 130px;
  background: #fff;
}
.module_smallboxtou p {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
  color: red !important;
}
.module_smallbox {
  border-radius: 6%;
  width: 300px;
  height: 60%;
  margin: 10px 10px;
  background: red;
}
.solve_span {
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #333333;
  text-align: center;
}
.home_onebutton {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  letter-spacing: 0.59px;
  text-align: center;
  border-bottom: 1px solid #df7e7e;
}
.home_onebutton span {
  word-break: break-word;
}
#gengduo {
  text-align: center;
  background-color: #fff;
}
#gengduo .gengduofen h2 {
  /* padding-top: 1px; */
  background-color: #fff;
  color: black;
  text-align: center;
}
.solve_flex-gengduofen {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 20px; */
  margin: 0 auto;
  width: 50%;
  height: 60%;
  background-color: #fff;
}
.module_smallboxtou-gengduofen {
  border-radius: 6%;
  width: 200px;
  height: 270px;
  margin: 10px 10px;
  padding: 25px;
  background: #dcdad8;
}
.bottom {
  margin: 5px;
}
/* liuda */
.liudat img{
  width: 131px;
  height: 164px;
  margin: 20px 0px;
}
#huo {
  padding-top: 45px;
 
}
#huo img {
  width: 47px;
  height: 53px;
   margin: 0 auto;
}
#huo p{
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.butt.butt4{
  margin-left: 0px !important;
}
.butt.butt5{
  width: 566px !important;
}

</style>