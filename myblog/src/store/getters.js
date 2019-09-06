// 服务于state

export default {
	//任务总数量
	todoCount(state){
		return state.todos.length;
	},
	//已经完成的任务数量
	finishedCount(state){
		return state.todos.reduce((total,todo) => total + (todo.finished ? 1 : 0),0);
	},
	//判断是否是全选
	isCheck(state,getters){
		return getters.finishedCount == getters.todoCount && getters.todoCount>0;
	}
}