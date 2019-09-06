<template>
  <div id="app">
    <!-- <Login v-show="!flag1" @showIt="showIt"></Login> -->
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>

  // import Login from './views/Login.vue'
  // import Home from './views/Home.vue'

  

  export default {
    name: 'app',
    data(){
      return{
        flag:false,
        flag1:false,
      }
    },
    // components: {
    //   Login,Home
    // },
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-bottom: 400px;*/
  }
</style>
