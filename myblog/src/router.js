import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

//引入页面
// import Login from "./views/Login"
// import Home from "./views/Home"
// import DemoDisplay from "./components/DemoDisplay"
// import Picture from "./components/Picture"


//路由懒加载
const Login = () => import('./views/Login');
const Home = () => import('./views/Home');
const DemoDisplay = () => import('./components/DemoDisplay');
const Picture = () => import('./components/Picture'); 
const Blog = () => import('./components/Blog'); 


const router = new Router({
	routes:[
		// {path:"/",redirect:"/login"},
		{path:"/",redirect:{name:"home"}},
		{
			path:"/home",
			name:"home",
			component:Home,
			children:[
				{path:"/home",redirect:"/home/picture"},
				{path:"demodisplay",name:"demodisplay",component:DemoDisplay},
				{path:"picture",name:"picture",component:Picture},
				{path:"blog",name:"blog",component:Blog},
			],
		},
		{path:"/login",name:"login",component:Login,props:{name:"hhh"}},
	]
});

//全局前置路由守卫
router.beforeEach((to,from,next) => {
	if(to.path !== "/login"){
		if(window.isLogin){//登录
			next();
		}else{//没有登录
			// next("/login?redirect=/home/demodisplay");
			next("/login?redirect="+to.path);
			// next("/login")
		}
	}else{
		next();
	}
	// next();
});
//全局后置路由守卫
router.afterEach((to,from) =>{
	console.log("这是全局后置路由守卫")
})
export default router