<template>
  <div id="Test">
    <div class="wrap">
      <div class="titletest">指令综合小练习</div>
      <div class="form">
        <label>姓名：<input type="text" placeholder="请输入姓名" v-model="newperson.name"></label><br>
        <label>年龄：<input type="text" placeholder="请输入年龄" v-model="newperson.age"></label><br>
        <label>性别：<input type="radio" name="gender" value="男" v-model="newperson.sex">&nbsp;男&nbsp;&nbsp;&nbsp;<input type="radio" name="gender" value="女" v-model="newperson.sex">&nbsp;女</label><br>
        <label>手机：<input type="text" placeholder="请输入手机号码"  v-model="newperson.phone"></label><br>
        <button class="btn btn-primary" @click="createNewPerson">创建新用户</button>
      </div>
    </div>
    <div class="newuser">
      <table>
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机</td>
          <td>删除</td>
        </tr>
        <tr v-for="(p,index) in persons" :key="index">
          <td>{{p.name}}</td>
          <td>{{p.age}}</td>
          <td>{{p.sex}}</td>
          <td>{{p.phone}}</td>
          <td><button class="btn btn-default" @click="delPerson(index)">删除</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// data用函数而不是对象什么的，因为要考虑到复用，不能数据共享
	export default {
		name: 'Test',
		data(){
			return{
				persons:[
					{name:"hhq",age:22,sex:"女",phone:"18867804620"},
					{name:"helen",age:25,sex:"男",phone:"18857801244"},
					{name:"emily",age:18,sex:"女",phone:"18877804236"},
					{name:"jone",age:32,sex:"男",phone:"18868805567"},
				],
				newperson:{name:"",age:0,sex:"男",phone:""}
			}
		},
		methods: {
			createNewPerson(){
				let {name,age,sex,phone} = this.newperson;
				if(name === ""){
					alert("姓名不能为空！");
					return
				}
				if(age <= 0){
					alert("年龄不正确！");
					return
				}
				if(phone === ""){
					alert("手机号码不正确！");
					return
				}
				this.persons.unshift(this.newperson);
				this.newperson = {name:"",age:0,sex:"男",phone:""};
			},
			delPerson(index){
				this.persons.splice(index,1);
			}
		}
	}

</script>

<style scoped>
  .wrap{
    width: 600px;
    height: 400px;
    border:2px solid blue;
    position: relative;
    margin: 100px auto 20px;
  }
  .newuser{
    width: 600px;
    border:1px solid blue;
    margin: 0 auto 100px;
    box-sizing: border-box;
  }
  .newuser table{
    width: 600px;
    text-align: center;
  }
  .newuser table td{
    height: 40px;
  }
  .newuser table tr:first-child{
    background-color: blue;
  }
  .newuser table tr:first-child td{
    border:1px solid #fff;
    color: #fff;
    height: 30px;
  }
  .titletest{
    width: 120px;
    height: 30px;
    background-color: #fff;
    color: #666;
    letter-spacing: 2px;
    position: absolute;
    top: -10px;
    left: 30px;
    font-size: 14px;
  }
  .form{
    position: absolute;
    top: 60px;
    left: 20px;
    text-align: left;
  }
  .form label{
    margin: 20px 0;
  }
</style>