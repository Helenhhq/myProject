<template>
  <div id="personalInfo">
    <p class="address">企业通讯录(Mock)</p>
    <input class="search" type="text" placeholder="请输入要查找的内容" v-model="searchtext">
    <button class="btn btn-primary" @click="searchContent">查找</button><br>
    <button class="btn btn-primary" @click="orderGrade(0)">默认</button>
    <button class="btn btn-primary" @click="orderGrade(2)">等级↑</button>
    <button class="btn btn-primary" @click="orderGrade(1)">等级↓</button>
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>职务</td>
          <td>部门</td>
          <td>办公电话</td>
          <td>个人电话</td>
          <td>个人邮箱</td>
          <!-- <td>等级</td> -->
        </tr>
       </thead>
      <tbody>
        <tr v-for="(address,index) in searchContent" :key="addkey[index]">
          <td>{{address.Name}}</td>
          <td>{{address.title}}</td>
          <td>{{address.branch}}</td>
          <td>{{address.office_Tel}}</td>
          <td>{{address.personal_phone}}</td>
          <td>{{address.E_mail}}</td>
          <!-- <td>{{address.grade}}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script> 

  import "../../mock.js"
  import shortId from 'shortid'

  export default {
    name: 'personalInfo',
    data(){
      return{
        addresses:[],
        addkey:"",
        ordertype:0,
        searchtext:"",
        addressMain:[
          {
            Name:"张三丰",
            title:"董事长",
            branch:"董事会",
            office_Tel:"8888",
            personal_phone:"18878886888",
            E_mail:"xyz@obj.cn",
            grade:9999
          },
          {
            Name:"张三",
            title:"CEO",
            branch:"董事会",
            office_Tel:"6666",
            personal_phone:"18866666888",
            E_mail:"abc@obj.cn",
            grade:8888
          },
          {
            Name:"李四",
            title:"COO",
            branch:"董事会",
            office_Tel:"5555",
            personal_phone:"18855556888",
            E_mail:"def@obj.cn",
            grade:7777
          },
        ]
      }
    },
    computed: {
      searchContent(){
        let {searchtext,addresses,ordertype} = this;
        let arrData = [...addresses];
        if(searchtext.trim()){
          arrData = addresses.filter(data => data.Name.indexOf(searchtext) !== -1);
        }
        if(ordertype){
          arrData.sort((a1,a2) => {
            if(ordertype === 1){
              return a2.grade - a1.grade;
            }
            else{
              return a1.grade - a2.grade;
            }
          })
        }
        return arrData;
      }
    },
    methods: {
      orderGrade(ordertype){
        this.ordertype = ordertype;
      }
    },
    created(){
      this.$axios.post('/addresses/api')
      .then((res) => {
        this.addresses = res.data.addresses;
        this.addresses.unshift(this.addressMain[0],this.addressMain[1],this.addressMain[2]);
        // console.log(this.addresses)
      })
      .catch((err) => {
        console.log("出错了啊！=>"+err)
      })
    },
    mounted(){
      this.addkey = this.addresses.map(v => shortId.generate())
    }
  }
</script>

<style scoped>
  #personalInfo{
    margin: 0 auto 80px;
    width: 800px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 30px;
  }
  .address{
    font-size: 30px;
    font-weight: bold;
  }
  table{
    width: 800px;
  }
  table tr td{
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 22px;
    border-bottom: 1px dashed #ccc;
  }
  thead tr td{
    background: rgb(170,31,17);
    color: #fff;
    border-bottom: 0;
  }
  thead tr td:first-child{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 50px;
    color: #fff;
  }
   thead tr td:last-child{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .btn{
    margin: 20px;
  }
  .search{
    width: 250px;
    height: 40px;
    padding-left: 10px;
  }
</style>