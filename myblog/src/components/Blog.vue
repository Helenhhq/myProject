<template>
  <div class="blog">
    <h2>博客内容</h2>
    <ul>
    	<li v-for="(blog,index) in blogs" :key="blog.id">
    		<div class="blog-title"><p>{{blog.title}}</p></div>
    		<div>{{blog.content}}</div>
    	</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'blog',
    data(){
    	return {
    		blogs:[]
    	}
    },
    created(){
    	this.$axios.get("https://www.easy-mock.com/mock/5d6cdc123244020479536c48/example/hhqblog")
    	.then((res)=>{
    		this.blogs = res.data.data.blogs;
    	})
    	.catch((err)=>{
    		console.log("请求不了啊"+res);
    	})
    }
  }

</script>

<style scoped>
	h2{
		margin-top: 30px;
	}
	ul{
		list-style: none;
		width: 600px;
		margin: 50px auto;
	}
	ul li{
		margin: 40px;
	}
	.blog-title{
		font-size: 30px;
	}
</style>