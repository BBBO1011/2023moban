<template>
  <div id="JobChance">
   
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:30px">
      <div class="JobChance-container wow pulse">
    
      <div class="cp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <h1>Liberté PowerBank Combo</h1>
        <p>Best Solution for Hospitality.</p>
       <h1>Liberté PowerBank Combo
A Master Piece of Power</h1>
        <p>The LIBERTE Power bank Charging Station is the perfect charging solution that lets your guests charge their phones without having to be tied to a wall outlet. This model includes a total of four 10,000mAh battery packs, each with two secured cable. The battery packs are recharged when they are returned to the included dock.</p>
      </div>
      <div class="tp col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/1.png" alt="">
      </div>
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
         <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/8.jpg" alt="单品" />
      </div>
         <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/9.jpg" alt="单品" />
      </div>
   
         <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/10.jpg" alt="单品" />
      </div>
               <div class="bg">
        <div class="ren col-xs-12 col-sm-12 col-md-6">
          <h1>PRODUCT INFORMATION</h1>
          <h2>Specification and</h2>
          <h2>Shipping Packing Information.</h2>

      <table class="table table-bordered">
<tr>
  <td class="active">MODEL:	</td>
  <td class="success"> PC-21</td>
</tr>
<tr>
  <td class="active">MATERIAL:</td>
  <td class="success">	ABS PLASITC</td>
</tr>
<tr>
  <td class="active">COLOUR:</td>
  <td class="success">	BLACK</td>
</tr>
<tr>
  <td class="active"></td>
  <td class="success">BASE STATION</td>
</tr>
<tr>
  <td class="active">INPUT:</td>
  <td class="success">AC 110~240V</td>
</tr>
<tr>
  <td class="active">OUTPUT:</td>
  <td class="success">4 x 5V/1A</td>
</tr>
<tr>
  <td class="active"></td>
  <td class="success">POWERBANK</td>
</tr>
<tr>
  <td class="active">CAPACITY:</td>
  <td class="success">10000mAh / 37Wh (Battery Cell)</td>
</tr>
<tr>
  <td class="active">INPUT:</td>
  <td class="success">DC 5V/2.1A</td>
</tr>
<tr>
  <td class="active">OUTPUT:</td>
  <td class="success">USB Port 5V / 2.1A(Max)
                      8-pin Cable 5V/2.1A(Max)
                      Type-C Cable 5V/2.1A(Max)</td>
</tr>
</table>
</div>
</div>
<h2>FEATURES:</h2>
<p>1. Support Android, iPhones and Tablet.</p>
<p>2. Charge 4 powerbank simultaneously.</p>
<p>3. Custom branding or marketing.</p>

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
.an button{
    border: 2px solid black;
    line-height: 50px;
    border-radius: 35%;
    text-align: center;
    margin-left: 200px;
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
width: 350px;
height: auto;
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