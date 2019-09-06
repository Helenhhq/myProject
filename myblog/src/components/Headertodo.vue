<template>
  <div class="headtodo">
    <input 
    	type="text" 
    	v-model="title" 
    	placeholder="请输入今天的任务清单，按回车键确认"
    	@keyup.enter="addItem"
    />
  </div>
</template>

<script>

  

  export default {
    name: 'headtodo',
    props:{
    	addTodo:Function
    },
    data(){
    	return {
    		title:""
    	}
    },
    methods:{
    	addItem(){
    		const title = this.title.trim();
    		if(!title){
    			alert("输入的任务不能为空哦！");
    			return;
    		}
    		let todo = {title,finished:false};
    		// 调用父组件的插入方式
    		// this.addTodo(todo);
    		
    		// 发布一个自定义事件
    		// this.$emit("addTodo",todo);

        //调用actions里的插入方法
        this.$store.dispatch("addTodo",todo);
    		this.title = "";
    	}
    }
  }

</script>

<style scoped>
  input{
  	width: 560px;
  	height: 40px;
  	border-radius: 4px;
  	outline: none;
  	border: 1px solid #ccc;
  	font-size: 14px;
  	padding-left: 10px;
  }
  input:focus{
  	border: 1px solid #fff;
  	box-shadow: inset 0 1px 1px rgba(255,99,71,.075),0 0 8px rgba(255,99,71,.6);
  }
</style>
