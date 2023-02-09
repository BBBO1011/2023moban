<template>
  <div id="JobChance">
   
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:30px">
      <div class="JobChance-container wow pulse">
        <p>MINI for enough for everyone to charge at tiny space.</p>
        <h1>MINI Charging Station.</h1>
        <p>KIDIGI MINI Charging Station (WM-02 ) is a furniture charging station that can be installed on the wall. It can be charged for up to 4 devices. There are suitable interfaces and powerful output to satisfy mobile phones. Ideal for Airport waiting room, Cruise ship, Library, University, School, Hotel, GYM house, Clinic, Hospital, Private clubs, Shopping Mall, and Resort lounging areas.</p>
      </div>
      <div class="cp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <p>Is Portable.</p>
        <h3>
It comes with four tamper-proof, industrial-grade braided cables (2x Apple lightning cables for iPhone 5 and newer, 2x 2 in 1 Type-C and Micro-USB cables for Android devices and e-cigarettes) with fast charging. It’s made with durable, industrial-grade materials to ensure it will endure frequent use. The top side with LED lighting highlights can be custom branded to promote your marketing. Material: ABS & PMMA Colour: Black Input: A/C 100-240V~50/60Hz Output 1: Apple Lightning. Connector 5V / 2.4Ax 2 Output 2: 2 in 1 Type-C & Micro USB Connector 5V / 2.4Ax 2 Size: 250 x 350 x 74 mm Packaging Weight: 2.6 KG Size: 530 x 165 x 385 mm Custom wraps or decals available.</h3>
        <p>
Comes with 4 Power Outlet and 4 USB Port with fast charging. It’s made with durable, industrial-grade materials to ensure it will endure frequent use. The top and side panels can be customized to promote your marketing and attract your target customers.</p>
      </div>
      <div class="tp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/2.png" alt="">
       <a href="sales@kidigi.com"><button>Email</button></a> 
        <a href=""><button>Alibaba</button></a>
      </div>

      <!-- 图片 -->

      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
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
        <h2>SPECIFATIONS:</h2>
        <p>MODEL WM-02</p>
        <p>MATERIAL: PMMA, ABS</p>
        <p>COLOUR: BLACK</p>
        <p>OUTPUT: DC5V/1.5A*4</p>
        <p>INPUT: AC 100-240V~50/60HZ 1.6A</p>
     
        <h2>FEATURES:</h2>
        <p>1.LED lighting highlights your advertisement.</p>
        <p>2. Charge up to 4devices, it will reliably charge up to 4 mobile devices simultaneously.</p>
        <p>3. Features a large lip space for patrons to place their device while charging.</p>
        <p>4. Customizable Advertisement</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/7.jpg" alt="单品" />
      </div>

      <div class="bg">
        <div class="ren col-xs-12 col-sm-12 col-md-6">
          <h2>Specification and</h2>
          <h2>Shipping Packing Information.</h2>

      <table class="table table-bordered">
<tr>
  <td class="active">Material</td>
  <td class="success"> ABS Plastic</td>
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
  <td class="success">4 x Lightning/ Type-C / Micro-USB 5V / 2.1A</td>
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