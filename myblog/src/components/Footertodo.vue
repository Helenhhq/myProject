<template>
  <div class="footertodo">
    <input type="checkbox" v-model="selectAllOrNot">
    <span>完成 {{finishedCount}} 件</span>
    <span>/ 共 {{todoCount}} 件</span>
    <button @click="deleteFinishedtodos">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'footertodo',
    computed:{
      ...mapGetters(['todoCount','finishedCount','isCheck']),
      selectAllOrNot:{
        get(){
          return this.isCheck;
        },
        set(val){
          this.selectAllTodos(val)
        }
      }
    },
    methods:{
      ...mapActions(['selectAllTodos','deleteFinishedtodos'])
    }
  }

</script>

<style scoped>
  .footertodo{
  	overflow: hidden;
  	margin-top: 20px;
  }
  input,span{
  	float: left;
  	margin-right: 5px;
  }
  input[type=checkbox]{
  	margin-top: 4px;
  	width: 15px;
  	height: 15px;
  	-webkit-appearance:none;
    border-radius: 50%;
    outline: none;
  	background: url('../assets/unchecked.png') no-repeat;
  	background-size: 15px 15px;
  }
  input[type=checkbox]:checked{
  	background: url('../assets/checked.png') no-repeat;
  	background-size: 15px 15px;
  }
  button{
  	float: right;
  	height: 35px;
  	font-size: 14px;
  	padding: 3px 4px;
  	border-radius: 4px;
  	background-color: rgb(255,99,71);
  	border: 0;
  	outline: none;
  	color: #fff;
  }
   button:hover{
  	background-color: rgb(255,69,0);
  }
</style>
