<template>
  <div id="nav">
    <button class="btn btn-primary">写博客</button>
    <button class="btn btn-primary" @click="showDemo">我的小Demo</button>
    <hr/>
  </div>
</template>

<script>

  export default {
    name: 'nav',
    methods:{
      showDemo(){
        this.$emit('showDemo')
      }
    }
  }

</script>

<style scoped>
  #nav{
    margin: 30px auto;
  }
  button{
    margin: 0 100px;
  }
</style>