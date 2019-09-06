<template>
	<div class="translateOne">
		<form v-on:submit.prevent="submitForm">
			<input class="input" v-model="translateText" type="text" placeholder="请输入需要翻译的内容">
			<select v-model="language">
				<option value="en">English</option>
				<option value="ru">Russian</option>
				<option value="fr">French</option>
				<option value="ja">Japanese</option>
				<option value="ko">Korean</option>
				<option value="zh">Chinese</option>
				<option value="it">Italian</option>
				<option value="da">Danish</option>
			</select>
			<input class="btn btn-primary" type="submit" value="翻译">
		</form>
	</div>
</template>


<script>
	export default {
		name:'translateOne',
		data(){
			return{
				translateText:"",
				language:""
			}
		},
		methods:{
			submitForm(){
				this.$emit('submitForm',this.translateText,this.language)
			}
		},
		created(){
			this.language = "en"
		}
	}
</script>

<style scoped>
	.translateOne{
		text-align: center;
		margin: 0 auto;
		background-color: #ccc;
		width: 600px;
		padding: 20px;
	}
	.input{
		width: 350px;
		padding-left: 20px;
	}
	input,select{
		height: 40px;
		vertical-align: bottom;
		margin-right: 10px;
	}
</style>
