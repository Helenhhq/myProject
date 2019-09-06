<template>
  <div id="Picture">
    <div id="waterfall">
      <div class="item" v-for="(img,index) in imgs" :key="index">
        <img :src="img" width="430">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Picture',
    data(){
      return{
        imgs:[
          require('@/assets/001.gif'),
          require('@/assets/004.gif'),
          require('@/assets/01.jpeg'),
          require('@/assets/02.jpg'),
          require('@/assets/03.png'),
          require('@/assets/04.jpg'),
          require('@/assets/002.gif'),
          require('@/assets/003.gif'),
          require('@/assets/flower.jpg'),
          require('@/assets/painting2.jpg'),
          require('@/assets/painting.jpg'),
          require('@/assets/timg (1).jpg'),
          require('@/assets/timg (2).jpg'),
          require('@/assets/timg (3).jpg'),
          require('@/assets/timg (4).jpg'),
          require('@/assets/timg (5).jpg'),
          require('@/assets/timg (6).jpg'),
          require('@/assets/timg (7).jpg'),
          require('@/assets/timg (8).jpg'),
          require('@/assets/timg (9).jpg'),
          require('@/assets/timg (10).jpg'),
          require('@/assets/timg (11).jpg'),
          require('@/assets/timg.jpg'),
          require('@/assets/timg2.jpg'),
          require('@/assets/timg3.jpg'),
          require('@/assets/tea.jpg'),
          require('@/assets/poetry.jpg'),
          require('@/assets/poetry2.jpg'),
          require('@/assets/bgfrom.jpg'),
        ]
      }
    }
  }

</script>

<style scoped>
	#waterfall{
    margin: 50px auto 0;
    padding: 30px;
    width: 1400px;
    background-color: #ccc;
    column-count: 3;
    column-width: 430px;
    column-gap: 20px;
  }
  .item{
    break-inside: avoid;
    margin-bottom: 20px;
  }
</style>