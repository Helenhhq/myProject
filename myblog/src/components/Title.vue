<template>
  <div id="Title">
    <nav>
      <div class="btnlogin">
        <router-link to="/login"><button class="btn1" @click="exitLogin">返回登录</button></router-link>
      </div>
      <img alt="dribbble logo" src="../assets/logoforme.png">&nbsp;&nbsp;
      <span>欢迎{{name}}来到我的个人博客!</span>
      <div class="btnNav">
        <router-link to="/home/blog"><button class="btn1">博客</button></router-link>
        <router-link to="/home/demodisplay"><button class="btn2" @click="showDemo">我的小Demo</button></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import LocalStorage from '../utils/LocalStorageUtil'
  export default {
    name: 'Title',
    data(){
      return {
        name:LocalStorage.readName()
      }
    },
    methods:{
      showDemo(){
        this.$emit('showDemo')
      },
      exitLogin(){
        this.$emit('exitLogin')
      }
    }
  }

</script>

<style scoped>
  #Title{
    width: 1518px;
    margin: 0 auto;
  }
	nav{
    background: #000;
    padding: 10px;
    overflow: hidden;
  }
  nav span{
    color: #fff;
    letter-spacing: 1px;
  }
  .btnlogin button{
    float: left;
    color: #fff;
    margin-top: 4px;
    color: #fff;
    border-radius: 2px;
    padding: 0 15px;
    height: 32px;
    line-height: 32px;
    margin-left: 20px;
  }
  .btnNav{
    float: right;
    margin-top: 4px;
  }
  .btnNav button{
    color: #fff;
    border-radius: 2px;
    padding: 0 15px;
    height: 32px;
    line-height: 32px;
    margin-right: 20px;
  }
  .btn1{
    background-color: transparent;
    border:1px solid #fff;
  }
  .btn1:focus,.btn2:focus{
    outline: none;
  }
  .btn2{
    background-color: #ec414d;
    border:1px solid #ec414d;
  }
  .btn1:hover{
    background-color: #fff;
    border:1px solid #fff;
    color:#333;
  }
  .btn2:hover{
    background-color: #e31624;
    border:1px solid #e31624;
  }
</style>