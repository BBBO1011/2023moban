<template>
  <div id="ContactUs">
    
    <div class="banner container-fuild text-center">
      <h1>Contact Us</h1>
      <h4>We’re here to help.</h4>
    </div>
  
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h1>Hong Kong</h1>
            <p>Room 1501, Millennium City 5, 418 Kwun Tong Road, Kwun Tong,</p>
            <p>Hong Kong</p> <br/>
            <p>info @ kidigi.com</p>
            <p>+852 2165 4755</p> <br/>
            <h1>China</h1>
            <p>Mingxi Creative Park, Fuyong Street, Baoan District, Shenzhen, 518103</p>
  <div class="xb" style="disply:flex;">
    <a href="https://www.facebook.com/KiDiGi/"><span class="zz glyphicon glyphicon-earphone"></span></a>
    <a href="http://instagram.com/kidigi_official/"><span class="zz glyphicon glyphicon-envelope"></span></a>
    <a href="http://hk.linkedin.com/company/kidigi-company-limited"><span class="zz glyphicon glyphicon-time"></span></a>
    <a href="https://twitter.com/Kidigiofficial"><span class="zz glyphicon glyphicon-expand"></span></a>
    <a href="https://www.youtube.com/KiDiGiTV"><span class="zz glyphicon glyphicon-expand"></span></a>
  </div>

          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
import BMap from "BMap";
export default {
  name: "contact",
  data() {
    return {};
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(343227.00,1085525.00); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "China" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "China",
      opts
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.xb .zz{
  margin: 5px 5px;
}
.banner {
  color: black;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
 
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.banner h1{
  font-weight: 16px;
  font-weight: bold;
}
.xb ul{

}

.ContactUs-container {
  transition: all ease 0.5s;
  box-sizing: border-box;
   padding: 100px;
  padding-bottom: 300px;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

