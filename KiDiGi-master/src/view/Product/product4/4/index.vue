<template>
  <div id="JobChance">

    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:30px">
      
      <div class="JobChance-container wow pulse">
    
      <div class="cp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <h1>
Amory Charging Station</h1>
        <p>Charge 8 device at a time.</p>
       <h1>Amory Charging Station
Charge 8 device at a time.</h1>
        <p>KIDIGI AMORY. IT Desktop Charging Station (UB-06 ) is a great and powerful solution for Multi-device users. It makes this the perfect fit for desk, table, and countertops. It supports simultaneous charging of 8 devices at the same time and a AC Power outlet to meet the requirements of household appliances. Comes with industrial-grade retractable cable (3x Apple lightning cable for iPhone 5 and newer devices, 2x Type-C for Android devices, 1x Micro USB cable for Android devices and e-cigarette ) with fast charging and 1x Qi 10W wireless charging pad for the latest devices. The custom-branded areas can be custom branded to display your company’s or sponsor’s marketing. This unit is everything you need to help draw and engage customers, new and old. Deliver value to customers and prospects in the form of free mobile charging, while advertising your business at the same time.</p>
      </div>
      <div class="tp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/1.png" alt="">
      </div>
</div>
      <!-- 图片 -->
       <div class="zz container wow slideInUp">
        <img class="img-responsive" src="./img/2.jpeg" alt="单品" />
      </div>
        
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  name: "soho",
  data() {
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>


<style scoped>
.zz img{
    width: 100%;
}
.bg div{
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.bg p h2{
  color:white
}

.ren p{
  
  font-size: 16px;
  color: black;
}

.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;

  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.JobChance-container {
  margin: 100px;
  padding: 10px;
  transition: all ease 0.5s;
  border: 1px dashed white;
}
.JobChance-container h2 {
  color: black;
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p {

  color: black;
  font-size: 16px;
}
.cp{
  margin-top: 30px;
  margin-bottom: 30px;
}
.tp img{
width: 500px;
height: auto;
}

.table tr{
  border: 1px solid rgb(192, 189, 189);
}
table tr:nth-child(2n-1){
  background-color:rgb(228, 225, 225)
}
table td{
  font-size: 18px;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>