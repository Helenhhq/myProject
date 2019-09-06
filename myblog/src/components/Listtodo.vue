<template>
  <div class="listtodo">
    <ul>
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
