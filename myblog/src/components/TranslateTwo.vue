<template>
	<div class="translateTwo">
		<p>{{msg}}</p>
	</div>
</template>


<script>
	export default {
		name:'translateTwo',
		props:['msg']
	}
</script>

<style scoped>
	.translateTwo{
		width: 600px;
		min-height: 100px;
		margin: 0 auto;
		font-size: 30px;
		line-height: 50px;
		border:1px solid #ccc;
		color: #000;
	}
</style>
