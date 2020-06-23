<template>
  <el-aside width="auto" class="layout-slider">
    <slot name="menuHeader">
      <div class="logo" @click="onMenuHeaderClick">
        <img :src="logo" :alt="title">
        <transition name="collapse">
          <h1 v-if="!collapse">{{title}}</h1>
        </transition>
      </div>
    </slot>
    <div class="slider-menu">
      <el-menu :collapse="collapse" :unique-opened="uniqueOpened" :default-active="defaultActive"
        :default-openeds="defaultOpeneds" router>
        <template v-for="menu in data">
          <sub-menu v-if="menu.children&&menu.children.length!==0" :key="menu.name" :item="menu"
            :parent-path="menu.name" />
          <menu-item v-else :key="menu.name" :item="menu" :parent-path="menu.name" />
        </template>
      </el-menu>
    </div>
    <slot name="asideExtra"></slot>
  </el-aside>
</template>

<script>
import SubMenu from './SubMenu.vue';
import MenuItem from './MenuItem.vue';

export default {
  name: 'Slider',
  props: ['data', 'layout', 'logo', 'title', 'collapse', 'defaultActive', 'defaultOpeneds', 'uniqueOpened'],
  data() {
    return {};
  },
  components: {
    SubMenu,
    MenuItem,
  },
  methods: {
    onMenuHeaderClick() {
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
  position: relative;
  .logo {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 64px;
    text-align: center;
    line-height: 64px;
    background-color: #367eff;
    border-bottom-right-radius: 3px;
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
    }
  }
  .el-menu-item,
  .el-submenu__title {
    height: 45px;
    line-height: 45px;
    user-select: none;
  }
}
.slider-menu {
  max-height: calc(~"100vh - 64px");
  overflow-y: auto;
  .el-menu:not(.el-menu--collapse) {
    width: 256px;
  }
  .el-menu {
    padding: 10px 0;
    border-right: none;
  }
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all cubic-bezier(0.55, 0, 0.1, 1) 0.15s;
}
.collapse-enter,
.collapse-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
