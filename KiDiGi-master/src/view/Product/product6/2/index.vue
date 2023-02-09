<template>
  <div id="JobChance">
   
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:60px">
      <h1>PHOCA Charging Locker</h1>
      <div class="cp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <p>Pin-Code system for easy access and management.</p>
        <h1>PHOCA,</h1>
        <h1>A Multi-Language Charging Locker.</h1>
        <p>It’s more technologically advanced and utilizes a multi-language assistant to guide through the string and retrieving process. Perfect for</p>
        <p>storing all valuables including wallets, keys and cameras. Pin code keypad eliminates lost keys for guests.</p>
      </div>
      <div class="tp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/1.jpg" alt="">
      
      </div>

      <!-- 图片 -->

      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/2.jpg" alt="单品" />
      </div>
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
    
    
      <!-- 数据1 -->
      
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/8.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
 <div class="bg">
        <div class="ren col-xs-12 col-sm-12 col-md-6">
          <h1>PRODUCT INFORMATION</h1>
          <h1>PRODUCT INFORMATION</h1>
      <table class="table table-bordered">
<tr>
  <td class="active">MODEL:</td>
  <td class="success">SF-01R</td>
</tr>
<tr>
  <td class="active">MATERIAL:</td>
  <td class="success">ABS+PC.LEATHER</td>
</tr>
<tr>
  <td class="active">COLOUR:</td>
  <td class="success">	BLACK</td>
</tr>
<tr>
  <td class="active">INPUT:</td>
  <td class="success">36W</td>
</tr>
<tr>
  <td class="active">BATTERY CAPACITY:</td>
  <td class="success">5000mAh</td>
</tr>
<tr>
  <td class="active">OUTPUT:</td>
  <td class="success">8-PIN DC 5V / 2.1A
2 in 1 Type C + Micro USB DC 5V / 2.1A</td>
</tr>
<tr>
  <td class="active">GROSS WEIGHT:	</td>
  <td class="success">6KG</td>
</tr>
<tr>
  <td class="active">SIZE:</td>
  <td class="success">320 x 320 x 60mm</td>
</tr>
</table>

<h2>PACKAGING:</h2>
 <table class="table table-bordered">
<tr>
  <td class="active">WEIGHT:</td>
  <td class="success">7KG</td>
</tr>
<tr>
  <td class="active">SIZE:</td>
  <td class="success">540 x 130 x 360 mm</td>
</tr>
</table>

<h2>FEATURES</h2>
<p>1.Charge up to 10 iPhones per day even without sunlight.</p>
<p>2. Customizable Advertisement</p>

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
  height: 700px;
  border: 1px solid black;
}
.bg p h2{
  color:white
}

.ren p{
  font-size: 16px;
  color: black;
}
.ren h1{
  text-align: center;
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