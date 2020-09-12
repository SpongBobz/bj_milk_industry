<template>
  <div>
    <CusModel :visible="visible" @cancel="closeModel">
      <div class="dataAnalysis">
        <div class="dataAnalysisTitle">{{title}}</div>
        <div class="model-content2">
          <div class="data-box">
            <div class="dataAnalysisChart"></div>
            <div
              class="dataAnalysisDesc"
            >奶牛产奶分为三个阶段，即停奶期、高峰期和淡奶期，每年停奶期大约是90天，一般是下崽之前，高峰期一般持续三个月，在下崽之后，其余时间均为淡奶期。停奶期完全停止产奶，高峰期奶牛产奶量在25公斤至四十公斤，淡奶期一天的产奶量一般在5公斤到20公斤之间。正常情况下，奶牛的单产都有所不同，目前中国的荷斯坦牛平均年产量约5400公斤，最高的年产量能达到12000公斤。</div>
          </div>
          <div class="data-box">
            <div class="dataAnalysisChart"></div>
            <div
              class="dataAnalysisDesc"
            >奶牛的饲养成本包括饲料成本、水电成本、防疫成本、治疗成本等。奶牛的饲料包含了青贮饲料、干草饲料、秸秆、根块类饲料、精饲料，一年约4000元，水电费、配种费、防疫费、治疗费每年每头合约600元，另外奶牛的购买成本约10000元，每年折旧费约2000元，总计饲养成本约6600元。而奶牛的产奶收益，可以按照每年产奶5吨，每吨1800元计算，每年每头奶牛鲜牛奶的收益为9000元。</div>
          </div>
        </div>
      </div>
    </CusModel>
  </div>
</template>
<script>
import CusModel from "../../components/dialog";
export default {
  props: {
    title: {
      type: String,
      default: "中以牛场数据分析"
    }
  },
  components: {
    CusModel
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    closeModel() {
      this.visible = false;
    }
  }
};
</script>
<style lang="less">
@import "../../styles/mixin.less";
.ant-modal-body {
  .dataAnalysis {
    padding: 110 / @h 120 / @w 0;
  }
  .dataAnalysisTitle {
    text-align: center;
    font-size: 40 / @w;
    font-weight: bold;
    letter-spacing: 4 / @w;
    margin-bottom: 62 / @h;
  }
  .model-content2 {
    height: 800 / @h;
    overflow: auto;
    .scrollBar();
    display: flex;
    justify-content: space-between;
    .data-box {
      width: 800 / @w;
    }
    .dataAnalysisChart {
      background: url(../../assets/img/data1.png) no-repeat;
      background-size: 100% 100%;
      height: 460 / @h;
      margin-bottom: 40 / @h;
    }
    .dataAnalysisDesc {
      font-size: 24px;
      text-indent: 2em;
      font-weight: 300;
    }
  }
}
</style>
