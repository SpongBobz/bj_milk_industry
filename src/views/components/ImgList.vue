<template>
  <div>
    <CusModel :visible="visible" @cancel="closeModel">
      <div class="ImgList">
        <div class="ImgListTitle">牛场图片</div>
        <div class="img-content">
          <div class="list-box" v-for="item in 4" :key="item">
            <div class="img-list" v-for="num in 7" :key="num">
              <img src="../../assets/img/cow.png" alt />
              <div>NYXH000{{num}}</div>
            </div>
          </div>
        </div>
      </div>
    </CusModel>
  </div>
</template>
<script>
import CusModel from "../../components/dialog";
export default {
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
  .ImgList {
    padding: 50 / @h 120 / @w 0;
  }
  .img-content {
    height: 900 / @h;
    overflow: auto;
    .scrollBar();
    font-weight: 300;
  }
  .ImgListTitle {
    text-align: center;
    font-size: 30 / @h;
    margin-bottom: 22 / @h;
  }
  .list-box {
    display: flex;
    text-align: center;
  }
  .img-list {
    margin: 20 / @h 16 / @h 10 / @h;
  }
}
</style>
