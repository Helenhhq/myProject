<template>
  <div class="echart">
    <div id="echartsUse" ref="myEchart"></div>
  </div>
</template>

<script>
  import echarts from "echarts"
  import '../../node_modules/echarts/map/js/china.js'

   export default {
    name: "echarts",
    mounted() {
      this.chinaConfigure();
    },
    methods: {
      chinaConfigure() {
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
        myChart.setOption({ // 进行相关配置
          backgroundColor: "#fff",
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
            {
              name: '吃辣程度', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: [{
                "name": "北京",
                "value": 10
              }, {
                "name": "上海",
                "value": 15
              }, {
                "name": "黑龙江",
                "value": 20
              }, {
                "name": "深圳",
                "value": 30
              }, {
                "name": "湖北",
                "value": 85
              }, {
                "name": "浙江",
                "value": 25
              }, {
                "name": "湖南",
                "value": 95
              }, {
                "name": "贵州",
                "value": 95
              }, {
                "name": "云南",
                "value": 80
              }, {
                "name": "重庆",
                "value": 90
              }, {
                "name": "甘肃",
                "value": 70
              }, {
                "name": "河南",
                "value": 76
              }, {
                "name": "新疆",
                "value": 46
              }, {
                "name": "四川",
                "value": 99
              }]
            }
          ]
        })
      },
    }
  }
</script>


<style scoped>
  .echart{
    margin: 50px;
  }
  #echartsUse{
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid #ccc;
  }
</style>