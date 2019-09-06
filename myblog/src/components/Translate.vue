<template>
	<div class="translate">
		<h1>在线翻译</h1><br>
		<h5 class="text-muted">简单 / 易用 / 便捷</h5><br>
		<translateOne @submitForm="transText"></translateOne>
		<translateTwo :msg="msg"></translateTwo>
	</div>
</template>


<script>

	import TranslateOne from '@/components/TranslateOne.vue'
	import TranslateTwo from '@/components/TranslateTwo.vue'

	export default {
		name:'translate',
		data(){
			return{
				msg:""
			}
		},
		components:{
			TranslateOne,TranslateTwo
		},
		methods:{
			transText(t,language){
				this.$axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190816T162054Z.60755f0c739812ee.655043fec088ff34bd2795613ea1b249638b264c&lang='+language+'&text='+t)
				.then((res) => {
					this.msg = res.data.text[0];
					console.log(this.msg);
				})
			}
		}
	}

</script>

<style scoped>
	.translate{
		margin: 150px auto;
	}
	h1{font-weight: bold;letter-spacing: 2px;}
</style>
