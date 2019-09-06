

/*
状态对象模块
*/

import LocalStorage from './../utils/LocalStorageUtil'

export default {
	todos: LocalStorage.readTodos()
}