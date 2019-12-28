<template>
  <div class="header">
    <el-header height="64px">
      <div class="trigger" @click="toggle" v-if="isCollapse">
        <slot name="collapsedButton">
          <i class="fold" v-if="!trigger">
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="menu-fold"
              width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path
                d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z">
              </path>
            </svg>
          </i>
          <i class="unfold" v-else>
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="menu-unfold"
              width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path
                d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z">
              </path>
            </svg>
          </i>
        </slot>
      </div>
      <div class="right-content">
        <slot name="rightContent"></slot>
      </div>
    </el-header>
    <slot name="navTabs"></slot>
  </div>

</template>
<script>

export default {
  name: 'Header',
  props: ['isCollapse', 'collapse'],
  data() {
    return {
      trigger: false,
    };
  },
  watch: {
    collapse: {
      handler(val) {
        this.trigger = val;
      },
      immediate: true
    },
  },
  methods: {
    toggle() {
      this.trigger = !this.trigger;
      this.$emit('trigger', this.trigger);
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  padding: 0;
  z-index: 1;
  /deep/.el-header {
    overflow: hidden;
    position: relative;
    z-index: 2;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
  .nav-tabs{
    height: 34px;
    overflow: hidden;
  }
  .trigger {
    display: inline-block;
    box-sizing: border-box;
    height: 64px;
    padding: 19px 24px;
    font-size: 20px;
    cursor: pointer;
  }
  .fold,
  .unfold {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
}
.right-content {
  float: right;
  margin-right: 10px;
}
</style>
