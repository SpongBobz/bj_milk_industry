<template>
  <div>
    <CusModel :visible="visible" @cancel="closeModel">
      <div class="companyProfile">
        <div class="companyProfileTitle">
          <img src="../../assets/img/logo2.png" alt />
        </div>
        <div class="model-content3">
          <div>北京市奶业协会的前身是北京市奶牛协会，成立于1983年，1999年更名为北京市奶业协会。2016年新一届会员代表大会召开，本市奶牛育种、奶牛养殖、乳品加工、机械设备、饲草饲料、兽医兽药、大专院校、科研机构、服务组织等涉奶企事业单位为本会会员，目前会员170家。协会以习近平新时代中国特色社会主义思想为指导，以贯彻党和国家一系列方针政策、落实北京市相关文件精神为己任，是党和政府联系奶业生产企业、科技人员、广大奶农和消费者的桥梁与纽带，致力北京现代奶业，致力乳品健康中国。</div>
          <div>北京市奶业协会在国家相关部委、有关组织的大力支持下，在北京市农委、农业农村局、民政局等正确领导下，按照协会章程规定，在行业中发挥“协调、服务、维权、自律”的作用，履行职能，践行责任，发挥优势，不负使命。近几年，在京津冀奶业协同发展、生态养殖环境保护、养殖加工利益协调机制建立、奶业普查等多方面为政府、企业和社会服务，在自身建设上，提高服务能力，提升服务水平，得到各级各方好评。2018年经北京市社会组织评估确认，北京市奶业协会获中国社会组织评估等级AAAAA(五A)级社会组织殊荣。</div>
          <div>新时代,协会将牢记使命,增强“四个意识”,做到“两个维护”,尽责担当,竭诚服务,为推进奶业振兴保障乳品质量安全做出新成绩,为实现中华民族伟大复兴做出新贡献。</div>
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
  .companyProfile {
    padding: 110 / @h 120 / @w 0;
  }
  .companyProfileTitle {
    text-align: center;
    margin-bottom: 22 / @h;
  }
  .model-content3 {
    height: 800 / @h;
    overflow: auto;
    .scrollBar();
    font-size: 26 / @w;
    text-indent: 2em;
    padding: 40 / @h 80 / @w;
    line-height: 2;
    font-weight: 300;
  }
}
</style>
