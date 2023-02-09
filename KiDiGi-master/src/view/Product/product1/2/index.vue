<template>
  <div id="JobChance">
   
    <!-- 单个介绍 -->
    <div class="container" style="margin-bottom:30px">
      <div class="JobChance-container wow pulse">
        <h2>Cocktail Table Charging Station</h2>
        <p>
          KIDIGI COCKTAIL Charging Table (CT-06) is a furniture charging station ideal for lounging areas,restaurants, bars, trade shows, and retail locations.
        </p>
        <p>
          It comes with six tamper-proof, industrial-grade braided cables (2x Apple lightning cables for iPhone 5 and newer, 2x Micro-USB, 2x Type-C cables for Android devices) with fast charging and a Qi wireless charging pad (iPhone 11, Galaxy S20) for the latest devices. It’s made with durable, industrial-grade materials to ensure it will endure frequent use. The side panel and tabletop can be custom branded to promote your marketing.
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

      <!-- 产品人 -->

      <div class="JobChance-container wow pulse">
        <h2>They All Love Our Charging Table</h2>
        <p>The happiness of customers is the best verification of success.</p>
      </div>
      <!-- 四个人 -->
      <div class="ren col-xs-12 col-sm-12 col-md-6">
        <p>“Most amazing I ever had!!”</p>
        <img src="./img/9.png" alt="" />
        <p>– Bryan G</p>
      </div>
      <div class="ren col-xs-12 col-sm-12 col-md-6">
        <p>
          “Great charging table, make my customer happy!! KiDiGi the Best!!”
        </p>
        <img src="./img/10.png" alt="" />
        <p>– Laura Patricio</p>
      </div>
      <div class="ren col-xs-12 col-sm-12 col-md-6">
        <p>“I always purchase from KiDiGi, and they always surprise me.”</p>
        <img src="./img/11.png" alt="" />
        <p>– Harold Z</p>
      </div>
      <div class="ren col-xs-12 col-sm-12 col-md-6">
        <p>“A must-buy for every charger lover”</p>
        <img src="./img/12.png" alt="" />
        <p>– Laura Patricio</p>
      </div>

       <div class="bg">
      <div class="ren col-xs-12 col-sm-12 col-md-6">
      <p>KiDiGi Charging Solution – The Manufactory
      <h2> Call Now </h2>
      <p>Please speak to our sales team about how we can help your business or organization. We collaborate with entities of all sizes on custom branding, preferential pricing, and specialty manufacturing.</p>
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
  text-align: center;
  color: black;
  font-size: 16px;
}

@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>