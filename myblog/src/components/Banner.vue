<template>
  <div class="gufeng">
  	<div class="container-two">
	    <div class="fl w100">
	    	<img :src="src" width="100%" height="400" class="blur" />
	    </div>
	    <div class="content fl">
	    	<p>{{content}}</p>
	    	<span>{{detail}}</span><br>
	    	<button class="more">更多</button>
	    </div>
	    <div class="fl">
			<div class="blurImg">
		  		<img :src="src" width="240" height="320"/>
		  	</div>
		</div>
		<ul class="recommend fl">
			<li v-for="(imgsrc,index) in contents" @mouseenter="showImg(index)" :key="index">
				<a href="javascript:void(0)"><img :src="imgsrc.src" width="100" height="133" /></a>
			</li>
		</ul>
	</div>
  </div>
</template>

<!-- 
总结：1.当动态绑定img的src的时候，vue数据绑定图片的相对路径或者是绝对路径的时候，需要require路径
	 2.v-show的切换消耗比较低，但是不会重新渲染子组件，所以最好用于静态的内容或者不需要重新构建结构的组件。
	 而v-if比较适合不太频繁的切换状态的组件。所以项目设计的时候，不要对复杂的业务设计模块太频繁的视图切换。尽量将静态内容和动态内容分离到不同的模块中。
 -->
<script>
	export default {
	  name: 'gufeng',
	  data(){
	  	return {
	  		contents:[
		  		{
		  			"content":"琴",
		  			"detail":`
		  					《竹里馆》
					  		唐朝·王维
					  	独坐幽篁里，弹琴复长啸。
					  	深林人不知，明月来相照。`,
		  			"src":require("../assets/timg (3).jpg")
		  		},
		  		{
		  			"content":"棋",
		  			"detail":`
		  					《约客》
		  				  宋代·赵师秀
					黄梅时节家家雨，青草池塘处处蛙。
					有约不来过夜半，闲敲棋子落灯花。`,
		  			"src":require("../assets/timg2.jpg")
		  		},
		  		{
		  			"content":"书",
		  			"detail":`
		  					   《清明》
		  					宋代·王禹偁
					无花无酒过清明，兴味萧然似野僧。
					昨日邻家乞新火，晓窗分与读书灯。`,
		  			"src":require("../assets/calligraphy.jpg")
		  		},
		  		{
		  			"content":"画",
		  			"detail":`
		  					   《金陵晚望》
		  					   唐朝·高蟾
					曾伴浮云归晚翠，犹陪落日泛秋声。
					世间无限丹青手，一片伤心画不成。`,
		  			"src":require("../assets/timg (4).jpg")
		  		},
		  		{
		  			"content":"诗",
		  			"detail":`
		  					   《丑奴儿·书博山道中壁》
		  					  		宋代·辛弃疾
					少年不识愁滋味，爱上层楼。爱上层楼。为赋新词强说愁。 
					而今识尽愁滋味，欲说还休。欲说还休。却道天凉好个秋。`,
		  			"src":require("../assets/timg (8).jpg")
		  		},
		  		{
		  			"content":"酒",
		  			"detail":`
		  					   《送元二使安西 / 渭城曲》
		  					  		 唐朝·王维
						渭城朝雨浥轻尘，客舍青青柳色新。
						劝君更尽一杯酒，西出阳关无故人。`,
		  			"src":require("../assets/timg (9).jpg")
		  		},
		  		{
		  			"content":"花",
		  			"detail":`
		  					   《墨梅》
		  					 元代·王冕
					我家洗砚池边树，朵朵花开淡墨痕。
					不要人夸颜色好，只留清气满乾坤。`,
		  			"src":require("../assets/timg (10).jpg")
		  		},
		  		{
		  			"content":"茶",
		  			"detail":`
		  					   《望江南·超然台作》
		  					   	   宋代·苏轼
			春未老，风细柳斜斜。试上超然台上看，半壕春水一城花。烟雨暗千家。
			寒食后，酒醒却咨嗟。休对故人思故国，且将新火试新茶。诗酒趁年华。`,
		  			"src":require("../assets/timg (11).jpg")
		  		}
	  		],
	  		src:require("../assets/timg (3).jpg"),
	  		content:"琴",
	  		detail:`
  					《竹里馆》 
			  		唐朝·王维 
			  	独坐幽篁里，弹琴复长啸。
			  	深林人不知，明月来相照。`
	  	}
	  },
	  methods:{
	  	showImg(index){
	  		var src1 = this.contents[0].src;
	  		var src2 = this.contents[1].src;
	  		var src3 = this.contents[2].src;
	  		var src4 = this.contents[3].src;
	  		var src5 = this.contents[4].src;
	  		var src6 = this.contents[5].src;
	  		var src7 = this.contents[6].src;
	  		var src8 = this.contents[7].src;
	  		var cont1 = this.contents[0].content;
	  		var cont2 = this.contents[1].content;
	  		var cont3 = this.contents[2].content;
	  		var cont4 = this.contents[3].content;
	  		var cont5 = this.contents[4].content;
	  		var cont6 = this.contents[5].content;
	  		var cont7 = this.contents[6].content;
	  		var cont8 = this.contents[7].content;
	  		var detail1 = this.contents[0].detail;
	  		var detail2 = this.contents[1].detail;
	  		var detail3 = this.contents[2].detail;
	  		var detail4 = this.contents[3].detail;
	  		var detail5 = this.contents[4].detail;
	  		var detail6 = this.contents[5].detail;
	  		var detail7 = this.contents[6].detail;
	  		var detail8 = this.contents[7].detail;
	  		switch(index){
		  		case 1:
		  			this.src = src2;
		  			this.content = cont2;
		  			this.detail = detail2;
		  			break;
		  		case 2:
		  			this.src = src3;
		  			this.content = cont3;
		  			this.detail = detail3;
		  			break;	
		  		case 3:
		  			this.src = src4;
		  			this.content = cont4;
		  			this.detail = detail4;
		  			break;	
		  		case 4:
		  			this.src = src5;
		  			this.content = cont5;
		  			this.detail = detail5;
		  			break;	
		  		case 5:
		  			this.src = src6;
		  			this.content = cont6;
		  			this.detail = detail6;
		  			break;	
		  		case 6:
		  			this.src = src7;
		  			this.content = cont7;
		  			this.detail = detail7;
		  			break;	
		  		case 7:
		  			this.src = src8;
		  			this.content = cont8;
		  			this.detail = detail8;
		  			break;	
		  		default:
		  			this.src = src1;
		  			this.content = cont1;
		  			this.detail = detail1;
		  			break;
	  		}
	  	}
	  }
	}
</script>


<style scoped>
	*{margin: 0;padding: 0;}
	ul li{list-style: none;}
	.gufeng{
		height: 400px;
		width: 100%;
	}
	.container-two{
		overflow: hidden;
		margin: 0 auto;
		width: 1518px;
	}
	.more{
		outline: none;
		border: 1px solid #fff;
		background: transparent;
		width: 93px;
		height: 33px;
		color: #fff;
		font-size: 20px;
	}
	.fl{float: left;}
	.w100{width: 100%;}
	.blur{	
	    filter: url(../assets/timg.jpg#blur); /* FireFox, Chrome, Opera */
	    -webkit-filter: blur(20px); /* Chrome, Opera */
	       -moz-filter: blur(20px);
	        -ms-filter: blur(20px);    
	            filter: blur(20px);
	    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
	}
	.content{
		width: 400px;
		height: 200px;
		font-size: 40px;
		margin-top: -350px;
		margin-left: 250px;
		color: #fff;
		opacity: 0.999;
	}
	.content span{
		font-size: 14px;
	}
	.blurImg{
		margin-top: -360px;
		margin-left: 720px;
		opacity: 0.999;
		box-sizing: border-box;
		box-shadow: 0 0 10px #555;
		position: relative;
		top: 0;
		left: 0;
	}
	.blurImg:hover{
		box-shadow: 0px 0px 20px #e8e8e8;
		transform: translateX(2px);
		border: 2px solid pink;
		transition: all .2s ease;
	}
	.blurImg img{display: block;}
	.recommend{
		width: 460px;
		height: 306px;
		margin-top: -354px;
		margin-left: 1000px;
		background: rgba(0,0,0,.1);
		opacity: 0.999;
		overflow: hidden;
		padding: 10px;
		box-sizing: border-box;
	}
	.recommend img:hover{
		box-shadow: 0 0 10px #555;
		transform: translateY(-1px);
	}
	.recommend li{
		margin: 5px;
		float: left;
	}
</style>
