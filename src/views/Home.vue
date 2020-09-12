<template>
  <div class="home">
    <a-layout>
      <!-- 顶部 -->
      <a-layout-header class="header">
        <img class="logo" src="../assets/img/logo.png" />
        <span class="main-title">北京奶业全景三维数字地图</span>
        <span class="main-title-s">北京市奶业协会</span>
      </a-layout-header>
      <a-layout class="main">
        <a-layout>
          <!-- 中间内容区域 -->
          <a-layout-content class="content"></a-layout-content>
          <!-- 页脚 -->
          <a-layout-footer class="footer">
            <a-tabs
              :tabBarStyle="{color: '#fff',height: '51px !important','font-weight': 'bold'}"
              default-active-key="通州"
            >
              <a-tab-pane v-for="(item) in data" :key="item.name" :tab="item.name">
                <div class="panl-box">
                  <div class="line-list" v-for="(name,index) in item.items" :key="name">
                    <span class="list-name" :class="{active: currentName== name}">{{name}}</span>
                    <span class="list-line" v-show="item.items.length-1 != index"></span>
                  </div>
                </div>
              </a-tab-pane>
            </a-tabs>
            <div class="but-group">
              <a-button type="primary" shape="round">自动播放</a-button>
              <a-button type="primary" shape="round" @click="open1">北京数据</a-button>
              <a-button class="active" type="primary" shape="round" @click="open2">全国数据</a-button>
              <a-button type="primary" shape="round" @click="open3">奶协简介</a-button>
            </div>
          </a-layout-footer>
        </a-layout>
        <!-- 侧边栏 -->
        <a-layout-sider class="sider" width="310">
          <div class="box-1">
            <div class="cow-name">
              <span style="font-size: 30px">中以示范牛场</span>
              <span class="detail" @click="open4">详情</span>
            </div>
            <div style=" color: #c4c4c4;">通州区永乐店镇德仁务前街村西侧</div>
          </div>
          <div class="box-header">牛场概况</div>
          <div class="box-2">
            <div class="row-box">
              <div class="info-box">
                <div class="sta-num">1147</div>
                <div class="sta-type">奶牛(头)</div>
              </div>
              <div class="line" style="width: 1px; background-color: #707070;height: 64px;"></div>
              <div class="info-box">
                <div class="sta-num">330</div>
                <div class="sta-type">面积(亩)</div>
              </div>
            </div>
            <div class="row-box">
              <div class="info-box">
                <div class="sta-num">11.6</div>
                <div class="sta-type">年产奶量(万吨)</div>
              </div>
              <div class="line" style="width: 1px; background-color: #707070;height: 64px;"></div>
              <div class="info-box">
                <div class="sta-num">9</div>
                <div class="sta-type">牛棚数(个)</div>
              </div>
            </div>
            <div class="row-box">
              <div class="info-box">
                <div class="sta-num">994</div>
                <div class="sta-type">成乳牛(头)</div>
              </div>
              <div class="line" style="width: 1px; background-color: #707070;height: 64px;"></div>
              <div class="info-box">
                <div class="sta-num">32.2</div>
                <div class="sta-type">日均单产(kg)</div>
              </div>
            </div>
            <div>
              <div @click="open5" class="circle-box" :class="{active: isActive == 1}">背景分析</div>
              <div
                @click="isActive=2"
                style=" margin:0 20px;"
                :class="{active: isActive == 2}"
                class="circle-box"
              >数据汇总</div>
              <div @click="open6" class="circle-box" :class="{active: isActive == 3}">业内排名</div>
            </div>
          </div>
          <div class="box-header">
            <span>图片</span>
            <div class="more" @click="open7">
              <a-icon type="more" />
            </div>
          </div>
          <div class="box-3">
            <viewer :options="options" @inited="inited">
              <template>
                <img class="info-img" src="../assets/img/img1.png" alt="北京三元绿荷养殖中心1" />
                <img class="info-img" src="../assets/img/img2.png" alt="北京三元绿荷养殖中心2" />
                <img class="info-img" src="../assets/img/img3.png" alt="北京三元绿荷养殖中心3" />
                <img class="info-img" src="../assets/img/img4.png" alt="北京三元绿荷养殖中心4" />
              </template>
            </viewer>
          </div>
          <div class="box-header">
            <span>视频</span>
            <div class="more">
              <a-icon type="more" />
            </div>
          </div>
          <div class="box-4">
            <div
              v-for="item in vidioImgs"
              :key="item"
              class="vidio-img"
              @click="playVidio"
              :style="{background: `url( ${item}) no-repeat`}"
            >
              <img src="../assets/img/play.png" alt />
            </div>
          </div>
        </a-layout-sider>
      </a-layout>
    </a-layout>
    <CattleFarmInfo ref="CattleFarmInfo" :title="cattleFarmTitle" :dataList="cattleFarmDatas"></CattleFarmInfo>
    <DataAnalysis ref="DataAnalysis"></DataAnalysis>
    <CompanyProfile ref="CompanyProfile"></CompanyProfile>
    <CowDesc ref="CowDesc"></CowDesc>
    <Rank ref="Rank"></Rank>
    <ImgList ref="ImgList"></ImgList>
    <VidioPlay ref="VidioPlay"></VidioPlay>
    <div class="img-pre" @click="prev" :style="{'display': isShow }">
      <a-icon type="left" />
    </div>
    <div class="img-next" @click="next" :style="{'display': isShow }">
      <a-icon type="right" />
    </div>
  </div>
</template>

<script>
import CattleFarmInfo from "./components/CattleFarmInfo";
import DataAnalysis from "./components/DataAnalysis";
import CompanyProfile from "./components/CompanyProfile";
import CowDesc from "./components/CowDesc";
import Rank from "./components/Rank";
import ImgList from "./components/ImgList";
import VidioPlay from "./components/VidioPlay";

let list = [];
for (let index = 3; index > 0; index--) {
  list.push(require(`../assets/img/vidioImg${index}.png`));
}
export default {
  name: "Home",
  components: {
    VidioPlay,
    CattleFarmInfo,
    DataAnalysis,
    CompanyProfile,
    CowDesc,
    Rank,
    ImgList
  },
  data() {
    return {
      isActive: 2,
      data: [
        { name: "延庆", items: ["牛场1", "牛场2", "牛场3"] },
        { name: "密云", items: ["牛场1", "牛场2", "牛场3"] },
        { name: "顺义", items: ["牛场1", "牛场2", "牛场3"] },
        { name: "昌平", items: ["牛场1", "牛场2", "牛场3"] },
        {
          name: "通州",
          items: [
            "中以牛场",
            "半截河牛场",
            "渠头牛场",
            "三垡牛场",
            "草厂牛场",
            "小务牛场",
            "第一牧场"
          ]
        },
        { name: "大兴", items: ["牛场1", "牛场2", "牛场3"] },
        { name: "房山", items: ["牛场1", "牛场2", "牛场3"] }
      ],
      currentName: "中以牛场",
      // 播放器配置
      playerOptions: {
        language: "zh-CN",
        sources: [
          {
            type: "video/mp4",
            src: require("../assets/video/movie.mp4")
          }
        ],
        controlBar: {
          timeDivider: false, // 当前时间和持续时间的分隔符
          durationDisplay: false, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: false // 是否显示全屏按钮
        }
      },
      vidioImgs: list,
      cattleFarmTitle: "",
      cattleFarmDatas: [],
      // 图片查看器配置
      options: {
        toolbar: false, // 是否显示工具栏
        backdrop: false, //是否显示背景
        movable: true, // 是否允许拖动
        // 自定义图片名称
        title: a => {
          return a.getAttribute("alt");
        },
        url: "src"
      },
      viewer: {
        isShown: false
      },
      isShow: "none"
    };
  },
  watch: {
    "viewer.isShown"(n) {
      if (n) this.isShow = "block";
      else this.isShow = "none";
    }
  },
  methods: {
    playVidio() {
      this.$refs.VidioPlay.open();
    },
    inited(i) {
      this.viewer = i;
    },
    prev() {
      this.viewer.prev();
    },
    next() {
      this.viewer.next();
    },
    open1() {
      this.cattleFarmTitle = "北京奶协牛场信息";
      this.cattleFarmDatas = [
        { name: "延庆", cow: 9159, c: 10, n: 3.26, t: 5282 },
        { name: "密云", cow: 10928, c: 5, n: 5.21, t: 6647 },
        { name: "顺义", cow: 11567, c: 8, n: 3.82, t: 6089 },
        { name: "昌平", cow: 4323, c: 5, n: 2.46, t: 2597 },
        { name: "通州", cow: 9147, c: 8, n: 5.72, t: 5587 },
        { name: "大兴", cow: 4274, c: 5, n: 2.59, t: 2287 },
        { name: "房山", cow: 6753, c: 6, n: 3.12, t: 4046 }
      ];
      this.$refs.CattleFarmInfo.open();
    },
    open2() {
      this.cattleFarmTitle = "首农食品集团奶牛信息";
      this.cattleFarmDatas = [
        { name: "北京", cow: 25626, c: 50, n: 15.8, t: 16400 },
        { name: "河北", cow: 32360, c: 7, n: 16.18, t: 17282 },
        { name: "河南", cow: 8223, c: 2, n: 2.6, t: 3462 },
        { name: "内蒙古", cow: 3146, c: 1, n: 1.9, t: 1756 },
        { name: "黑龙江", cow: 3423, c: 1, n: 1.8, t: 1858 },
        { name: "吉林", cow: 3195, c: 1, n: 1.7, t: 1756 },
        { name: "山东", cow: 5077, c: 1, n: 2.7, t: 2623 },
        { name: "云南", cow: 876, c: 1, n: 0.3, t: 369 }
      ];
      this.$refs.CattleFarmInfo.open();
    },
    open3() {
      this.$refs.CompanyProfile.open();
    },
    open4() {
      this.$refs.CowDesc.open();
    },
    open5() {
      this.isActive = 1;
      this.$refs.DataAnalysis.open();
    },
    open6() {
      this.isActive = 3;
      this.$refs.Rank.open();
    },
    open7() {
      this.$refs.ImgList.open();
    }
  }
};
</script>
<style lang="less">
@import "../styles/index.less";
.home {
  width: 100%;
  height: 100vh;
  color: #fff;
  .img-pre {
    position: absolute;
    left: 70px;
    font-size: 50px;
    top: calc(50% - 50px);
    cursor: pointer;
    z-index: 99999;
  }
  .img-next {
    position: absolute;
    right: 70px;
    font-size: 50px;
    cursor: pointer;
    top: calc(50% - 50px);
    z-index: 99999;
  }
  .header {
    height: 70px;
    background-color: #252525;
    padding: 0 34px;
    line-height: 70px;
    text-align: left;
    display: flex;
    align-items: center;
    .logo {
      width: 64px;
      height: 52px;
      margin-right: 9px;
    }
    .main-title {
      font-size: 32px;
      font-weight: bold;
      margin-right: 35px;
      letter-spacing: 3px;
    }
    .main-title-s {
      color: #a7a4a4;
      padding-left: 35px;
      font-size: 24px;
      border-left: 1px solid #a7a4a4;
      display: inline-block;
      height: 28px;
      line-height: 28px;
    }
  }
  .main {
    height: calc(100vh - 70px);
  }
  .sider {
    background-color: #484848;
    font-size: 16px;
    overflow-y: auto;
    .scrollBar();
    .box-1 {
      height: 104px;
      padding: 12px;
      text-align: left;
      .cow-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 3px 4px;
      }
      .detail {
        text-decoration: underline;
        cursor: pointer;
        color: #c4c4c4;
      }
    }
    .box-2 {
      height: 424px;
      .row-box {
        display: flex;
        justify-content: space-around;
        height: 106px;
        align-items: center;
        .info-box {
          flex: 1;
          .sta-num {
            font-size: 42px;
            height: 56px;
          }
          .sta-type {
            font-size: 18px;
            color: #c4c4c4;
          }
        }
        .line {
          width: 1px;
          background-color: #707070;
          height: 64px;
          margin-top: 10px;
        }
      }
      .circle-box {
        margin-top: 10px;
        display: inline-block;
        width: 72px;
        height: 72px;
        border: 1px solid #fff;
        border-radius: 50%;
        font-size: 18px;
        padding: 10px 15px;
        line-height: 24px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #2c86ff;
        }
        &.active {
          background-color: #2c86ff;
        }
      }
    }
    .box-3 {
      height: 224px;
      padding: 2px 0px 0 4px;
      .info-img {
        cursor: pointer;
        margin: 6px 0px 0px 6px;
      }
    }
    .box-4 {
      .vidio-img {
        width: 98px;
        height: 70px;
        display: inline-block;
        line-height: 70px;
        margin: 12px 0;
        cursor: pointer;
      }
    }
    .box-header {
      height: 41px;
      background-color: #252525;
      font-size: 18px;
      line-height: 41px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      padding-left: 12px;
      .more {
        width: 24px;
        background-color: #181818;
        font-size: 24px;
        cursor: pointer;
        font-weight: bold;
        &:hover {
          color: #2c86ff;
        }
      }
    }
  }
  .content {
    // height: 100%;
    background: url(../assets/img/map.png) no-repeat;
    background-size: 100%;
  }
  .footer {
    text-align: left;
    position: relative;
    color: #fff;
    height: 110px;
    padding: 0 0 0 30px;
    background-color: #252525;
    color: #fff;
    .panl-box {
      color: #ebebeb;
      font-size: 22px;
      background-color: #2c2f30;
      height: 58px;
      // line-height: 56px;
      .line-list {
        display: inline-flex;
        align-items: center;
        .list-name {
          display: inline-block;
          padding: 12px 2px 8px;
          transition: all 0.3s;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          &:hover {
            color: #2c86ff;
            border-bottom: 2px solid #2c86ff;
          }
          &.active {
            color: #2c86ff;
            border-bottom: 2px solid #2c86ff;
          }
        }
        .list-line {
          display: inline-block;
          height: 24px;
          width: 2px;
          margin: 6px 14px 0px;
          background-color: #7e7e7e;
        }
      }
    }
    .but-group {
      position: absolute;
      right: 15px;
      top: 10px;
      & > button {
        margin: 0 5px;
      }
    }
  }
}
</style>
