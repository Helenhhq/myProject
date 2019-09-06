<template>
  <div id="DemoDisplay">
    <Carousel></Carousel>
    <Test></Test>
    <DirectiveUse></DirectiveUse>
    <EchartsUse></EchartsUse>
    <translate></translate>
    <Todolist></Todolist>
    <NewTodolist></NewTodolist>
    <PersonalInfo></PersonalInfo>
    <animations></animations>
  </div>
</template>

<script>

  import Carousel from '@/components/Carousel.vue'
  import Test from '@/components/Test.vue'
  import DirectiveUse from '@/components/DirectiveUse.vue'
  import EchartsUse from '@/components/EchartsUse.vue'
  import Translate from '@/components/Translate.vue'
  import Todolist from '@/components/Todolist.vue'
  import NewTodolist from '@/components/NewTodolist.vue'
  import PersonalInfo from '@/components/PersonalInfo.vue'
  import Animations from '@/components/Animations.vue'

  export default {
    name: 'DemoDisplay',
    components: {
     Carousel,Test,DirectiveUse,EchartsUse,Translate,Todolist,NewTodolist,Animations,PersonalInfo
    }
  }

</script>

<style scoped>
	#DemoDisplay{
    width: 1518px;
    margin: 0 auto;
  }
</style>