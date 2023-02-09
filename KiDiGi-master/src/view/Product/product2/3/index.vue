<template>
  <div id="JobChance">
    <div class="JobChance wow pulse">
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img src="./img/1.png" alt="" style="width:auto"></div>
      <div class="zt col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <h1>PRODUCTION INFORMATION</h1>
        <h2>SPECIFICATION</h2>
        <p>Model: SCL-03R</p>
        <p>Material: COLD ROLLED SHEET, PMMA</p>
        <p>Colour: Black</p>
        <p>Output: 8pin 5V/2.1A x 8 Micro USB 5V/2.1Ax 8 Type-C 5V/2.1Ax 8</p>
        <p>Input: AC 100-240V/1.6A</p>
        <p>Gross Weight: 23KG</p>
        <p>Size: 485 x 220 x 617mm</p>
        <p>Weight: 28KG</p>
        <p>Size: 585 x 295 x 755mm</p>
        <br/><br/>
        <h2>PACKAGING:</h2>
        <p>1. Elastic 3-in-1 charging cable.</p>
        <p>2. Customizable advertisement.</p>
        <p>3. Generate revenue, payback investment and to subsidise maintenance costs.</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/12.jpg" alt="单品" />
      </div>
      </div>
    <!-- 单个介绍 -->
    <div class="" style="width:100%">
     
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
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/9.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/10.jpg" alt="单品" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow slideInUp">
        <img class="img-responsive" src="./img/11.jpg" alt="单品" />
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
.zt h1{
  color: rgb(255, 255, 255);
}
.zt h2{
  color: rgb(255, 255, 255);
}
.zt p{
  color: rgb(255, 255, 255);
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