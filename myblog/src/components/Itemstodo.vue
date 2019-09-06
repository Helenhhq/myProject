<template>
  <li 
  	@mouseenter="dealshow(true)" 
  	@mouseleave="dealshow(false)" 
  	class="itemstodo"
  	:style="{backgroundColor:bgColor}"
  >
    <input type="checkbox" v-model="todo.finished">
	<span>{{todo.title}}</span>
	<button v-show="isShowBtn" @click="deleteItem">删除</button>
  </li>
</template>

<script>

 
  export default {
    name: 'itemstodo',
    data(){
    	return {
    		isShowBtn:false,
    		bgColor:"#fff"
    	}
    },
    props:{
    	todo:Object,
    	index:Number,
    },
    methods:{
    	deleteItem(){
    		if(window.confirm(`您确认删除 “ ${this.todo.title} ” 吗？`)){
          
          // vuex
          this.$store.dispatch("deleteTodo",this.index);
    		}
    	},
    	dealshow(show){
    		this.isShowBtn = show;
    		this.bgColor = show?"#eaeaee":"#fff";
    	}
    }
  }

</script>

<style scoped>
  li{
  	overflow: hidden;
  	box-sizing: border-box;
  	border: 1px solid #ddd;
  	width: 560px;
  	height: 40px;
  	padding: 3px 10px;	
  }
  li:not(:last-child){
  	border-bottom: 0;
  }
  input,span{
  	float: left;
  	padding: 5px;
  	letter-spacing: 0.5px;
  }
  input[type=checkbox]{
  	margin-top: 9px;
  	margin-right: 6px;
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
  	background-color: rgba(255,99,71,.6);
  	border: 0;
  	outline: none;
  	border-radius: 4px;
  	padding: 2px 4px;
  	color: #fff;
  	font-size: 18px;
  }
  button:hover{
  	background-color: rgb(255,99,71);
  }
</style>
