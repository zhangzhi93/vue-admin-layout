<template>
  <el-container>
    <Slider :siderWidth="siderWidth" :data="menuData" :layout="layout" :logo="logo" :title="title"
      @onMenuHeaderClick="onMenuHeaderClick" :collapse="expand" />
    <el-container class="container">
      <slot name="header">
        <Header :layout="layout" @trigger="toggle" :isCollapse="isCollapse" />
      </slot>
      <el-main class="main">
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue';
import Slider from './Slider/Slider.vue';
import setting from './setting';

export default {
  name: 'vue-element-layout',
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
    layout: {
      type: String,
      default: 'sidemenu',
    },
    logo: {
      type: String,
      default: setting.logo,
    },
    title: {
      type: String,
      default: setting.title,
    },
    siderWidth: {
      type: String,
      default: setting.siderWidth,
    },
    isCollapse: {
      type: Boolean,
      default: setting.isCollapse,
    },
  },
  data () {
    return {
      expand: false,
    };
  },
  components: {
    Header,
    Slider,
  },
  methods: {
    onMenuHeaderClick () {
      this.$emit('onMenuHeaderClick');
    },
    toggle (bol) {
      this.expand = bol;
    },
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
</style>
<style lang="less" scoped>
.main {
  margin-top: 64px;
  max-height: calc(~"100vh - 64px");
  overflow-y: auto;
}
</style>
