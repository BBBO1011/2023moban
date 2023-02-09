<template>
  <div id="JobChance">
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom: 30px">
      <div class="JobChance-container wow pulse">
        <h2>Cocktail Table Charging Station</h2>
        <p>
          KIDIGI COCKTAIL Charging Table (CT-06) is a furniture charging station
          ideal for lounging areas,restaurants, bars, trade shows, and retail
          locations.
        </p>
        <p>
          It comes with six tamper-proof, industrial-grade braided cables (2x
          Apple lightning cables for iPhone 5 and newer, 2x Micro-USB, 2x Type-C
          cables for Android devices) with fast charging and a Qi wireless
          charging pad (iPhone 11, Galaxy S20) for the latest devices. It’s made
          with durable, industrial-grade materials to ensure it will endure
          frequent use. The side panel and tabletop can be custom branded to
          promote your marketing.
        </p>
        <p>Material: SPCC, PMMA</p>
        <p>Colour : Black</p>
        <p>Input : A/C 100-240V~50/60Hz</p>
        <p>Output 1 : Lightning :5V / 1.5A x 2</p>
        <p>Output 2 : Type-C : 5V / 1.5A x 2</p>
        <p>Output 3 : Micro USB 5V / 1.5A x 2</p>
        <p>Output 4 : Micro USB 5V / 1.5A x 2</p>
        <p>Weight : 26.6 KG</p>
        <p>Size : 590 x 590 x 1100mm</p>
        <p>Custom wraps or decals are available</p>
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

      <!-- 产品数据 -->
      <div class="bg">
        <div class="ren col-xs-12 col-sm-12 col-md-6">
          <h2>Specification and</h2>
          <h2>Shipping Packing Information.</h2>

      <table class="table table-bordered">
<tr>
  <td class="active">Material</td>
  <td class="success">	SPCC, PMMA</td>
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
  <td class="success">3-in-1 Lightning/ Type-C / Micro-USB</td>
</tr>
<tr>
  <td class="active"></td>
  <td class="success">4 x 5V / 1.5A</td>
</tr>
<tr>
  <td class="active">Weight</td>
  <td class="success">21.5KG</td>
</tr>
<tr>
  <td class="active">Dimension</td>
  <td class="success">	599 x 1080mm</td>
</tr>
<tr>
  <td class="active">Package Weight</td>
  <td class="success">22.5KG</td>
</tr>
</table>
        </div>
      </div>
      <!-- 表单结束 -->
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
.bg div {
  height: 100%;
}
.bg p h2 {
  color: white;
}

.ren p {
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
  background: url(./img/1.jpg) no-repeat;
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
  text-align: center;
  color: black;
  font-size: 16px;
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
</style>