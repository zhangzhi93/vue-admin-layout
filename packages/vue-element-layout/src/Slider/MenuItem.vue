<template>
  <el-menu-item :index="item.path">
    <i :class="item.meta.icon" v-if="item.meta.icon"></i>
    <span>{{item.meta.title}}</span>
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
  },
};
</script>

<style lang="less">
</style>
