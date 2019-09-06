//往外暴露
const todokey = "todokey"
const namekey = "namekey";
export default {
	readTodos(){
		return JSON.parse(localStorage.getItem(todokey) || "[]")
	},
	saveTodos(todos){
		localStorage.setItem(todokey,JSON.stringify(todos))
	},
	readName(){
		return JSON.parse(localStorage.getItem(namekey) || "[]")
	},
	saveName(name){
		localStorage.setItem(namekey,JSON.stringify(name))
	}
}
