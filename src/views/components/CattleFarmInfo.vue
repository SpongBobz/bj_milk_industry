<template>
  <div>
    <CusModel :visible="visible" @cancel="closeModel">
      <div class="CattleFarmInfo">
        <div class="title">{{title}}</div>
        <div class="model-content">
          <CattleFarmCard v-for="(item,index) in dataList" :key="index" :data="item"></CattleFarmCard>
        </div>
      </div>
    </CusModel>
  </div>
</template>
<script>
import CusModel from "../../components/dialog";
import CattleFarmCard from "../../components/CattleFarmCard";
export default {
  props: {
    title: {
      type: String,
      default: "北京奶协牛场信息"
    },
    dataList: Array
  },
  components: {
    CusModel,
    CattleFarmCard
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
  .CattleFarmInfo {
    padding: 110 / @h 120 / @w 0;
  }
  .title {
    text-align: center;
    font-size: 40 / @w;
    font-weight: bold;
    letter-spacing: 4 / @w;
    margin-bottom: 62 / @h;
  }
  .model-content {
    height: 800 / @h;
    overflow: auto;
    .scrollBar();
  }
}
</style>
