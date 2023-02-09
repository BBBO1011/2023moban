<template>
    <div id="Service">
        <div class="xiaocc" style="margin-left: 1500px;font-size:40px;">
        <i class="el-icon-close" @click="ho"></i>
        </div>
        <div class="container text-center">
            <h2>
POWER TABLE <br/>
CHARGING STATION<br/>
Charging Table</h2>
            <p style="color:#b2b2b2"></p>
        </div>
        <div class="container">
            <div class="Service-container row">
                <div class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp" 
                v-for="(item,index) in serviceList" :key="index" @click="soho(item.path)">
                    <div class="Service-item-wrapper">
                        <div class="Service-item-top">
                            <h4>{{item.title}}</h4>
                            <i></i>
                            <p>{{item.eng_title}}</p>
                        </div>
                        <div class="Service-item-img">
                            <img :src="item.img" alt="产品">
                        </div>
                        <div class="Service-item-border"></div>
                    </div>
                </div>
            </div>
        </div>

<div class="container text-center" style="background-color:black;margin-bottom:20px">
            <h3 class="z" style="color:white;">
“Charging Table offers plenty of space to promote your brand and events with ease. With an interchangeable signage feature you will be able to effectively reach your desired audience.”</h3>
    </div>

    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'Service',
    data(){
        return{
            serviceList: [
                {
                    id: 'section-1',
                    title: 'J-Mount',
                    eng_title: 'Power Stand Charging Station',
                    img: require('./img/1.png'),
                     path:"/product/product3/1"
                },{
                    id: 'section-2',
                    title: 'Aidan',
                    eng_title: 'Charging Dual-Signage Kiosk',
                    img: require('./img/2.jpg'),
                    path:"/product/product3/2"
                },{
                    id: 'section-3',
                    title: 'Nadia',
                    eng_title: 'Backlit Charging Kiosk',
                    img: require('./img/3.jpg'),
                    path:"/product/product3/3"
                },{
                    id: 'section-4',
                    title: 'Urban',
                    eng_title: 'Power Wall Workstation',
                    img: require('./img/4.jpg'),
                    path:"/product/product3/4"
                },
                {
                    id: 'section-5',
                    title: 'Columa',
                    eng_title: 'Charging Station Stand',
                    img: require('./img/5.jpg'),
                    path:"/product/product3/5"
                },
                {
                    id: 'section-6',
                    title: 'Mini',
                    eng_title: '4-Port Wall Mounted Charger',
                    img: require('./img/6.png'),
                    path:"/product/product3/6"
                },
                {
                    id: 'section-7',
                    title: 'A2',
                    eng_title: 'Backlit Charging Station',
                    img: require('./img/7.png'),
                    path:"/product/product3/7"
                },{
                    id: 'section-8',
                    title: 'Signage Charging Station',
                    eng_title: 'Backlit Charging Table',
                    img: require('./img/8.png'),
                    path:"/product/product3/8"
                }
            ]
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    },
    methods:{
        // 点击
    soho(path){
        this.$router.push(path)
    },
     ho() {
      this.$router.push("@/view/HomePage");
    },
    },
   
}
</script>
<style scoped>
.Service-container{
    padding: 30px 50px;
}
.Service-item{
    margin-bottom: 50px;
}
.Service-item-wrapper{
    cursor: pointer;
    background: rgba(244,244,244,1);
    overflow: hidden;
    position: relative;
}
.Service-item-top{
    width: 100%;
    height: 130px;
    padding: 30px;
    text-align: center;
}
.Service-item-top h4{
    font-weight: bold;
}
.Service-item-top>i{
    display: inline-block;
    width: 25px;
    height: 2px;
    background: #28f;
}
.Service-item-top>p{
    color: #b2b2b2;
    opacity: 0;
    transform: translateY(10px);
    transition: all .5s ease;
}
.Service-item-img{
    width: 100%;
    margin: 0 15%;
    overflow: hidden;
}
.Service-item-img img{
    width: 70%;
    transition: all 0.5s ease;
}
.Service-item-border{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    border: 1px solid #000;
    opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i{
    opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p{
    opacity: 1;
    transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img{
    transform: scale(1.1,1.1);
}
.Service-item-wrapper:hover > .Service-item-border{
    opacity: 1;
    width: 90%;
    height: 90%;
}
</style>

