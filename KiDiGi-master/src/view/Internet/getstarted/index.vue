<template>
  <div id="Service">
    <div class="container">
      <div class="row">
        <div class="wz col-xs-12 col-sm-12 col-md-6">
          <h2>
            Start your business <br />
            with Kidigi IoT Solution.
          </h2>
          <p>
            Putting your hardware online, your business opportunities will be
            endless. KiDiGi to provide an IoT solution based on Mobi Charge
            Apps, allowing you to walk on a new starting point in the market.
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <img
            src="./img/1.png"
            alt=""
            style="margin: auto; width: 90%; margin-top: 30px"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2>
            Bring up your idea. <br />
            We bring up a solution.
          </h2>
          <p>
            Putting your hardware online, your business opportunities will be
            endless. KiDiGi to provide an IoT solution based on Mobi Charge
            Apps, allowing you to walk on a new starting point in the market.
          </p>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <h1 class="z">Get the results that matter to you</h1>
      <div row col-xs-12 col-sm-6 col-md-3>
        <div class="get">
          <div class="xhz">
            <dt>
              <td>
                <img src="./img/2.jpg" alt="" />
                <p>Everyone can start up</p>
                <span>You can start at your own.</span>
              </td>
              <td>
                <img src="./img/3.jpg" alt="" />
                <p>Low Invest, Risk free</p>
                <span
                  >Customisation with your business plan reduce risks and
                  increase revenue.</span
                >
              </td>
              <td>
                <img src="./img/4.jpg" alt="" />
                <p>Factory Direct</p>
                <span>Factory direct, reduce cost and time</span>
              </td>
              <td>
                <img src="./img/5.jpg" alt="" />
                <p>Generate revenue</p>
                <span
                  >Support payment, rental, vending service with different
                  marketing tools to generate income.</span
                >
              </td>
            </dt>
          </div>
          <div class="xhz">
            <dt>
              <td>
                <img src="./img/6.jpg" alt="" />
                <p>Increase Store Visits</p>
                <span
                  >IoT helps increase service experience, increase visits and
                  increase spending.</span
                >
              </td>
              <td>
                <img src="./img/7.jpg" alt="" />
                <p>Drive Website Traffic</p>
                <span
                  >Grow online sales and service with IoT Apps that direct
                  people to your website.</span
                >
              </td>
              <td>
                <img src="./img/8.jpg" alt="" />
                <p>Improve Service</p>
                <span
                  >Combining internet-connected services. Customers can respond
                  and solve self-help. Improve service efficiency.</span
                >
              </td>
              <td>
                <img src="./img/9.jpg" alt="" />
                <p>Improve Efficiency</p>
                <span
                  >Customer demand can be settle with IoT. Increase the
                  efficiency of service and manpower.</span
                >
              </td>
              <div class="xhz">
                <dt>
                  <td>
                    <img src="./img/10.jpg" alt="" />
                    <p>Know your customers</p>
                    <span
                      >Bigdata and Statics generated for service
                      enhancements.</span
                    >
                  </td>
                </dt>
              </div>
            </dt>
            
          </div>
          <div class="ditu">
             <img src="./img/11.gif" alt="">
            </div>
            <div class="kk">
              <img src="./img/12.png" alt="">
              <h1>Partner with KiDiGi for find the best solution</h1>
              <p>With KiDiGi loT solution you can reach more target customer.</p>
              <p>Our loT technology will help your to generate revenue.</p>
              <span><a href="">(852) 2165 4755</a></span>
              <span><a href="mailto:sales@kidigi.com">Email</a></span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Service",
  data() {
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    // 点击
    soho() {
      this.$router.push("/product/product1/soho");
    },
  },
};
</script>
<style scoped>
#Service .container .wz {
  margin: 250px 0;
}
#Service .container h2 {
  font-weight: bold;
}
#Service .container p {
  color: #726e6e;
}
.container .z {
  font-weight: bold;
}
.get {
  margin-bottom: 40px;
}
.get .xhz {
  margin: 5px 100px;
}
.get .xhz img {
  margin: 0 auto;
}
.get .xhz td {
  width: 400px;
  margin: 50px 50px;
}
.ditu img{
  width: 1140px;
  height: auto;
}
.kk{
  margin: 50px 0;
}
.kk img{
  margin: 0 auto;
}
.kk p{
  font-size: 28px;
}
.kk span{
  font-size: 30px;
   width: 30px;
  height: 30px;

}
.kk span a{
  text-align: center;
  color: white;
  margin: 20px 30px;
  background-color: rgb(104, 100, 100);
  font-weight: bold;
     border-radius:7%;
}
</style>

