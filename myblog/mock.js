
const Mock = require('mockjs');

const Random = Mock.Random;

const addressData = function(){ 

	let addresses = [];

	for(let i = 0;i < 20;i++){
		let addressObj = {
			Name:Random.cname(),
            title:Random.pick(['总监','总经理','副总经','主管','副主管','专员']),
            branch:Random.pick(['董事会','财务部','人事部','技术部','实施部','客服部','销售部','产品部']),
            office_Tel:Mock.mock({"number|1000-9999": 6666}).number,
            personal_phone:Mock.mock({'regexp': /^1[34578]\d{9}$/}).regexp,
            E_mail:Random.email(),
            grade:Mock.mock({"number|1-10": 10}).number,
            sentence:Random.csentence(10,30)
		};
		addresses.push(addressObj);
	}

	return {
		addresses:addresses
	};
}

Mock.mock('/addresses/api','post',addressData)