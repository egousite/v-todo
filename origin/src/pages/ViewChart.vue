<template>
  <div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div ref="echarts" style="width: 600px; height: 400px; margin: auto"></div>
  </div>
</template>

<script>
// 按需导入 ECharts 模块
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, BarChart, CanvasRenderer]);
// 从 Vuex 中映射状态
import { mapState } from "vuex";
export default {
  name: "ViewChart",
  computed: {
    ...mapState(["tasks"]),
  },
  mounted() {
    // 指定图表的配置项和数据
    let option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: this.tasks.map((task) => (task.completed ? 1 : 0)),
          type: "line",
        },
        {
          data: this.tasks.map((task) => (!task.completed ? 1 : 0)),
          type: "line",
        },
      ],
    };
    // 基于准备好的dom，初始化echarts实例，并使用刚指定的配置项和数据显示图表。
    echarts.init(this.$refs.echarts).setOption(option);
  },
  watch: {
    tasks: {
      handler(newVal, oldVal) {
        // 图表数据更新
        let option = {
          series: [
            {
              data: newVal.map((task) => (task.completed ? 1 : 0)),
              type: "line",
            },
            {
              data: newVal.map((task) => (!task.completed ? 1 : 0)),
              type: "line",
            },
          ],
        };
        // 更新图表
        echarts.getInstanceByDom(this.$refs.echarts).setOption(option);
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>