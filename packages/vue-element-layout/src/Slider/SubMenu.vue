<template>
  <el-submenu :index="item.name">
    <template slot="title">
      <i :class="item.icon" v-if="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </template>

    <template v-for="child in item.children">
      <sub-menu v-if="child.children && child.children.length !== 0" :key="child.name" :item="child"
        :parent-path="path(child.name)" />
      <menu-item v-else :key="child.name" :item="child" :parent-path="path(child.name)" />
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
    parentPath: {
      type: String,
    }
  },
  components: {
    MenuItem,
  },
  methods: {
    path(name) {
      return `${this.parentPath}/${name}`;
    }
  }
};
</script>
