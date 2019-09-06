<template>
  <div id="home">
    <!-- <Login v-show="!flag1" @showIt="showIt"></Login> -->
    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->
    <div v-show="!flag1">
      <Title @showDemo="showdemoo" @exitLogin="exitLogin"></Title>
      <Banner></Banner>
     <!--  <div v-show="flag"> 
        <DemoDisplay></DemoDisplay>
      </div>
      <Picture v-show="!flag"></Picture> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  // import Login from '@/views/Login.vue'
  import Title from '@/components/Title.vue'
  import Banner from '@/components/Banner.vue'
  // import DemoDisplay from '@/components/DemoDisplay.vue'
  // import Picture from '@/components/Picture.vue'
  // import Nav from '@/components/Nav.vue'
  

  export default {
    name: 'app',
    data(){
      return{
        flag:false,
        flag1:false,
      }
    },
    components: {
      Title,Banner
    },
    methods:{
      showdemoo(){
        this.flag = !this.flag;
      },
      showIt(arg){
        this.flag1 = arg;
      },
      exitLogin(){
        this.flag1 = false
      }
    }
  }

</script>

<style>
  *{margin: 0;padding: 0;}
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-bottom: 400px;*/
  }
</style>
