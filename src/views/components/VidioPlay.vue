<template>
  <div>
    <CusModel :visible="visible" :destroyOnClose="true" @cancel="closeModel">
      <div class="vidioPlay">
        <video-player class="video-player" ref="videoPlayer" :options="options"></video-player>
      </div>
    </CusModel>
  </div>
</template>
<script>
import CusModel from "../../components/dialog";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          language: "zh-CN",
          sources: [
            {
              type: "video/mp4",
              src: require("../../assets/video/movie.mp4")
            }
          ],
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: true, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          }
        };
      }
    }
  },
  components: {
    CusModel,
    videoPlayer
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
      // this.$nextTick(() => {
      //   this.$refs.videoPlayer.player.play();
      // });
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
  .vidioPlay {
    padding: 110 / @h 120 / @w 0;
  }
}
.video-player {
  .video-js {
    width: 960px;
    height: 720px;
    margin: 0 auto;
    .vjs-big-play-button {
      top: 46%;
      left: 46%;
    }
  }
}
</style>
