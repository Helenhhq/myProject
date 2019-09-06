<template>
<div class="login">
	<div>
		<img class="mty" src="../assets/mty01.png"><br>
		<div class="bg pre">
			<div v-show="!show">
				<img class="img" src="../assets/logoforme.gif"><br>
				<div class="hand handleft" v-bind:class="{passhand:passhand}"></div>
				<div class="hand handright" v-bind:class="{passhand:passhand,fliphorizontal:fliphorizontal}"></div>
				<h4>Sign in</h4>
				<div class="tal">
					<input type="text" name="login" v-model="username" placeholder="请输入用户名登录"><br>
					<input type="text" v-model="password" v-if="seepwb"/>
					<input type="password" v-model="password" @focus="togglebg" @blur="togglebgother" name="login" placeholder="请输入密码" v-else/><img :src="seen ? seeing : unseeing" @click="changType()" class="img_eye"><br>
				</div>
				<button @click="login" class="signin">登录 / Sign in</button>
			</div>
			<div v-show="show">
				<img class="img" src="../assets/logoforme.gif"><br>
				<div class="hand handleft" v-bind:class="{passhand:passhand}"></div>
				<div class="hand handright" v-bind:class="{passhand:passhand,fliphorizontal:fliphorizontal}"></div>
				<h4>Sign up</h4>
				<div class="tal">
					<input type="text" name="zc" v-model="username" placeholder="请输入用户名登录"><br>
					<input type="text" v-model="newPassword" v-if="seepwb"/>
					<input type="password" v-model="newPassword" @focus="togglebg" @blur="togglebgother" name="register" placeholder="请输入密码" v-else/><img :src="seen ? seeing : unseeing" @click="changType()" class="img_eye"><br>
				</div>
				<button @click="register" class="register">注册 / Sign up</button>
			</div>
			<p class="infozc">Not a member? <a @click="showRegister" href="javascript:void(0)">Sign up / in now</a></p>
		</div>
	</div>
</div>
</template>


<script>

export default {
	name: 'login',
	data(){
		return {
		passhand:false,
		fliphorizontal:false,
		show:false,
		showflag:false,
		username:"",
		password:"",
		newUsername:"",
		newPassword:"",
		seepwb:false,
		seen:false,
		showmain:false,
		seeing:require("../assets/eyeopen.png"),
		unseeing:require("../assets/eyeclose.png"),
		users:[
			{
				username:"hhq",
				pwd:"1"
				},
			{
				username:"hello",
				pwd:"123"
			}
		]
		}
	},
	methods:{
		togglebg(){
			this.passhand = !this.passhand;
			this.fliphorizontal = !this.fliphorizontal;
		},
		togglebgother(){
			this.passhand = !this.passhand;
			this.fliphorizontal = !this.fliphorizontal;
		},
		showRegister(){
			this.show = !this.show;
		},
		changType(){
			this.seen = !this.seen;
			this.seepwb = !this.seepwb;
		},
		login(){
			if (this.username === "" || this.password === ""){
				alert('请输入用户名或密码!');
			}else{
				for(var i=0;i<this.users.length;i++){
				if(this.username == this.users[i].username && this.password == this.users[i].pwd){
					this.username = "";
					this.password = "";
					alert('登录成功！');
					this.showflag = true;
					this.$emit("showIt",this.showflag);
					return
				}else{
					alert('用户名或密码不正确，请重新输入！');
				}
			}
		}
	},
	register(){
		if (this.newUsername === "" || this.newPassword === ""){
		alert('请输入用户名或密码');
			}else{
				alert('注册成功！');
			} 
		}
	}
}
</script>


<style scoped>
	.login{
		background: url("../assets/huaban01.jpg") no-repeat;
		background-size: cover;
		width: 1518px;
		height: 758px;
		overflow: hidden;
		padding: 30px 0;
		margin: 0 auto;
	}
	.mty{
		position: relative;
		z-index: 9;
	}
	.bg{
		width: 634px;
		height: 500px;
		margin: -17px auto 0;
		border-radius: 4px;
		background: rgba(255,255,255,.6);
		position: relative;
	}
	.bg .img{
		margin-top: 90px;
	}
	.tal{text-align: left;margin-left: 97px;}
	.bg input,.bg button{
		width: 400px;
		height: 50px;
		border: 1px solid pink;
		box-sizing: border-box;
		padding: 15px;
		font-size: 16px;
		margin: 20px;
		background-color: #fff;
		letter-spacing: 2px;
	}
	.bg button{
		margin-top: 0;
		font-weight: bold;
		cursor: pointer;
	}
	.hand{
		width: 50px;
		height: 34px;
		background-color: #472d20;
		border-radius: 50%;
		position: absolute;
		top: -15px;
	}
	.handleft{
		left: 150px;
		z-index: 10;
	}
	.handright{
		right: 145px;
		z-index: 10;
	}
	.passhand{
		background: url(../assets/owl01.png);
		width: 80px;
		height: 130px;
		top: -80px;
		transform: translateX(80px);
	}
	.fliphorizontal{
		-moz-transform: scaleX(-1);
		-webkit-transform: scaleX(-1);
		-o-transform: scaleX(-1);
		transform: scaleX(-1);
		right: 217px;
	}
	.infozc{
		margin-top: 20px;
	}
	a{cursor: pointer;}
	.signin{
		color: pink;
	}
	.bg .register{
		background-color: pink;
		color: #fff;
	}
	.img_eye{
		width: 30px;
		height: 30px;
		display: inline-block;
		margin-left: -15px;
		vertical-align: top;
		margin-top: 25px;
	}
</style>
