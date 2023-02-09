<template>
  <div id="JobChance">

    
   
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:30px">
      <div class="JobChance-container wow pulse">
        <p>Iconic charging station in the public place.</p>
        <h1>GYPSY Charging Table</h1>
        <p>The GYPSY Charging Table is a furniture charging station ideal for lounging areas,</p>
        <p>restaurants, bars, schools, trade shows, and retail locations. Comes with 6 tamper-proof,</p>
        <p>industrial-grade braided cables (2x Apple lightning cables for iPhone 5 and newer, 2x Micro-</p>
        <p>USB, 2x Type-C cables for Android devices) with fast charging and a Qi wireless charging pad</p>
        <p>(iPhone 11, Galaxy S20) for the latest devices.</p>
      </div>
      <div class="cp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <p>Is Portable.</p>
        <h3>Iconic Power</h3>
        <h3>Promote your commercial.</h3>
        <p>No need to limit yourself to one design!</p>
        <p>You can order an unlimited amount of signage and easily swap the artwork to highlight different promotions.</p>
      </div>
      <div class="tp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/2.jpg" alt="">
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
        <img class="img-responsive" src="./img/7.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/8.jpg" alt="单品" />
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