<template>
  <!-- 测试提交 -->
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left" style="line-height: 25px">
          <a href="https://hk.linkedin.com/company/kidigi-company-limited">
            <img src="../assets/vipimg/in.png" alt="" />
          </a>
          <a href="https://www.instagram.com/kidigi_official/">
            <img
              src="../assets/vipimg/f.png"
              alt=""
              style="width: 11px; height: 21px"
            />
          </a>
          <a href="http://facebook.com/KiDiGi">
            <img src="../assets/vipimg/xj.png" alt="" />
          </a>
          <a href="https://wa.me/85292668169">
            <img src="../assets/vipimg/dh.png" alt="" />
          </a>
        </div>
        <div class="shejiao pull-right" style="line-height: 25px">
          <a href="info@kidigi.com" style="color: white"
            ><span
              class="glyphicon glyphicon-envelope"
              style="margin: 0 10px"
            ></span
            >sales@kidigi.com</a
          >
          &nbsp; &nbsp;/&nbsp; &nbsp;
          <span class="glyphicon glyphicon-earphone"></span>852-21654755 &nbsp;
          &nbsp;/&nbsp; &nbsp;
          <a href="https://goo.gl/maps/wrrhzbC6pVtSJffQ9" style="color: white">
          <span class="glyphicon glyphicon-map-marker"></span>Millennium City 5,
          KT, Hong Kong</a>
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs" id="header11" style="height:70px">
      <!-- 导航logo -->
      <div class="header-nav-logo" @click="ho">
        <span class="Homeyiru" style=" flex: 1;margin-left: 350px;font-size: 15px;font-weight: bold;margin-top: 24px;color:#fff"> <a href="https://www.kidigi.com/KiDiGi-master/dist/index.html#/">Home</a></span>
        <a href=""
          ><img src="../assets/vipimg/微信图片_20221121183656.png"
        /></a>
       
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @mouseenter="mouseover"
        >
          <!-- @click="navClick(index, item.name)" -->
          <router-link :to="item.path">
            {{ item.name }}
            <span
              v-if="item.children.length > 0"
             
            ></span>
            <i class="underline"></i>
          </router-link>
          <div
            class="donghua"
            style="transition: height 1s"
            v-show="showOrHide"
          >
            <dl
              v-for="(irr, idx) in item.children"
              :class="'dl' + idx"
              :key="irr + idx"
            >
              <dt class="zzz">
                <router-link :to="irr.path">{{ irr.title }}</router-link>
              </dt>

              <!-- 图片 -->
              <dt v-if="irr.imgurl">
                <!-- @click="soho(irr.path)" -->
                <img :src="irr.imgurl" alt="" class="imgDiv" />
              </dt>
              <!-- //移入字母切换图片 -->
              <!--  @click="imgtz(irr.path)" -->
              <dt
                class="baise"
                v-if="irr.imgdiv"
                @mouseenter="changeImg(irr.imgdiv.imgurl, idx)"
              >
                <router-link to="/product/product2/1">
                  {{ irr.imgdiv.litliTitle }}</router-link
                >
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv1"
                @mouseenter="changeImg(irr.imgdiv1.imgurl, idx)"
              >
                <router-link to="/product/product2/2"
                  >{{ irr.imgdiv1.litliTitle }}
                </router-link>
              </dt>

              <dt
                class="baise"
                v-if="irr.imgdiv2"
                @mouseenter="changeImg(irr.imgdiv2.imgurl, idx)"
              >
                <router-link to="/product/product2/3">{{
                  irr.imgdiv2.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv3"
                @mouseenter="changeImg(irr.imgdiv3.imgurl, idx)"
              >
                <router-link to="/product/product2/4">{{
                  irr.imgdiv3.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv4"
                @mouseenter="changeImg(irr.imgdiv4.imgurl, idx)"
              >
                <router-link to="/product/product2/5">{{
                  irr.imgdiv4.litliTitle
                }}</router-link>
              </dt>

              <dt
                class="baise"
                v-if="irr.imgdiv5"
                @mouseenter="changeImg(irr.imgdiv5.imgurl, idx)"
              >
                <router-link to="/product/product2/6">{{
                  irr.imgdiv5.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv6"
                @mouseenter="changeImg(irr.imgdiv6.imgurl, idx)"
              >
                <router-link to="/product/product2/7">{{
                  irr.imgdiv6.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv7"
                @mouseenter="changeImg(irr.imgdiv7.imgurl, idx)"
              >
                <router-link to="/product/product2/8">{{
                  irr.imgdiv7.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv8"
                @mouseenter="changeImg(irr.imgdiv8.imgurl, idx)"
              >
                <router-link to="/product/product2/9">{{
                  irr.imgdiv8.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv9"
                @mouseenter="changeImg(irr.imgdiv9.imgurl, idx)"
              >
                <router-link to="/product/product2/10">{{
                  irr.imgdiv9.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv10"
                @mouseenter="changeImg(irr.imgdiv10.imgurl, idx)"
              >
                <router-link to="/product/product2/11">{{
                  irr.imgdiv10.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv11"
                @mouseenter="changeImg(irr.imgdiv11.imgurl, idx)"
              >
                <router-link to="/product/product2/12">{{
                  irr.imgdiv11.litliTitle
                }}</router-link>
              </dt>
              <dt
                class="baise"
                v-if="irr.imgdiv12"
                @mouseenter="changeImg(irr.imgdiv12.imgurl, idx)"
              >
                <router-link to="/product/product2/13">{{
                  irr.imgdiv12.litliTitle
                }}</router-link>
              </dt>
            </dl>
          </div>
        </li>
      <!--  -->
      
      <!-- our下拉 -->
      <el-dropdown class="elbutton" style="">
  <el-button type="primary" class="el" style="margin-left: 45px;background-color: #000000;border: 0px;color: #474747;font-size: 15px;font-weight: bold;">
    Our Company<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <router-link to="/OurCompany/aboutkidigi"><el-dropdown-item  class="elxiao">About KiDiGi</el-dropdown-item></router-link>
    <router-link to="/OurCompany/contact"><el-dropdown-item class="elxiao">Contact</el-dropdown-item></router-link>
    
  </el-dropdown-menu>
</el-dropdown>
      <!-- our下拉 -->
      </ul>
      
    </div>
    
    <!-- 手机导航 -->
  </div>
</template>
<script>
// 1
import imgPath from "../assets/vipimg/1img/1.png";
import imgPath0 from "../assets/vipimg/1img/2.png";
import imgPath01 from "../assets/vipimg/1img/3.png";
import imgPath02 from "../assets/vipimg/1img/4.png";
import imgPath03 from "../assets/vipimg/1img/5.png";
// 2
import imgPath20 from "../assets/vipimg/2img/1.1.png";
import imgPath21 from "../assets/vipimg/2img/1.2.png";
import imgPath22 from "../assets/vipimg/2img/1.3.png";
import imgPath23 from "../assets/vipimg/2img/1.4.png";
import imgPath24 from "../assets/vipimg/2img/1.5.png";
import imgPath25 from "../assets/vipimg/2img/1.6.png";
import imgPath26 from "../assets/vipimg/2img/1.7.png";
import imgPath27 from "../assets/vipimg/2img/1.8.png";
import imgPath28 from "../assets/vipimg/2img/1.9.png";
import imgPath29 from "../assets/vipimg/2img/1.10.png";
import imgPath301 from "../assets/vipimg/2img/1.11.png";
import imgPath311 from "../assets/vipimg/2img/1.12.png";
import imgPath322 from "../assets/vipimg/2img/1.13.png";
// 3
import imgPath30 from "../assets/vipimg/3img/1.1.png";
import imgPath31 from "../assets/vipimg/3img/1.2.png";
import imgPath32 from "../assets/vipimg/3img/1.3.png";
import imgPath33 from "../assets/vipimg/3img/1.4.png";
import imgPath34 from "../assets/vipimg/3img/1.5.png";
import imgPath35 from "../assets/vipimg/3img/1.6.png";
import imgPath36 from "../assets/vipimg/3img/1.7.png";
import imgPath37 from "../assets/vipimg/3img/1.8.png";
// 4
import imgPath41 from "../assets/vipimg/4img/2.png";
import imgPath42 from "../assets/vipimg/4img/3.png";
import imgPath43 from "../assets/vipimg/4img/4.png";
import imgPath44 from "../assets/vipimg/4img/5.png";
// 5
import imgPath51 from "../assets/vipimg/5img/2.png";
import imgPath52 from "../assets/vipimg/5img/3.png";
import imgPath53 from "../assets/vipimg/5img/4.png";
import imgPath54 from "../assets/vipimg/5img/5.png";
// 6
import imgPath61 from "../assets/vipimg/6img/2.png";
import imgPath62 from "../assets/vipimg/6img/3.png";
export default {
  name: "Header",

  data() {
    return {
      url1: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
      showOrHide: true,
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      arr: [1, 2, 3],
      navList: [
        {
          name: "",
          path: "/",
          children: [],
        },
        {
          name: "Product",
          path: "/",
          children: [
            {
              path: "/product/product1",
              title: "Charging Table",
              imgurl: require("../assets/vipimg/1img/1.png"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/1img/1.png"),
                litliTitle: "SOHO",
                imgurl: imgPath,
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/1img/2.png"),
                litliTitle: "Cocktail",
                imgurl: imgPath0,
              },
              imgdiv2: {
                litlieUrl: require("../assets/vipimg/1img/3.png"),
                litliTitle: "Bistrol",
                imgurl: imgPath01,
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/1img/4.png"),
                litliTitle: "GYPSY",
                imgurl: imgPath02,
              },
              imgdiv4: {
                litlieUrl: require("../assets/vipimg/1img/5.png"),
                litliTitle: "Lunam",
                imgurl: imgPath03,
              },
            },
            {
              path: "/product/product2",
              title: "Charging Locker",

              imgurl: require("../assets/vipimg/2img/1.1.png"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/2img/1.1.png"),
                litliTitle: "UNY Pro",
                imgurl: imgPath20,
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/2img/1.2.png"),
                litliTitle: "Oread",
                imgurl: imgPath21,
              },
              imgdiv2: {
                litlieUrl: require("../assets/vipimg/2img/1.3.png"),
                litliTitle: "Oread 8",
                imgurl: imgPath22,
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/2img/1.4.png"),
                litliTitle: "Phoca",
                imgurl: imgPath23,
              },
              imgdiv4: {
                litlieUrl: require("../assets/vipimg/2img/1.5.png"),
                litliTitle: "Pilot",
                imgurl: imgPath24,
              },
              imgdiv5: {
                litlieUrl: require("../assets/vipimg/2img/1.6.png"),
                litliTitle: "PILOT Pro",
                imgurl: imgPath25,
              },
              imgdiv6: {
                litlieUrl: require("../assets/vipimg/2img/1.7.png"),
                litliTitle: "SCENIC",
                imgurl: imgPath26,
              },
              imgdiv7: {
                litlieUrl: require("../assets/vipimg/2img/1.8.png"),
                litliTitle: "SCENIC Pro",
                imgurl: imgPath27,
              },
              imgdiv8: {
                litlieUrl: require("../assets/vipimg/2img/1.9.png"),
                litliTitle: "PILOT 16",
                imgurl: imgPath28,
              },
              imgdiv9: {
                litlieUrl: require("../assets/vipimg/2img/1.10.png"),
                litliTitle: "OREAD Pro",
                imgurl: imgPath29,
              },
              imgdiv10: {
                litlieUrl: require("../assets/vipimg/2img/1.11.png"),
                litliTitle: "Phoca",
                imgurl: imgPath301,
              },
              imgdiv11: {
                litlieUrl: require("../assets/vipimg/2img/1.12.png"),
                litliTitle: "Milestone",
                imgurl: imgPath311,
              },
              imgdiv12: {
                litlieUrl: require("../assets/vipimg/2img/1.13.png"),
                litliTitle: "Cubby 28",
                imgurl: imgPath322,
              },
            },
            {
              path: "/product/product3",
              title: "Charging Station",

              imgurl: require("../assets/vipimg/3img/1.1.png"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/3img/1.1.png"),
                litliTitle: "J-Mount",
                imgurl: imgPath30,
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/3img/1.2.png"),
                litliTitle: "Aidan",
                imgurl: imgPath31,
              },

              imgdiv2: {
                litlieUrl: require("../assets/vipimg/3img/1.3.png"),
                litliTitle: "Nadia",
                imgurl: imgPath32,
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/3img/1.4.png"),
                litliTitle: "Urban",
                imgurl: imgPath33,
              },
              imgdiv4: {
                litlieUrl: require("../assets/vipimg/3img/1.5.png"),
                litliTitle: "Columa",
                imgurl: imgPath34,
              },
              imgdiv5: {
                litlieUrl: require("../assets/vipimg/3img/1.6.png"),
                litliTitle: "Mini",
                imgurl: imgPath35,
              },
              imgdiv6: {
                litlieUrl: require("../assets/vipimg/3img/1.7.png"),
                litliTitle: "A2",
                imgurl: imgPath36,
              },
              imgdiv7: {
                litlieUrl: require("../assets/vipimg/3img/1.8.png"),
                litliTitle: "Advertiser Pro",
                imgurl: imgPath37,
              },
            },

            {
              path: "/product/product4",
              title: "Table Top Station",

              imgurl: require("../assets/vipimg/4img/2.png"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/4img/2.png"),
                litliTitle: "Barman",
                imgurl: imgPath41,
              },

              imgdiv1: {
                litlieUrl: require("../assets/vipimg/4img/3.png"),
                litliTitle: "HoQi",
                imgurl: imgPath42,
              },

              imgdiv2: {
                litlieUrl: require("../assets/vipimg/4img/4.png"),
                litliTitle: "MoQi",
                imgurl: imgPath43,
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/4img/5.png"),
                litliTitle: "Amory",
                imgurl: imgPath44,
              },
            },
            {
              path: "/product/product5",
              title: "PowerBank",

              imgurl: require("../assets/vipimg/5img/2.png"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/5img/2.png"),
                litliTitle: "Tank",
                imgurl: imgPath51,
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/5img/3.png"),
                litliTitle: "Liberté",
                imgurl: imgPath52,
              },
              imgdiv2: {
                litlieUrl: require("../assets/vipimg/5img/4.png"),
                litliTitle: "CUBE",
                imgurl: imgPath53,
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/5img/5.png"),
                litliTitle: "CUBE mini",
                imgurl: imgPath54,
              },
            },
            {
              path: "/product/product6",
              title: " Out Door",

              imgurl: require("../assets/vipimg/6img/2.png"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/6img/2.png"),
                litliTitle: "JANITOR",
                imgurl: imgPath61,
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/6img/3.png"),
                litliTitle: "SUNFLOWER",
                imgurl: imgPath62,
              },
            },
          ],
        },
        {
          name: "Internet Of Things ",
          path: "/",
          children: [
            {
              title: "IoT Power  Bank",

              imgurl: require("../view/Internet/img/1.jpg"),
              path: "/internet/internet1",

              imgdiv: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "SOHO",
              },
              imgdiv1: {
                litliTitle: "Cocktail",
              },
              imgdiv2: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Bistrol",
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "GYPSY",
              },
              imgdiv4: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Lunam",
              },
            },
            {
              title: "IoT Charging Locker ",

              path: "/internet/internet2",
              imgurl: require("../view/Internet/img/2.jpg"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "UNY Pro",
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Oread",
              },
              imgdiv2: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Oread 8",
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Phoca",
              },
              imgdiv4: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Pilot",
              },
              imgdiv5: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "PILOT Pro",
              },
              imgdiv6: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "SCENIC",
              },
              imgdiv7: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "SCENIC Pro",
              },
              imgdiv8: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "PILOT 16",
              },
              imgdiv9: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "OREAD Pro",
              },
              imgdiv10: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Phoca",
              },
              imgdiv11: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Milestone",
              },
              imgdiv12: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Milestone",
              },
            },
            {
              title: "IoT Charging Table",

              path: "/internet/internet3",
              imgurl: require("../view/Internet/img/3.jpg"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "J-Mount",
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Aidan",
              },

              imgdiv2: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Nadia",
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Urban",
              },
              imgdiv4: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Columa",
              },
              imgdiv5: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Mini",
              },
              imgdiv6: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "A2",
              },
              imgdiv7: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Signage Charging Station",
              },
            },

            {
              title: "IoT Charging Station",

              path: "/internet/internet4",
              imgurl: require("../view/Internet/img/4.jpg"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Barman",
              },

              imgdiv1: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "HoQi",
              },

              imgdiv2: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "MoQi",
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Amory",
              },
            },
            {
              title: "IoT Table Top Power",

              path: "/internet/internet5",
              imgurl: require("../view/Internet/img/5.jpg"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Tank",
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Liberté",
              },
              imgdiv2: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "CUBE",
              },
              imgdiv3: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "CUBE mini",
              },
            },
            {
              title: "IoT Charging Station",

              path: "/internet/internet6",
              imgurl: require("../view/Internet/img/6.jpg"),
              imgdiv: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "Barman",
              },
              imgdiv1: {
                litlieUrl: require("../assets/vipimg/56d612d04b0d3ccdbf0209ba6abd82f.png"),
                litliTitle: "HoQi",
              },
            },
          ],
        },

        {
          name: "",
          path: "/software",
          children: [
            {
              title: "",
              title1: "",
            },
          ],
        },
      ],
      mounted() {
        // 事件监听滚动条
        window.addEventListener("scroll", this.watchScroll);
      },

      destroyed() {
        // 移除事件监听
        window.removeEventListener("scroll", this.watchScroll);
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      console.log(scrollTop, "=?scrollTop");
      // let offsetTop = document.querySelector('#header11 ').offsetTop;
      if (scrollTop > 24) {
        document.querySelector("#header11 ").style.position = "fixed";
        document.querySelector("#header11 ").style.zIndex = 9000000;
        document.querySelector("#header11 ").style.top = "0";
        document.querySelector("#header11 ").style.width = "100%";
        document.querySelector("#header11 ").style.backgroundColor = "black";
        document.querySelector("#header11 ").style.padding = "0px 345px";
        console.log("上");
      } else {
        console.log("下");
        document.querySelector("#header11 ").style.position = "";
        document.querySelector("#header11 ").style.top = "";
        document.querySelector("#header11 ").style.width = "";
        document.querySelector("#header11 ").style.backgroundColor = "";
        document.querySelector("#header11 ").style.padding = "0px 2px";
      }
    });
  },
  watch: {
    
    $route(to, from) {
      // alert(from.path); // 从哪来
      // alert(to.path); // 到哪去
        this.showOrHide=false
    },
  },
  methods: {
    ho() {
      this.$router.push("@/view/HomePage");
    },
    // 小标点击
    soho(path) {
      this.$router.push(path);
    },
    change3() {
      this.$router.push("/internet/download");
    },
    change1() {
      this.$router.push("/internet/getstarted");
    },
    change2() {
      this.$router.push("/internet/instruction");
    },

    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = name;
    },

    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
    mouseover(e) {
      this.showOrHide=true
      // console.log(e.target.children[1].offsetHeight);
      // var gao = 0;
      // e.target.children[1].childNodes.forEach((item) => {
      //   if (gao < item.offsetHeight - 0) {
      //     gao = item.offsetHeight;
      //   }
      // });
      // //  console.log( gao)
      // e.target.children[1].offsetHeight ? parseInt(gao) + 20 + "px" : "0px";
    },
    internetClick(path) {
      this.$router.push(path);
    },
    // 移入切换图片
    changeImg(imgUrl, index) {
      console.log(index);
      this.navList[1].children[index].imgurl = imgUrl;
    },
    //  移入点击跳转
    imgtz(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
body {
  height: 100%;
  width: 100%;
  background: #030303;
}

/* 顶部 */
#header {
  /* background: red; */
  background: #030303;
  transition: all ease 0.3s;
}
#header .header-top {
  /* height: 50px; */
  color: #fff;
  font-size: 12px;
  background: #2e2e2e;
}
/* 顶部的图标 */
#header .header-top img {
  /* width: 16px;
  height: 17px; */
  display: inline-block;
  margin-right: 20px;
}
/* 导航栏 */
#header .header-nav {
  padding-left: 5px;
  height: 96px;
}
.buttom1 {
  height: 35px;
  width: 380px;
  background-color: #808080;
  color: white;
  line-height: 35px;
  font-weight: bold;
}
.buttom2 {
  height: 35px;
  width: 380px;
  color: white;
  background-color: #808080;
  line-height: 35px;
  font-weight: bold;
}
.buttom3 {
  height: 35px;
  width: 380px;
  color: white;
  background-color: #808080;
  line-height: 35px;
  font-weight: bold;
}
/* 鼠标移入变色 */
.buttom1:hover {
  background: #ffffff;
  color: black;
}
.buttom2:hover {
  background: #ffffff;
  color: black;
}
.buttom3:hover {
  background: #ffffff;
  color: black;
}
/* 导航栏吸顶 */

/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  /* margin-left: 15px; */
  position: relative;
  display: flex;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 140px;
  height: 33px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding-left: 15px;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: auto;
}
#header .header-nav .header-nav-wrapper {
  line-height: 100px;
  float: right;
  padding-right: 55px;
  max-width: 800px;
  margin-top: -15px;
  /* border-bottom: 1px solid #7b7b7b; */
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin-left: 90px;
  /* height: 100px; */
  /* position: relative; */
  /* width: 100px; */
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #474747;
  font-size: 15px;
  font-weight: bold;
  padding: 40px 0;
  position: relative;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.3s ease;
  background-color: white;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.3s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  padding: 100px 1px;
  color: white;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  /* opacity: 1;
  width: 100%;
  left: 0; */
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #fff;
}
#header .header-nav .header-nav-wrapper > active {
  margin-bottom: 100px;
}

/* 导航栏 每个导航下面的二级导航容器 */

#header .header-nav .header-nav-wrapper > li > div {
  overflow: auto;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: 88%;
  background: black;
  height: 800px;
  top: 70px;
  left: 0px;
  padding: 100px 25px;
  margin-left: 105px;
  z-index: 99999999999;
}
/* 滚动条 */
/*滚动条整体宽度*/
#header .header-nav .header-nav-wrapper > li > div::-webkit-scrollbar {
  width: 5px; /*宽对应滚动条的尺寸*/
}
/*轨道*/
#header .header-nav .header-nav-wrapper > li > div::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/*滑块*/
#header .header-nav .header-nav-wrapper > li > div::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #c1c1c1;
}
/* 滚动条 */
#header .header-nav .header-nav-wrapper > li > .new2 {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: 100%;
  background: black;
  /* height: 900px; */
  top: 135px;
  left: 0px;
  z-index: 99999999999;
}
#header .header-nav .header-nav-wrapper > li > div > dl {
  /* visibility: auto; */
  opacity: 0;
  width: 180px;
  /* width: 238px; */
  height: 230px;
  margin: 0 6px;
  z-index: 9999999999900000;
  border: none;
  background: black;
}
/* 下部字体 */

/* 导航栏 每个导航下面的二级导航容器的每个导航 */
/* product1 */
#header .header-nav .header-nav-wrapper > li > div > .dl0 .zzz {
  padding: 8px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 .zzz a {
  font-size: 20px;
  padding: 15px 15px;
  font-weight: bold;
  color: #fed71a;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 .zzz:hover {
  background-color: #fed71a;
  border-radius: 0px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 .zzz a:hover {
  color: #fff;
}
/* 图片 */
#header .header-nav .header-nav-wrapper > li > div > .dl0 dt img {
  width: 180px;
  height: 230px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 dt:hover {
  background-color: #ffffff;
}
/* 字标体开始 */
#header .header-nav .header-nav-wrapper > li > div > .dl0 .baise a {
  font-family: Arial;
  font-size: 14px;
}

#header .header-nav .header-nav-wrapper > li > div > .dl0 .baise {
  margin-top: 8px;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
  background-color: #0c0b0c;
}
#header .header-nav .header-nav-wrapper > li > div > .dl .baise a {
  text-decoration: none;
  text-align: center;
  font-weight: lighter;
  font-size: 18px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl .baise:hover {
  background-color: #fed71a;
  text-decoration: none;
}
/* 字体 */
#header .header-nav .header-nav-wrapper > li > div > .dl0 .baise {
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 .baise a {
  text-decoration: none;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 .baise:hover {
  background-color: #fed71a;
}
/*结束 */
/* product2 */
#header .header-nav .header-nav-wrapper > li > div > .dl1 .zzz {
  padding: 8px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .zzz a {
  font-size: 20px;
  padding: 10px 10px;
  font-weight: bold;
  color: #e83016;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .zzz:hover {
  background-color: #e83016;
  border-radius: 0px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .zzz a:hover {
  color: #fff;
}
/* 图片 */
#header .header-nav .header-nav-wrapper > li > div > .dl1 dt img {
  width: 180px;
  height: 230px;
  /* border: 3px solid #e83015; */
}
/* 字标体开始 */
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise a {
  font-family: Arial;
  font-size: 14px;
}

#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise {
  padding: 10px 0;
  margin-top: 8px;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
  background-color: #0c0b0c;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise a {
  text-decoration: none;
  text-align: center;
  font-weight: lighter;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise:hover {
  background-color: #e83016;
  text-decoration: none;
}
/* 字体 */
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise {
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise a {
  text-decoration: none;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise:hover {
  background-color: #e83016;
}
/*结束 */
/* product3 */
#header .header-nav .header-nav-wrapper > li > div > .dl2 .zzz {
  padding: 8px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .zzz a {
  font-size: 20px;
  padding: 8px 8px;
  font-weight: bold;
  color: #495c69;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .zzz:hover {
  background-color: #495c69;
  border-radius: 0px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .zzz a:hover {
  color: #fff;
}
/* 图片 */
#header .header-nav .header-nav-wrapper > li > div > .dl2 dt img {
  width: 180px;
  height: 230px;
  /* border: 3px solid #495c69; */
}
/* 字标体开始 */
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise a {
  font-family: Arial;
  font-size: 14px;
}

#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise {
  padding: 10px 0;
  margin-top: 8px;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
  background-color: #0c0b0c;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise a {
  text-decoration: none;
  text-align: center;
  font-weight: lighter;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise:hover {
  background-color: #495c69;
  text-decoration: none;
}
/* 字体 */
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise {
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise a {
  text-decoration: none;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise:hover {
  background-color: #495c69;
}

/*结束 */
/* product4 */
#header .header-nav .header-nav-wrapper > li > div > .dl3 .zzz {
  padding: 8px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .zzz a {
  font-size: 20px;
  padding: 5px 5px;
  font-weight: bold;
  color: #36563c;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .zzz:hover {
  background-color: #36563c;
  border-radius: 0px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .zzz a:hover {
  color: #fff;
}
/* 图片 */
#header .header-nav .header-nav-wrapper > li > div > .dl3 dt img {
  width: 180px;
  height: 230px;
  /* border: 3px solid #36563c; */
}
/* 字标体开始 */
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise a {
  font-family: Arial;
  font-size: 14px;
}

#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise {
  padding: 10px 0;
  margin-top: 8px;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
  background-color: #0c0b0c;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise a {
  text-decoration: none;
  text-align: center;
  font-weight: lighter;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise:hover {
  background-color: #36563c;
  text-decoration: none;
}
/* 字体 */
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise {
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise a {
  text-decoration: none;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise:hover {
  background-color: #36563c;
}
/* 结束 */
/* product4 */
#header .header-nav .header-nav-wrapper > li > div > .dl4 .zzz {
  padding: 8px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .zzz a {
  padding: 58px 30px;
  font-size: 20px;
  font-weight: bold;
  color: #86a697;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .zzz:hover {
  background-color: #86a697;
  border-radius: 0px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .zzz a:hover {
  color: #fff;
}
/* 图片 */
#header .header-nav .header-nav-wrapper > li > div > .dl4 dt img {
  width: 180px;
  height: 230px;
  /* border: 3px solid #86a697; */
}
/* 字标体开始 */
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise a {
  font-family: Arial;
  font-size: 14px;
}

#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise {
  padding: 10px 0;
  margin-top: 8px;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
  background-color: #0c0b0c;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise a {
  text-decoration: none;
  text-align: center;
  font-weight: lighter;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise:hover {
  background-color: #86a697;
  text-decoration: none;
}
/* 字体 */
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise {
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise a {
  text-decoration: none;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise:hover {
  background-color: #86a697;
}
/* 结束 */
/* product5 */
#header .header-nav .header-nav-wrapper > li > div > .dl5 .zzz {
  padding: 8px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .zzz a {
  font-size: 20px;
  font-weight: bold;
  padding: 58px 17px;
  color: #22a2c3;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .zzz:hover {
  background-color: #22a2c3;
  border-radius: 0px;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .zzz a:hover {
  color: #fff;
}
/* 图片 */
#header .header-nav .header-nav-wrapper > li > div > .dl5 dt img {
  width: 180px;
  height: 230px;
  /* border: 3px solid #22a2c3; */
}
/* 字标体开始 */
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise a {
  font-family: Arial;
  font-size: 14px;
}

#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise {
  padding: 10px 0;
  margin-top: 8px;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
  background-color: #0c0b0c;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise a {
  text-decoration: none;
  text-align: center;
  font-weight: lighter;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise:hover {
  background-color: #22a2c3;
  text-decoration: none;
}
/* 字体 */
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise {
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #2e2e2e;
  border-right: 1px solid #2e2e2e;
  border-bottom: 1px solid #2e2e2e;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise a {
  text-decoration: none;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise:hover {
  background-color: #22a2c3;
}
#header .header-nav .header-nav-wrapper > li > div > .dl0 .baise a:hover {
  color: #fff;
}
#header .header-nav .header-nav-wrapper > li > div > .dl1 .baise a:hover {
  color: #fff;
}
#header .header-nav .header-nav-wrapper > li > div > .dl2 .baise a:hover {
  color: #fff;
}
#header .header-nav .header-nav-wrapper > li > div > .dl3 .baise a:hover {
  color: #fff;
}
#header .header-nav .header-nav-wrapper > li > div > .dl4 .baise a:hover {
  color: #fff;
}
#header .header-nav .header-nav-wrapper > li > div > .dl5 .baise a:hover {
  color: #fff;
}
/* 结束 */

/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > div > dl > dt > a {
  padding: 30px 30px;
  font-family: Arial;
  font-size: 18px;
  color: white;
}
#header .header-nav .header-nav-wrapper > li > div > dl > dt > a:hover {
  color: #0c0b0c;
  font-family: Arial;
  text-decoration: none;
}

/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover div {
  opacity: 1;
  visibility: visible;
  /*将元素设为可见*/
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  padding-top: 35px;
}
#header .header-nav .header-nav-wrapper > li:hover .div1 {
  opacity: 1;
  visibility: visible;
  /*将元素设为可见*/
  transition: all 0.3s;
  display: flex;
  justify-content: end;
}
#header .header-nav .header-nav-wrapper > li:hover .div1 > dl {
  margin-right: 350px;
}
#header .header-nav .header-nav-wrapper > li:hover dl {
  opacity: 1;
  visibility: visible;
  /*将元素设为可见*/
  transition: all 2s;
}

.imgDiv {
  width: 180px;
  height: 220px;
  background-color: #000000;
  /* box-shadow: 10px 10px 20px rgb(146, 145, 145); */
}
.header-nav-wrapper img {
  width: 180px;
  height: 220px;

  /* box-shadow: 10px 10px 20px rgb(146, 145, 145); */
}


.Homeyiru a{
  font-size: 15px;
  font-weight: bold;
  color:#fff
}
.elxiao{
  color:black;
  font-weight: bold;
  background-color:#FFF;
}
</style>