<template>
  <div id="JobChance">
   
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:30px">
      <div class="JobChance-container wow pulse">
        <p>NADIA Public Charging Kiosk</p>
        <h1>AIDAN Cloud Charging Kiosk.</h1>
        <p>KIDIGI AIDAN Cloud Kiosk Charging Station (CK-02 ) is a furniture charging station can be installed on the ground. It have two Industrial Grade High Quality 21.5″ HD LCD Display, build in Android system and support drag and drop, easy to manage your advertisement over the internet.</p>
      </div>
      <div class="cp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <p>Sinage Charging Kiosk.</p>
        <h3>Perfect Spot in Public Place
Promote your commercial.</h3>
        <p>It comes with ten tamper-proof, industrial-grade braided cables ( Apple lightning cables for iPhone 5 and newer 5. 2 in 1 Type- for Android and Micro-USB for Android devices and e-cigarettes) with fast charging. It’s made with durable, industrial-grade materials to ensure it will endure frequent use. The side panels and desktop illuminated advertising boards can be customized to promote your marketing and attract your target customers.</p>
        <p>Material: SPCC. PMMA
Colour: Black, Silver
input: A/C 100-240V-50/80H2 Output 1 | Apple Lightning Connector 5V / 2.4A x5 Output 2 1 2 in 1 Type-© & Micro USB Connector 5V / 2.44 x5 Output 3 1 AG Power Outlet 110-240V 3A x2
Size: 1460 450 x 580 mm
Packaging Weight： 111 KO
Packaging Size: 1540 x650 x550 mm
Guntom wraps or decals available</p>
      </div>
      <div class="tp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/2.png" alt="">
       <a href="sales@kidigi.com"><button>Email</button></a> 
        <a href=""><button>Alibaba</button></a>
      </div>

      <!-- 图片 -->

      <div class="container wow slideInUp" style="width:1110px">
        <img class="img-responsive" src="./img/3.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/4.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/5.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/6.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/7.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/8.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/9.jpg" alt="单品" />
      </div>

      <div class="bg">
        <div class="ren col-xs-12 col-sm-12 col-md-6">
          <h2>Specification and</h2>
          <h2>Shipping Packing Information.</h2>

      <table class="table table-bordered">
<tr>
  <td class="active">Material</td>
  <td class="success">	Metal , ABS Plastic</td>
</tr>
<tr>
  <td class="active">Colour</td>
  <td class="success">	Black</td>
</tr>
<tr>
  <td class="active">Input</td>
  <td class="success">	A/C 100-240V~50/60Hz</td>
</tr>
<tr>
  <td class="active">Output</td>
  <td class="success">8 x Lightning/ Type-C / Micro-USB 5V / 2.1A</td>
</tr>
<tr>
  <td class="active">Weight</td>
  <td class="success">KG</td>
</tr>
<tr>
  <td class="active">Dimension</td>
  <td class="success"></td>
</tr>
<tr>
  <td class="active">Package Size</td>
  <td class="success"></td>
</tr>
</table>

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
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>


<style scoped>
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
#JobChance {
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
width: auto;
height: 300px;
}
.tp button{
  width: 100px;
  height: 30px;
  color: black;
  border: 2px solid black;
  border-radius: 30px;
  margin: 10px 60px;
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