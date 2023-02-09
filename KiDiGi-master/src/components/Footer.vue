<template>
  <div id=" bottom" style="background: black; height: 350px;">
            <div class="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="widget" style="padding:70px 0">
                            <ul style="font-weight:bold;font-size:25px">
                                <li><a href="#">16 Years Mobile Charging Manufactory Experience.</a></li>

                            </ul>
                        </div>
                    </div>
                    <!--/.col-md-3-->

                    <div class="col-md-3 col-sm-6">
                        <div class="widget" style="font-size: 15px;padding:70px 0">
                            <ul>
                                <li><a href="#">Press Release</a></li>
                                <li><a href="#">Event Calender</a></li>
                                <li><a href="#">Where to Buy</a></li>
                                <li><a href="#">Where to Buy</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--/.col-md-3-->

                    <div class="col-md-3 col-sm-6">
                        <div class="widget">

                        </div>
                    </div>
                 

                    <div class="col-md-3 col-sm-6">
                        <div class="widget" style="padding:70px 0;font-size: 20px">
                            <ul>
                                <li><a href="#">© KiDiGi 2023 All Rights Reserved.</a></li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>

            </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>

#bottom {
  height: 400px;
  background: black;
  border-bottom: 5px solid #fff;
  font-size: 14px;
}
.widget ul li a {
  color: white;
}

#bottom h3 {
  margin-top: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 22px;
  color: white;
}

#bottom ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#bottom ul li {
  display: block;
  padding: 5px 0;
  font-size: 15px;
}

#bottom ul li a {
  font-size: bold;
  color: #fff;
}

#bottom .widget {
  margin-bottom: 0;
}

#footer {
  padding-top: 20px;
  padding-bottom: 30px;
  /* color: #000; */
  /* background: #000; */
}

#footer a {
  color: black;
}

/* #footer a:hover {
  color: red;
} */
/* 底部 */

#footer ul {
  background: black;
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer ul>li {
  display: inline-block;
  margin-left: 15px;
}
</style>
