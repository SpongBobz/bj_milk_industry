<template>
  <div>
    <CusModel :visible="visible" @cancel="closeModel">
      <div class="CowDesc">
        <div class="CowDescTitle">中以示范牛场</div>
        <div class="CowDescList">
          <div class="ListItem" v-for="(item,i) in data" :key="i">
            <div style="display: inline-block;">
              <div class="count">{{item.num}}</div>
              <div class="unit">{{item.unit}}</div>
            </div>
            <span class="line"></span>
          </div>
        </div>
        <div class="model-content4">
          <div class="img-list">
            <div class="img-item">
              <div class="img-box">
                <img src="../../assets/img/desc1.png" alt />
              </div>
              <div>2007年1月9日，以色列总理埃胡德.奥尔默特在集团公司总经理张福平陪同下参观中以示范牛场，共同为“中国——以色列现代奶业技术合作中心”揭牌。</div>
            </div>
            <div class="img-item">
              <div class="img-box">
                <img src="../../assets/img/desc2.png" alt />
              </div>
              <div>2007年1月9日，以色列总理埃胡德.奥尔默特在集团公司总经理张福平陪同下参观中以示范牛场，共同为“中国——以色列现代奶业技术合作中心”揭牌。</div>
            </div>
            <div class="img-item">
              <div class="img-box">
                <img src="../../assets/img/desc3.png" alt />
              </div>
              <div>2007年1月9日，以色列总理埃胡德.奥尔默特在集团公司总经理张福平陪同下参观中以示范牛场，共同为“中国——以色列现代奶业技术合作中心”揭牌。</div>
            </div>
          </div>
          <div
            class="desc"
          >中以示范牛场是1997年以色列副总理埃唐访华时同李鹏总理达成的一个合作项目，由北京三元集团和以色列外交部进行项目的实施。牛场位于北京近郊永乐店境内，占地330亩，通过全方位引进、消化、吸收以色列奶牛的饲养工艺、技术、经验及管理模式，运行良好，效果显著，奶牛单产由2001年8000kg上升到了2010年11658kg。2001年至今，先后有以色列奶牛专家lior、Daniel、Meori先生给予奶牛技术现场指导，大大提高牛场的技术管理水平。牛场以奶牛单产高、经济效益好，闻名全国，真正起到了示范作用，成为北京奶业乃至全国奶业的窗口。</div>
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
      visible: false,
      data: [
        { num: 1747, unit: "奶牛(头)" },
        { num: 330, unit: "面积(亩)" },
        { num: 1.68, unit: "年产奶量(万吨)" },
        { num: 9, unit: "牛棚数(个)" },
        { num: 994, unit: "成乳牛(头)" },
        { num: 32.2, unit: "日均单产(kg)" }
      ]
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
  .CowDesc {
    padding: 50 / @h 120 / @w 0;
  }
  .CowDescTitle {
    text-align: left;
    font-size: 54 / @h;
    margin-bottom: 22 / @h;
  }
  .CowDescList {
    display: flex;
    align-items: center;
    text-align: center;
    .ListItem {
      .count {
        font-size: 56 / @h;
        line-height: 1.1;
      }
      .unit {
        font-size: 22 / @h;
        color: #b4b4b4;
      }
      .line {
        display: inline-block;
        width: 1px;
        background-color: #4a4a4c;
        height: 62 / @h;
        margin: 0 40 / @w;
      }
    }
  }
  .model-content4 {
    height: 800 / @h;
    overflow: auto;
    .scrollBar();
    padding: 40 / @h 64 / @w 0 0;
    font-weight: 300;
    .img-list {
      display: flex;
      justify-content: space-between;
      padding: 40 / @h 22 / @w 20 / @h;
      border-top: 1px solid #4a4a4c;
      border-bottom: 1px solid #4a4a4c;
      .img-item {
        width: 430 / @w;
        font-size: 18 / @h;
        .img-box {
          height: 278 / @h;
          text-align: center;
          margin-bottom: 20 / @h;
          img {
            height: 100%;
            width: 430 / @w;
          }
        }
      }
    }
    .desc {
      padding-top: 20 / @h;
      font-size: 24 / @h;
      text-indent: 2em;
      line-height: 2;
    }
  }
}
</style>
