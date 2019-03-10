<template>
  <div id="Map" class="wapper">
    <div id="mymap" style="width:1200px;height:650px;float:left"></div>
    <div style="width:130px;float:left;">
      <input v-model="boundary" class="boundary">
      <button @click="draw">画图</button>
    </div>
  </div>
</template>

<script>
import BMap from "BMap";
export default {
  name: "BDMap",
  data() {
    return {
      map: "",
      boundary: "12.1,1;12.2,1;12.2,2"
    };
  },
  mounted() {
    //创建和初始化地图函数：

    this.initMap();
  },
  methods: {
    //创建和初始化地图函数：
    initMap() {
      this.createMap(); //创建地图

      // 这后面都错了我不知道为啥，说是什么map没有这个函数心痛
      //
      //this.setMapEvent();//设置地图事件
      //this.addMapControl();//向地图添加控件
      //this.addMapOverlay();//向地图添加覆盖物
      this.polyn();
    },
    draw() {
      this.polyn();
    },
    createMap() {
      this.map = new BMap.Map("mymap");
      this.map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
      this.map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
    },
    polyn() {
      var borders = this.boundary.split("|");
      for (var i = 0; i < borders.length; i++) {
        this.addPolyn(borders[i]);
      }
    },
    addPolyn(border, color) {
      var pointsArr = border.split(";");
      var mapPoints = [];
      for (var i = 0; i < pointsArr.length; i++) {
        var pArr = pointsArr[i].split(",");
        mapPoints.push(new BMap.Point(pArr[0], pArr[1]));
      }
      this.map.centerAndZoom(mapPoints[0], 10);
      var curColor = "red";
      if(color == null || !color) {
          
      } else {
          curColor = color;
      }
      var polygon = new BMap.Polygon(mapPoints, {
        strokeColor: "black",
        strokeWeight: 1,
        strokeOpacity: 1,
        fillColor: curColor,
        fillColorOpacity:"0.4"
      });
      this.map.addOverlay(polygon);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.iw_poi_title {
  color: #cc5522;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  padding-right: 13px;
  white-space: nowrap;
}
.iw_poi_content {
  font: 12px arial, sans-serif;
  overflow: visible;
  padding-top: 4px;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}
</style>
