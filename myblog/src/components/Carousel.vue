<template>
  <div class="Carousel">
    <div class="showImg" @mouseover="showbtn=true" @mouseout="showbtn=false">
      <ul>
        <li v-for="(img,index) in imgs" :key="index" v-show="index === mark">
          <img :src="img"/>
        </li>
      </ul>
    </div>
    <!-- 指示器 -->
    <div class="indicator">
      <span v-for="(img,index) in imgs" :key="index" :class="{'active':index === mark}" @mouseenter="showThisImage(index)"></span>
    </div>
    <!-- 左右按钮 -->
    <div class="btn" v-show="showbtn" @mouseover="showbtn=true" @mouseout="showbtn=false">
      <span class="btn_left" @click="preImg">&lt;</span>
      <span class="btn_right" @click="nextImg">&gt;</span>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Carousel',
    data(){
      return {
        mark:0,//指示器位置标识
        showbtn:false,
        timer:null,
        imgs:[
          require('@/assets/001.gif'),
          require('@/assets/002.gif'),
          require('@/assets/003.gif'),
          require('@/assets/004.gif')
        ]
      }
    },
    methods:{
      autoPlay(){
        this.mark++;
        if(this.mark === this.imgs.length){
          this.mark = 0;
        }
      },
      play(){
        this.timer = setInterval(this.autoPlay,3000)
      },
      preImg(){
        clearInterval(this.timer);
        this.mark--;
        if(this.mark === -1){
          this.mark = this.imgs.length-1;
        }
        this.timer = setInterval(this.autoPlay,3000)
      },
      nextImg(){
        clearInterval(this.timer);
        this.mark++;
        if(this.mark === this.imgs.length){
          this.mark = 0;
        }
        this.timer = setInterval(this.autoPlay,3000)
      },
      showThisImage(index){
        clearInterval(this.timer);
        this.mark = index;
         this.timer = setInterval(this.autoPlay,3000)
      }
    },
    created(){
      this.play()
    }
  }
</script>


<style scoped>
  *{margin: 0;padding: 0;}
  ul{list-style: none;}
  .Carousel{
    width: 500px;
    height: 280px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
    border:30px solid transparent;
    -webkit-border-image: url(../assets/colorbg1.jpg) 50 round;
    -o-border-image: url(../assets/colorbg1.jpg) 50 round;
    border-image: url(../assets/colorbg1.jpg) 50 round;
    border-image-width:50px;
  }
  .showImg{
    width: 500px;
    height: 280px;
  }
  li{position: absolute;}
  img{
    width: 500px;
    height: 280px;
  }
  .indicator{
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 10px;
    z-index: 10px;
    text-align: center;
  }
  .indicator span{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border:1px solid gray;
    background-color: #fff;
    display: inline-block;
    margin: 10px;
  }
  .btn{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .btn span{
    position: absolute;
    top: 50%;
    margin-top: -25px;
    font-size: 40px;
    color: #fff;
    background: rgba(0,0,0,.2);
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
  .btn_left{
   left: 0px;
  }
  .btn_right{
    right: 0px;
  }
  .active{
    background-color: red !important;
  }
  .tvtitle{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
</style>
