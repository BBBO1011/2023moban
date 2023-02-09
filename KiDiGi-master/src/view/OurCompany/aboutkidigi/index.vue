<template>
   <div id="JobChance">
   
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>AboutKiDiGi</h2>
        <p>KiDiGi, specialization in charging solution. We design and manufacture the product which supports the most important element for modern people ：“Power for mobile device”.</p>
        <p>KiDiGi was found by Lewis Au-Yeung In 2004, KiDiGi had started the business on mobile phone accessories. In 2005/2006, KiDiGi had been appointed and authorized by Apple, Samsung, HTC, Nokia, Motorola as their mobile accessories designer and manufacturer.</p>
        <p>In 2009, KiDiGi had succeeded apply the MFi authorized factory for Apple. KiDiGi has mostly designed and developed about 200 items for the global customer under the MFi application.</p>
        <p>In 2010s KiDiGi has brought his charging solution technology to the commercial market.</p>
        <p>KiDiGi will keep on its best effort to develop in charging device & solution, which provide the best convenience globally.</p>
        <p>Please visit and join our social media page for the company’s new update.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs';
export default {
  name: "about",
  data() {
    return {};
  },
  mounted(){
    var wow = new WOW();
    wow.init();
  }
}
</script>


<style scoped>
#JobChance{
  padding: 100px;
  padding-bottom: 300px;
  height: 100%;
  background-color: black;
}

.JobChance-container {
  
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed white;
}
.JobChance-container h2{
  color: rgb(236, 227, 223);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p{
  color: rgb(190, 190, 190);
  font-size: 15px;
}

@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>