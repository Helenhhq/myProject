// 包含多个间接更新state的方法，对象模块

import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODO,DELETE_FINISHED_TODO} from './mutations-type'

export default {
	addTodo({commit},todo){
		commit(ADD_TODO,{todo})
	},
	deleteTodo({commit},index){
		commit(DELETE_TODO,{index})
	},
	selectAllTodos({commit},isCheck){
		commit(SELECT_ALL_TODO,{isCheck})
	},
	deleteFinishedtodos({commit}){
		commit(DELETE_FINISHED_TODO)
	}
}