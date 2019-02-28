<template>
<div>
	<el-row :gutter="30">
        <el-col :span="6"  style="margin-top:30px;">
        <div class="grid-content blue">
        <div class="inner">
                <h3>10</h3>
                <p>物联网设备总数</p>
            </div>
            <div class="more">更多</div>
        </div></el-col>
        <el-col :span="6"  style="margin-top:30px;">
        <div class="grid-content darkgreen">
        <div class="inner">
                <h3>10</h3>
                <p>互联网在线设备</p>
            </div>
            <div class="more">更多</div>
        </div></el-col>
        <el-col :span="6"  style="margin-top:30px;">
        <div class="grid-content yellow">
        <div class="inner">
                <h3>10</h3>
                <p>物联网离线设备总数</p>
            </div>
            <div class="more">更多</div>
        </div></el-col>
        <el-col :span="6"  style="margin-top:30px;">
        <div class="grid-content red">
        <div class="inner">
                <h3>10</h3>
                <p>后台用户</p>
            </div>
            <div class="more">更多</div>
        </div></el-col>
        <el-col :span="6"  style="margin-top:30px;">
        <div class="grid-content green">
        <div class="inner">
                <h3>10</h3>
                <p>操作日志</p>
            </div>
            <div class="more">更多</div>
        </div></el-col>
   </el-row> 
   <h3>设备分布</h3>
   <baidu-map style="border:solid 5px #65a7cd"  class="bm-view" :center="{lng: 105.000, lat: 38.000}" :zoom="4" scroll-wheel-zoom continuous-zoom  ak="http://api.map.baidu.com/api?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ">
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <!-- <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection> -->
      <bm-marker v-for="(item,index) in arr" :key="index" :position="{lng: item.lng, lat: item.lat}"  @click="infoWindowOpen(index)">
        <bm-info-window :show="item.isSHow"><h3 style="margin:0;">设备详情:</h3>{{"经度:"+item.lng}}<br>{{"纬度:"+item.lat}}<br>{{"设备名称:"+item.name}}<br>{{"设备id:"+item.id}}</bm-info-window>
      </bm-marker>
  </baidu-map>
  <section class="chart-container" style="margin-top:50px;">
        <el-row>
            <div id="chartLine" style="width:100%; height:400px;"></div>
        </el-row>
    </section>
</div>
</template>
<script>
//import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import {
  BmScale,
  BmNavigation,
  BmGeolocation,
  BmCityList,
  BmPointCollection,
  BmMarker,
  BmInfoWindow
} from "vue-baidu-map";
import echarts from "echarts";
export default {
  data() {
    return {
      show: false,
      points: [],
      arr: [
        {
          lng: 106.404,
          lat: 50.915,
          name: "演示设备",
          id: 1,
          isSHow: false
        },
        {
          lng: 116.404,
          lat: 29.915,
          name: "演示设备",
          id: 2,
          isSHow: false
        },
        {
          lng: 126.404,
          lat: 45.915,
          name: "演示设备",
          id: 3,
          isSHow: false
        },
        {
          lng: 120.404,
          lat: 45.915,
          name: "演示设备",
          id: 3,
          isSHow: false
        }
      ],
      chartColumn: null,
      chartBar: null,
      chartLine: null,
      chartPie: null
    };
  },
  methods: {
    clickHandler(e) {
      alert(
        `单击点的坐标为：${e.point.lng}, ${e.point.lat},设备名称：${
          e.point.aa
        },设备id：${e.point.id},设备状态：${e.point.cc}`
      );
    },
    addPoints() {
      const points = [];
      for (var i = 0; i < 100; i++) {
        const position = {
          lng: Math.random() * 40 + 85,
          lat: Math.random() * 30 + 21,
          aa: "设备演示",
          id: 56416546,
          cc: "在线"
        };
        points.push(position);
      }
      this.points = points;
    },
    infoWindowOpen(index) {
      this.arr[index].isSHow = !this.arr[index].isSHow;
    },
    drawLineChart() {
      this.chartLine = echarts.init(document.getElementById("chartLine"));
      this.chartLine.setOption({
        title: {
          text: "设备趋势图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    }
  },
  mounted() {
    this.addPoints();
    this.drawLineChart();
  },
  components: {
    BmScale,
    BmNavigation,
    BmGeolocation,
    BmCityList,
    BmPointCollection,
    BmMarker,
    BmInfoWindow
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  position: relative;
  height: 130px;
}
.grid-content .inner {
  padding: 10px;
}
.grid-content .inner h3 {
  font-size: 38px;
  margin: 0;
  color: #fff;
}
.grid-content p {
  color: #fff;
}
.grid-content .more {
  background-color: #00acd7;
  text-align: center;
  line-height: 25px;
  color: #fff;
  position: absolute;
  width: 100%;
  bottom: 0;
  cursor: pointer;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.blue {
  background: #00c0ef;
}
.blue .more {
  background: #00acd7;
}
.darkgreen {
  background: #00a65a;
}
.darkgreen .more {
  background: #009551;
}
.yellow {
  background: #f39c12;
}
.yellow .more {
  background: #da8c10;
}
.red {
  background: #dd4b39;
}
.red .more {
  background: #c64333;
}
.green {
  background: #01ff70;
}
.green .more {
  background: #01e565;
}
.deep_blue {
  background: #3c8dbc;
}
.deep_blue .more {
  background: #367fa9;
}
.bm-view {
  width: 100%;
  height: 500px;
}
</style>