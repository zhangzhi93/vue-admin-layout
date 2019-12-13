import VueElementLayout from './src/Layout';

VueElementLayout.install = function (Vue) {
  Vue.component(VueElementLayout.name, VueElementLayout);
};

export default VueElementLayout;
