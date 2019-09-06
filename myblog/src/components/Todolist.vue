<template>
  <div class="todolist">
    <img class="logo" src="../assets/todo_list1.png" width="50" height="50">
    <span class="todolist_title"><strong>ToDoList</strong></span><br>
    <img class="logo" src="../assets/todo_list.png" width="48" height="48">
    <input type="text" v-model="task" placeholder="添加任务" />
    <button type="primary" class="btn btn-info" @click="addTask">添加</button>
    <div class="newtask" v-for="(listTask,index) in newTask" :key="index">
      <img class="star" @click="changStar(listTask)" :src="listTask.flag?starImg02:starImg01" width="35" height="35"/>
      <span class="new_task">{{listTask.content}}</span>
      <button class="del_task btn btn-primary" type="info" @click="delTask(index)">删除</button>
    </div>
    <div v-if="newTask.length>0">
      <div class="tasks">进行中</div>
      <div class="ingtask" v-for="(listTask,index) in newTask" :key="index" v-if="!listTask.flag">
        <span>{{listTask.content}}</span>
      </div>
      <div class="tasks tasks_ok">已完成</div>
      <div class="ingtask" v-for="(listTask,index) in newTask" :key="index" v-if="listTask.flag">
        <span>{{listTask.content}}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'todolist',
  data(){
    return {
      task:"",
      newTask:[],
      starImg01:require('../assets/star01.png'),
      starImg02:require('../assets/star02.png')
    }
  },
  methods:{
    delTask(index){
      this.newTask.splice(index,1);
    },
    changStar(listTask){
      listTask.flag = !listTask.flag;
    },
    addTask(){
      if(this.task.length>0){
        this.newTask.unshift({content:this.task,flag:false});
        this.task = ""
      }
    }
  }
}
</script>


<style scoped>
  .todolist{margin: 30px auto;width: 600px;}
  .todolist_title{
    font-size: 30px;
  }
  .logo,.todolist_title{
    display: inline-block;
    vertical-align: middle;
    margin: 20px;
  }
  input{
    width: 300px;
    height: 40px;
    padding-left: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button{
    width: 80px;
    height: 40px;
    text-align: center;
    margin-left: 5px;
  }
  .newtask{
    background: #eaeaee;
    margin: 15px 10px;
    overflow: hidden;
  }
  .newtask:nth-child(odd){
    background: #fff;
    border:1px solid #ccc;
  }
  .new_task,.star{float: left;margin-left: 10px;}
  .new_task{line-height: 40px;font-size: 20px;font-weight: bold;}
  .del_task{float: right;}
  .tasks{
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border: 1px solid #ccc;
    margin: 20px 57px;
    background-color: gray;
    border-radius: 3px;
  }
  .tasks_ok{
    background-color: yellow;
  }
  .ingtask{
    width: 400px;
    height: 35px;
    line-height: 35px;
    margin-left: 57px;
    border: 1px solid #ccc;
    margin-top: 5px;
  }
  .dib{display: inline-block;}
</style>
