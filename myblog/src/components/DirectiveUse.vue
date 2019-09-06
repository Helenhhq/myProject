<template>
  <div id="directiveUse">
  	<p><strong>自定义指令(directive)的使用</strong></p>
    <ul>
    	<li v-rainbow:extension="'wide'" v-for="(s,index) in sentence" :key="index">{{s.sentence}}</li>
    </ul>
    <div class="filter">
    	<p><strong>过滤器(filter)的使用</strong></p><hr>
	    人民币：<input type="text" placeholder="RMB" v-model="rmb"> ==>
	    美元：<span>{{rmb | rtomFormat}}</span><br>
	    <div class="change">{{rmb}}人民币元 ≈ {{rmb | rtomFormat}}美元</div><hr>
	    美元：<input type="text" placeholder="$" v-model="money"> ==>
	    人民币：<span>{{money | moneyFormat}}</span><br>
	    <div class="change">{{money}}美元 ≈ {{money | moneyFormat}}人民币元</div><hr>
	    <p>格式化日期moment</p>
	    <p>{{time | timeFormat}}</p>
    </div> 
  </div>
</template>

<script>

	import "../../mock.js"
	import moment from "moment"

  export default {
    name: 'directiveUse',
    data(){
    	return {
    		sentence:[],
    		rmb:188888,
    		money:1,
    		time:new Date()
    	}
    },
    created(){
      this.$axios.post('/addresses/api')
      .then((res) => {
        this.sentence = res.data.addresses;
      })
      .catch((err) => {
        console.log("出错了啊！=>"+err)
      })
    },
    mounted(){
    	setInterval(()=>{
    		this.time = new Date()
    	},1000)
    },
    directives: {
    	'rainbow'(el,binding){
    		el.style.color = "#" +Math.random().toString(16).slice(2,8);
    		if(binding.value == "wide"){
    			el.style.maxWidth = "600px";
    			el.style.margin = "auto";
    			el.style.border = "1px solid #ccc";
    		}
    		if(binding.arg == "extension"){
    			el.style.padding = "4px"
    		}
    	}
    },
    filters:{
    	rtomFormat(value){
    		return "$"+Number(value*0.13972725).toFixed(8)
    	},
    	moneyFormat(value){
    		return "¥"+Number(value*7.1568).toFixed(4)
    	},
    	timeFormat(value,format="YYYY-MM-DD HH:mm:ss"){
    		return moment(value).format(format);
    	}
    }
  }
</script>

<style scoped>
  ul{list-style: none;}
  .change{
  	border: 1px solid #ccc;
  	display: inline-block;
  	padding: 10px;
  	margin: 10px;
  }
  .filter{
  	border: 1px solid pink;
  	width: 600px;
  	margin: 20px auto;
  	padding: 10px;
  }
</style>