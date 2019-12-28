import Vue from 'vue';
import router from './router';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { VueElementLayout, LayoutTabs } from './lib/index';
// import VueElementLayout from './packages/vue-element-layout';
// import LayoutTabs from './packages/layout-tabs';
import App from './App.vue';


Vue.config.productionTip = false;

Vue.use(element);
Vue.use(VueElementLayout);
Vue.use(LayoutTabs);


new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
