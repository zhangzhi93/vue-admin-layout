// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Menu,
  Submenu,
  MenuItem,
} from 'element-ui';
import VueElementLayout from '../packages/vue-element-layout';
import router from './router';
import store from './store/index';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(VueElementLayout);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

router.beforeEach((to, from, next) => {
  console.log(`to: ${to.path}`);
  store.commit('SET_ACTIVE_MENU', to.path);
  next();
});
