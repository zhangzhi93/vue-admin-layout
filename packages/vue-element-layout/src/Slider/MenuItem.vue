<template>
  <el-menu-item :index="item.name" :route="{path:`/${parentPath}`}">
    <i :class="item.icon" v-if="item.icon"></i>
    <span>{{item.title}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    parentPath: {
      type: String,
    }
  },
};
</script>

<style lang="less">
</style>
