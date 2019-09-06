<template>
  <div class="ttemp">
    
  </div>
</template>

<script>

  

  export default {
    name: 'ttemp',
   
  }

</script>

<style scoped>
  
</style>



newTodolist




<template>
  <div class="newTodolist">
    <h4>计划清单</h4>
    <!-- 1:<Headertodo :addTodo="addTodo"></Headertodo> -->

    <Headertodo ref="header"></Headertodo>
    <Listtodo :todos="todos" :deleteTodo="deleteTodo"></Listtodo>

    <!-- 1:<Footertodo :todos="todos" :selectAllTodos="selectAllTodos" :deleteFinishedtodos="deleteFinishedtodos"></Footertodo> -->

    <Footertodo>
      <input slot="isCheck" type="checkbox" v-model="isCheck">
      <span slot="finish">完成 {{finishedCount}} 件</span>
      <span slot="total">/ 共 {{todos.length}} 件</span>
      <button slot="delete" @click="deleteFinishedtodos">清除已完成任务</button>
    </Footertodo>

    <!-- <Headertodo></Headertodo>
    <Listtodo></Listtodo> -->
    <!-- <Footertodo></Footertodo> -->
  </div>
</template>

<script>

  import Headertodo from './Headertodo.vue'
  import Listtodo from './Listtodo.vue'
  import Footertodo from './Footertodo.vue'

  //引入工具类
  import LocalStorage from './../utils/LocalStorageUtil'

  import PubSub from 'pubsub-js'

  export default {
    name: 'newTodolist',
    data(){
      return {
        todos:LocalStorage.readTodos()
        // todos:[
        //   {
        //       title:"打赏",finished:false
        //   }
        // ]
      }
    },
    components:{
      Headertodo,Listtodo,Footertodo
    },
    mounted(){
      //绑定自定义事件的监听
      this.$refs.header.$on("addTodo",this.addTodo);

      //订阅消息（deleteTodo）
      PubSub.subscribe('deleteTodo',(msg,token) => {
        this.deleteTodo(token);
      })
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);
      },
      deleteTodo(index){
        this.todos.splice(index,1);
      },
      // 是否选中所有的任务
      selectAllTodos(isCheck){
        this.todos.forEach(todo =>{
          todo.finished = isCheck;
        })
      },
      deleteFinishedtodos(){
        this.todos = this.todos.filter(todo => !todo.finished);
      }
    },
    computed:{
      finishedCount(){
        return this.todos.reduce((total,todo) => total + (todo.finished ? 1 : 0),0);
        // return this.todos;
      },
      isCheck: {
        get(){
          return this.finishedCount == this.todos.length && this.todos.length>0;
        },
        set(value){
          this.selectAllTodos(value);
        }
      }
    },
    watch:{
      //深度监视，能监视到对象的属性值的变化,比较耗性能
      /*
      *handler:其值是一个回调函数，即监听到变化时应该执行的函数
      *deep:其值是true/false,确认是否深入监听
      *immediate:其值是true/false,确认是否以当前的初始值执行handler的函数
      */
      todos:{
        handler:LocalStorage.saveTodos,
        deep:true,
        immediate:true
      }
    }
  }

</script>

<style scoped>
  .newTodolist{
    width: 600px;
    min-height: 200px;
    margin: 30px auto;
    border: 1px solid rgb(255,99,71);
    padding: 10px 20px 20px;
    border-radius: 5px;
  }
  h4{
    letter-spacing: 2px;
    font-size: 18px;
    line-height: 40px;
  }
</style>


listtodo


<template>
  <div class="listtodo">
    <ul>
      <!-- 旧：<Itemstodo 
          v-for="(todo,index) in todos" :key="index"
          :todo="todo" 
          :index="index" 
          :deleteTodo="deleteTodo"
      /> -->
      <Itemstodo 
       v-for="(todo,index) in todos" :key="index"
      :todo="todo" 
      :index="index" 
      />
    </ul>
  </div>
</template>

<script>

  import Itemstodo from './Itemstodo.vue'
  import {mapState} from 'vuex'
  import LocalStorage from '../utils/LocalStorageUtil'

  export default {
    name: 'listtodo',
    props:{
      todos:Array,
      deleteTodo:Function
    },
    computed:{
      ...mapState(["todos"])
    },
    components:{
      Itemstodo
    },
    watch:{
      todos:{
        deep:true,
        handler:LocalStorage.saveTodos
      }
    }
  }

</script>

<style scoped>
  .listtodo{
    margin:20px auto 0;
  }
  ul{
    list-style: none;
    margin: 0 auto;
  }
</style>



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

 import PubSub from 'pubsub-js'
 
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
      deleteTodo:Function
    },
    methods:{
      deleteItem(){
        if(window.confirm(`您确认删除 “ ${this.todo.title} ” 吗？`)){
          // 旧：this.deleteTodo(this.index);

          // 发布消息
          PubSub.publish("deleteTodo",this.index);
          
          // vuex
          // this.$store.dispatch("deleteTodo",this.index);
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

 import PubSub from 'pubsub-js'
 
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
      deleteTodo:Function
    },
    methods:{
      deleteItem(){
        if(window.confirm(`您确认删除 “ ${this.todo.title} ” 吗？`)){
          // 旧：this.deleteTodo(this.index);

          // 发布消息
          PubSub.publish("deleteTodo",this.index);
          
          // vuex
          // this.$store.dispatch("deleteTodo",this.index);
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





<template>
  <div class="footertodo">
    <!-- <input type="checkbox" v-model="isCheck"> -->
    <slot name="isCheck"></slot>
    <!-- <span>完成 {{finishedCount}} 件</span> -->
    <slot name="finish"></slot>
    <!-- <span>/ 共 {{todos.length}} 件</span> -->
    <slot name="total"></slot>
    <!-- <button @click="deleteFinishedtodos">清除已完成任务</button> -->
    <slot name="delete"></slot>
  </div>
</template>

<script>

  

  export default {
    name: 'footertodo',
    props:{
      todos:Array,
      selectAllTodos:Function,
      deleteFinishedtodos:Function
    },
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
