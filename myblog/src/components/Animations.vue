<template>
	<div class="animations">
    <p class="ptitle">CSS动画篇</p>
	  <div class="demo demoCircle">
      <h3>css3动画Loding</h3>
      <div class="circlebox">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="circlebox">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <div class="demo demo3d">
      <h3>css3动画旋转立方体</h3>
      <div class="transform3d">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
    <div class="demo demotaiji">
      <h3>css3动画 太极</h3>
      <div class="taiji">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
        <div class="circle6"></div>
      </div>
    </div>
    <div class="demo demokapian">
      <h3 @click="flag = !flag">css3 折扇</h3>
      <div :class="{kapain:true,'kapainOn':flag}">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <p class="ptitle">vue过渡与动画</p>
    <p>loding</p>
    <div id="magiccube">
      <div class="magiccube"></div>
    </div>
    <br><br>
    <button class="btn btn-primary buttoncard" @click="cardPlay">叠卡片效果</button><br>
    <transition name="fade">
      <div class="card" v-if="show">
        <div><img :src="imgs[0]" width="200" height="200"></div>
        <div><img :src="imgs[1]" width="200" height="200"></div>
        <div><img :src="imgs[2]" width="240" height="240"></div>
      </div>
    </transition>
    <br><hr><br>
    <button class="btn btn-primary" @click="flag = !flag">animate.css使用</button><br><br>
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated fadeOutRight"
      :duration="{enter:1000,leave:500}"
    >
      <div v-if="flag">
        <img src="../assets/flower.jpg">
      </div>
    </transition>
	</div>
</template>


<script>
  import animate from "animate.css"
	export default {
		name:'animations',
    data(){
      return{
        flag:false,
        show:false,
        imgs:[
          require('@/assets/timg (5).jpg'),
          require('@/assets/timg (7).jpg'),
          require('@/assets/flower.jpg'),
        ]
      }
    },
    beforeCreate(){
      console.log("在实例初始化之后，**数据观测(data observer) ** 和 event/watcher事件配置 之前被调用，注意是之前，此时data、watcher、methods统统滴没有。这个时候的vue实例还什么都没有，但是$route对象是存在的，可以根据路由信息进行重定向之类的操作。");
    },
    created(){
      console.log("在实例已经创建完成之后被调用。在这一步，实例已完成以下配置：数据观测(data observer) ，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el属性目前不可见。此时this.$data可以访问，watcher、events、methods也出现了，若根据后台接口动态改变data和methods的场景下，可以使用。")
    },
    beforeMount(){
      console.log("在挂载开始之前被调用，相关的 render 函数 首次被调用。但是render正在执行中，此时DOM还是无法操作的。我打印了此时的vue实例对象，相比于created生命周期，此时只是多了一个$el的属性，然而其值为undefined。使用场景我上文已经提到了，页面渲染时所需要的数据，应尽量在这之前完成赋值。")
    },
    mounted(){
      console.log("在挂载之后被调用。在这一步 创建vm.$el并替换el，并挂载到实例上。（官方文档中的 “如果root实例挂载了一个文档内元素，当mounted被调用时vm.$el也在文档内”这句话存疑）此时元素已经渲染完成了，依赖于DOM的代码就放在这里吧~比如监听DOM事件。")
    },
    beforeUpdate(){
      console.log("$vm.data更新之后，虚拟DOM重新渲染 和打补丁之前被调用。你可以在这个钩子中进一步地修改$vm.data，这不会触发附加的重渲染过程。")
    },
    updated(){
      console.log("虚拟DOM重新渲染 和打补丁之后被调用。当这个钩子被调用时，组件DOM的data已经更新，所以你现在可以执行依赖于DOM的操作。但是不要在此时修改data，否则会继续触发beforeUpdate、updated这两个生命周期，进入死循环！")
    },
    beforeDestroy(){
      console.log("实例被销毁之前调用。在这一步，实例仍然完全可用。可以用于清除定时器")
    },
    destroyed(){
      console.log("Vue实例销毁后调用。此时，Vue实例指示的所有东西已经解绑定，所有的事件监听器都已经被移除，所有的子实例也已经被销毁。这时候能做的事情已经不多了，只能加点儿提示toast之类的东西吧。")
    },
    methods: {
      cardPlay(){
        this.show = !this.show;
      }
    }
	}
</script>

<style scoped>
  button{outline: none;}
  .fade-enter,.fade-leave-to{
    opacity: 0;
    transform: translate(200px) scale(0.5) rotate(360deg);
  }
  .fade-enter-active,.fade-leave-active{
    transition: all 2s ease-in-out;
  }
  .card{
    overflow: hidden;
    margin: 40px auto;
    padding: 60px 0;
    width: 400px;
    height: 500px;
    background-color: #eaeaee;
  }
  .card div{
    background-color: #fff;
    /*display: flex;
    justify-content: center;
    align-items: center;*/
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0 auto;
    padding: 30px 0;
    box-sizing: border-box;
    transition: all .8s;
  }
  .card div:first-child{
    width: 240px;
    height: 240px;
    margin-top: 440px;
    margin-left: -300px;
    opacity: 0.25;
  }
  .card div:nth-child(2){
    margin-top: 30px;
    margin-left: -300px;
    width: 270px;
    height: 270px;
    opacity: 0.65;
  }
  .card div:last-child{
    margin-top: 130px;
    margin-left: -340px;
    opacity: 0.999;
    width: 300px;
    height: 300px;
  }
  .card:hover div:first-child{
    margin-left: 75px;
    margin-top: 0;
  }
  .card:hover div:nth-child(2){
     margin-left: 60px;
     margin-top: -220px;
  }
  .card:hover div:last-child{
     margin-left: 45px;
     margin-top: -250px;
  }
  .buttoncard{
    padding: 6px;
  }
.ptitle{
  font-size: 30px;
  font-weight: bold;
  color: #ec414d;
  letter-spacing: 5px;
  margin-bottom: 20px;
}
.kapain{
  width: 400px;
  height: 230px;
  border-bottom: 2px solid #000;
  margin: 100px auto 0;
  position: relative;
}
.kapain div{
  width: 60px;
  height: 200px;
  position: absolute;
  left: 170px;
  transform-origin: center bottom;
  transition: all .5s linear;
}
.kapain div:nth-of-type(1){background: url('../assets/colorbg1.jpg') center;box-shadow: 6px 6px 10px #333;}
.kapain div:nth-of-type(2){background: url('../assets/painting.jpg') center;opacity: 0}
.kapain div:nth-of-type(3){background: url('../assets/painting2.jpg') center;opacity: 0}
.kapain div:nth-of-type(4){background: url('../assets/timg (9).jpg') center;opacity: 0}
.kapain div:nth-of-type(5){background: url('../assets/timg (5).jpg') center;opacity: 0}
.kapain div:nth-of-type(6){background: url('../assets/timg (6).jpg') center;opacity: 0}
.kapain div:nth-of-type(7){background: url('../assets/timg (8).jpg') center;opacity: 0}
.kapain div:nth-of-type(8){background: url('../assets/timg (8).jpg') center;opacity: 0}
.kapain div:nth-of-type(9){background: url('../assets/timg (6).jpg') center;opacity: 0}
.kapain div:nth-of-type(10){background: url('../assets/timg (5).jpg') center;opacity: 0}
.kapain div:nth-of-type(11){background: url('../assets/timg (9).jpg') center;opacity: 0}
.kapain div:nth-of-type(12){background: url('../assets/painting2.jpg') center;opacity: 0}
.kapain div:nth-of-type(13){background: url('../assets/painting.jpg') center;opacity: 0}
.kapain:hover div:nth-of-type(2){transform: rotate(15deg);opacity: 1;}
.kapain:hover div:nth-of-type(3){transform: rotate(30deg);opacity: 1;}
.kapain:hover div:nth-of-type(4){transform: rotate(45deg);opacity: 1;}
.kapain:hover div:nth-of-type(5){transform: rotate(60deg);opacity: 1;}
.kapain:hover div:nth-of-type(6){transform: rotate(75deg);opacity: 1;}
.kapain:hover div:nth-of-type(7){transform: rotate(90deg);opacity: 1;}
.kapain:hover div:nth-of-type(8){transform: rotate(-90deg);opacity: 1;}
.kapain:hover div:nth-of-type(9){transform: rotate(-75deg);opacity: 1;}
.kapain:hover div:nth-of-type(10){transform: rotate(-60deg);opacity: 1;}
.kapain:hover div:nth-of-type(11){transform: rotate(-45deg);opacity: 1;}
.kapain:hover div:nth-of-type(12){transform: rotate(-30deg);opacity: 1;}
.kapain:hover div:nth-of-type(13){transform: rotate(-15deg);opacity: 1;}

.kapainOn div:nth-of-type(2){transform: rotate(15deg);opacity: 1;}
.kapainOn div:nth-of-type(3){transform: rotate(30deg);opacity: 1;}
.kapainOn div:nth-of-type(4){transform: rotate(45deg);opacity: 1;}
.kapainOn div:nth-of-type(5){transform: rotate(60deg);opacity: 1;}
.kapainOn div:nth-of-type(6){transform: rotate(75deg);opacity: 1;}
.kapainOn div:nth-of-type(7){transform: rotate(90deg);opacity: 1;}
.kapainOn div:nth-of-type(8){transform: rotate(-90deg);opacity: 1;}
.kapainOn div:nth-of-type(9){transform: rotate(-75deg);opacity: 1;}
.kapainOn div:nth-of-type(10){transform: rotate(-60deg);opacity: 1;}
.kapainOn div:nth-of-type(11){transform: rotate(-45deg);opacity: 1;}
.kapainOn div:nth-of-type(12){transform: rotate(-30deg);opacity: 1;}
.kapainOn div:nth-of-type(13){transform: rotate(-15deg);opacity: 1;}

.taiji{
  position: relative;
  width: 300px;
  height: 300px;
  margin: 50px auto;
  animation: movethree 5s infinite linear;
}
.circle1{
  width: 300px;
  height: 300px;
  background-color: #000;
  border-radius: 50%;
}
.circle2{
  width: 150px;
  height: 300px;
  background-color: #fff;
  border-top-right-radius: 150px;
  border-bottom-right-radius: 150px;
  position: absolute;
  top: 0px;
  left: 150px;
}
.circle3{
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 75px;
}
.circle4{
  width: 150px;
  height: 150px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: 75px;
}
.circle5{
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 125px;
}
.circle6{
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: 125px;
}
@keyframes movethree{
  from{transform: rotate(0deg);}
  to{transform: rotate(360deg);}
}
.transform3d{
    width: 200px;
    height: 200px;
    border: 1px solid green;
    margin: 100px auto;
    perspective: 500px;
  }
.transform3d ul{
  width: 100px;
  height: 100px;
  border: 1px solid pink;
  margin: 50px auto;
  position: relative;
  transform-style: preserve-3d;
  animation: movetwo 4s infinite linear;
  transform-origin: center center 50px;
}
.transform3d ul li{
  width: 100px;
  height: 100px;
  list-style: none;
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  position: absolute;
}
.transform3d ul li:nth-child(1){
  background-color: red;
  opacity: 0.5;
}
.transform3d ul li:nth-child(2){
  background-color: green;
  opacity: 0.5;
  transform: translateX(100px) rotateY(-90deg);
  transform-origin: left;
}
.transform3d ul li:nth-child(3){
  background-color: blue;
  opacity: 0.5;
  transform: translateX(-100px) rotateY(90deg);
  transform-origin: right;
}
.transform3d ul li:nth-child(4){
  background-color: purple;
  opacity: 0.5;
  transform: translateY(-100px) rotateX(-90deg);
  transform-origin: bottom;
}
.transform3d ul li:nth-child(5){
  background-color: yellow;
  opacity: 0.5;
  transform: translateY(100px) rotateX(90deg);
  transform-origin: top;
}
.transform3d ul li:nth-child(6){
  background-color: orange;
  opacity: 0.5;
  transform: translateZ(100px);
}
@keyframes movetwo{
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(360deg);
  }
}
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 100px;
}
h2{
  font-size: 40px;
  letter-spacing: 4px;
  font-weight: bold;
  border: 1px dashed pink;
  display: inline-block;
  padding: 15px;
}
.titledemo{
  margin: 60px;
}
.demo{
  min-height: 400px;
  width: 800px;
  margin: 0 auto;
  border: 2px solid #ccc;
  break-inside: avoid;
  margin-bottom: 20px;
}
.demoCircle{
  position: relative;
}
h3{margin: 30px auto 0;font-size: 30px;border: 1px solid #009a61;display: inline-block;padding: 15px;}
.circlebox{
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -22px 0 0 -22px;
}
.circlebox p{
  width: 12px;
  height: 12px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #555;
  animation: move 1.5s infinite linear;
}
.circlebox p:nth-of-type(1){
  top: 0;
  left: 0;
}
.circlebox p:nth-of-type(2){
  top: 0;
  right: 0;
}
.circlebox p:nth-of-type(3){
  bottom: 0;
  right: 0;
}
.circlebox p:nth-of-type(4){
  bottom: 0;
  left: 0;
}
.circlebox:nth-of-type(2){
  transform: rotate(45deg);
}
@keyframes move{
  0%{transform: scale(0);}
  50%{transform: scale(1);}
  100%{transform: scale(0);}
}
.circlebox:nth-of-type(1) p:nth-of-type(1){animation-delay: -0.1s;background-color: red;}
.circlebox:nth-of-type(2) p:nth-of-type(1){animation-delay: -0.3s;background-color: orange;}
.circlebox:nth-of-type(1) p:nth-of-type(2){animation-delay: -0.5s;background-color: yellow;}
.circlebox:nth-of-type(2) p:nth-of-type(2){animation-delay: -0.7s;background-color: green;}
.circlebox:nth-of-type(1) p:nth-of-type(3){animation-delay: -0.9s;background-color: cyan;}
.circlebox:nth-of-type(2) p:nth-of-type(3){animation-delay: -1.1s;background-color: blue;}
.circlebox:nth-of-type(1) p:nth-of-type(4){animation-delay: -1.3s;background-color: purple;}
.circlebox:nth-of-type(2) p:nth-of-type(4){animation-delay: -1.5s;background-color: lightgray;}
#magiccube{
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px solid #555;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.magiccube{
  width: 64px;
  height: 64px;
  background: url(http://i.giphy.com/3og0ISeflb7vrNzy2A.gif) no-repeat;
}
</style>
