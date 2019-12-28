import VueElementLayout from '../packages/vue-element-layout';
import LayoutTabs from '../packages/layout-tabs';

const components = [
  VueElementLayout,
  LayoutTabs,
];

const install = function (Vue) {
  if (install.installed) return;
  components.forEach(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  VueElementLayout,
  LayoutTabs,
};
