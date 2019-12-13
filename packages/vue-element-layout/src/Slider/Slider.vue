<template>
  <el-aside width="auto" class="layout-slider">
    <slot name="menuHeader">
      <div class="logo" @click="onMenuHeaderClick">
        <img :src="logo" :alt="title">
        <h1 :class="{'collapsed':collapse}">{{title}}</h1>
      </div>
    </slot>
    <el-menu :collapse="collapse" :unique-opened="true" router class="slider-menu">
      <template v-for="menu in data">
        <sub-menu v-if="menu.children&&menu.children.length!==0" :key="menu.name" :item="menu" />
        <menu-item v-else :key="menu.name" :item="menu" />
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import SubMenu from './SubMenu.vue';
import MenuItem from './MenuItem.vue';

export default {
  name: 'Slider',
  props: ['data', 'layout', 'logo', 'title', 'siderWidth', 'collapse'],
  data () {
    return {};
  },
  components: {
    SubMenu,
    MenuItem,
  },
  methods: {
    onMenuHeaderClick () {
      this.$emit('onMenuHeaderClick');
    },
  },
};
</script>

<style lang="less">
.layout-slider {
  z-index: 100;
  text-align: left;
  background-color: #fff;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  height: 100vh;
  .logo {
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 64px;
    text-align: center;
    line-height: 64px;
    background-color: #367eff;
    box-shadow: 0 2px 6px rgba(0, 21, 41, 0.35);
    img {
      display: inline-block;
      height: 32px;
      vertical-align: middle;
    }
    h1 {
      display: inline-block;
      margin: 0 0 0 12px;
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      vertical-align: middle;
      // width: calc (~"100% - 32px");
      width: 180px;
      height: 100%;
      overflow: hidden;
      // background-color: #000;
      transition: all ease 0.2s;
    }
    h1.collapsed {
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
  > .el-menu {
    padding-top: 5px;
    border-right: none;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 45px;
    line-height: 45px;
    user-select: none;
  }
}
.slider-menu:not(.el-menu--collapse) {
  width: 256px;
}
</style>
