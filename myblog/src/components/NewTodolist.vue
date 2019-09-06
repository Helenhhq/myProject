<template>
  <div class="newTodolist">
    <h4>计划清单</h4>

    <Headertodo></Headertodo>
    <Listtodo></Listtodo>
    <Footertodo></Footertodo>
  </div>
</template>

<script>

  import Headertodo from './Headertodo.vue'
  import Listtodo from './Listtodo.vue'
  import Footertodo from './Footertodo.vue'


  export default {
    name: 'newTodolist',
    components:{
      Headertodo,Listtodo,Footertodo
    },
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




