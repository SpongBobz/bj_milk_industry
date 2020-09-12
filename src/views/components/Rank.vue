<template>
  <div>
    <CusModel :visible="visible" @cancel="closeModel">
      <div class="Rank">
        <div class="RankTitle">业内排名</div>
        <div class="button-list">
          <a-button type="primary" shape="round">奶牛 (头)</a-button>
          <a-button type="primary" shape="round">面积 (亩)</a-button>
          <a-button type="primary" shape="round">年产奶量 (万吨)</a-button>
          <a-button type="primary" shape="round">牛棚数 (个)</a-button>
          <a-button class="active" type="primary" shape="round">成乳牛 (头)</a-button>
          <a-button type="primary" shape="round">日均单产 (kg)</a-button>
        </div>
        <div class="rank-data">
          <div class="rank-col">
            <div
              v-for="(name,i) in rankData1"
              :key="i"
              class="c-name"
              :style="{color: i==8 ? '#FE3434': '#fff'}"
            >{{`${i+1} ${name}`}}</div>
          </div>
          <div class="rank-col">
            <div v-for="(name,i) in rankData2" :key="i" class="c-name">{{`${i+12} ${name}`}}</div>
          </div>
          <div class="rank-col">
            <div v-for="(name,i) in rankData3" :key="i" class="c-name">{{`${i+23} ${name}`}}</div>
          </div>
          <div class="rank-col">
            <div v-for="(name,i) in rankData4" :key="i" class="c-name">{{`${i+34} ${name}`}}</div>
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
      visible: false,
      rankData1: [
        "长阳三牛场",
        "半截河牛场",
        "渠头牛场",
        "三垡牛场",
        "草厂牛场",
        "小务牛场",
        "第一牧场",
        "金银岛牧场",
        "中以示范牛场",
        "长阳四牛场",
        "圣兴达养殖有限公司"
      ],
      rankData2: [
        "南口二牛场",
        "南口三场",
        "雄特牧业有限公司",
        "奶牛中心良种场",
        "创辉牛场",
        "里二泗牛场",
        "金鑫园奶牛中心",
        "承三养殖厂",
        "小段奶牛合作社",
        "昌平西峰山牛场",
        "房山中加"
      ],
      rankData3: [
        "房山双萍奶牛场",
        "房山益民奶牛场",
        "密云海华云都",
        "密云鼎盛誉玖1场",
        "台上康源奶牛小区",
        "密云久兴奶牛场",
        "明仁奶牛场",
        "昭阳牧场",
        "兴利鹏奶牛养殖中心",
        "富农奶牛养殖场",
        "建雄奶牛养殖场"
      ],
      rankData4: [
        "广峰养殖场",
        "方旭养殖中心",
        "福乐奶牛场",
        "利源永兆奶牛养殖场",
        "中地乳业有限公司",
        "大地群生养殖专业合作社",
        "延照富民奶牛养殖中心",
        "瑞林奶牛场"
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
@w: 1920/100vw;
@h: 1080/100vh;
.ant-modal-body {
  .Rank {
    padding: 50 / @h 120 / @w 0;
  }
  .RankTitle {
    text-align: left;
    font-size: 54 / @h;
    margin-bottom: 22 / @h;
  }
  .button-list {
    margin: 30 / @h 0 40 / @h;
    & > button {
      margin: 0 10px;
      line-height: 1;
    }
  }
  .rank-data {
    display: flex;
    justify-content: space-between;
    .rank-col {
      .c-name {
        font-size: 28 / @h;
        line-height: 2.4;
      }
    }
  }
}
</style>
