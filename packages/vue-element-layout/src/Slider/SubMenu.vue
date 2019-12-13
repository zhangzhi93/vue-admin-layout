<template>
  <el-submenu :index="item.path">
    <template slot="title">
      <i :class="item.meta.icon" v-if="item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>

    <template v-for="child in item.children">
      <sub-menu v-if="child.children && child.children.length !== 0" :item="child" :key="child.name" />
      <menu-item v-else :key="child.name" :index="child.path" :item="child">
        <i class="el-icon-location"></i>
        {{child.meta.title}}
      </menu-item>
    </template>
  </el-submenu>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'SubMenu',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    MenuItem,
  },
  watch: {
    item (val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less">
</style>
