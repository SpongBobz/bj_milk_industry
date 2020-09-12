import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 引入v-viewer 图片查看组件
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

// 引入antD，因为已经使用了babel-plugin-import，此处无需引入css
import "@/utils/cusImportAntd";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
