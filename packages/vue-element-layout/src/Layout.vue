<template>
  <el-container>
    <Slider :data="menuData" :layout="layout" :logo="logo" :title="title"
      @onMenuHeaderClick="onMenuHeaderClick" :collapse="expand" :default-active="defaultActive"
      :default-openeds="defaultOpeneds" :unique-opened="uniqueOpened">
      <slot name="menuHeader" slot="menuHeader"></slot>
      <slot name="asideExtra" slot="asideExtra"></slot>
    </Slider>
    <el-container class="container">
      <Header :layout="layout" @trigger="toggle" :collapse="collapse" :isCollapse="isCollapse">
        <slot name="header" slot="header"></slot>
        <slot name="collapsedButton" slot="collapsedButton"></slot>
        <slot name="rightContent" slot="rightContent"></slot>
        <slot name="navTabs" slot="navTabs"></slot>
      </Header>
      <el-main :class="['main',$slots.navTabs?'has-tabs':'']">
        <slot></slot>
        <div class="footer" v-if="showFooter">
          <slot name="footer">
            <p>Vue-Element-Layout</p>
            <a href="https://github.com/zhangzhi93"
              target="_blank">https://github.com/zhangzhi93</a>
          </slot>
        </div>
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
    isCollapse: {
      type: Boolean,
      default: setting.isCollapse,
    },
    defaultActive: {
      type: String
    },
    defaultOpeneds: {
      type: Array
    },
    uniqueOpened: {
      type: Boolean,
      default: setting.uniqueOpened,
    },
    collapse: {
      type: Boolean,
      default: setting.collapse,
    },
    showFooter: {
      type: Boolean,
      default: setting.showFooter,
    }
  },
  data() {
    return {
      expand: false,
    };
  },
  components: {
    Header,
    Slider,
  },
  watch: {
    collapse: {
      handler(val) {
        this.expand = val;
      },
      immediate: true
    },
    expand(val) {
      this.$emit('update:collapse', val);
    }
  },
  methods: {
    onMenuHeaderClick() {
      this.$emit('onMenuHeaderClick');
    },
    toggle(bol) {
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
  max-height: calc(~"100vh - 64px");
  overflow-y: auto;
  padding: 0;
  &.has-tabs {
    max-height: calc(~"100vh - 99px");
  }
}
.container {
  flex-direction: column;
}
.footer {
  text-align: center;
  padding: 20px 0;
  color: rgba(0, 0, 0, 0.45);
}
</style>
