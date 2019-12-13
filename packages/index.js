import VueElementLayout from './vue-element-layout';

const components = [
  VueElementLayout,
];

const install = function (Vue) {
  components.forEach(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueElementLayout,
};
