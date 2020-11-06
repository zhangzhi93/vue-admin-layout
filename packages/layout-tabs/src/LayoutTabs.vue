<template>
  <div class="layout-tabs" v-if="type==='scroll'||type==='flex'">
    <el-tabs :value="activeName" type="card" @tab-click="onClick" @tab-remove="removeTab"
      @contextmenu.prevent.native="onTabsContextmenu" v-if="type==='scroll'">
      <el-tab-pane v-for="item in tabsData" :key="item.name" :label="item.title" :name="item.name"
        :closable="!item.permanent" />
    </el-tabs>
    <div class="flex-tabs" v-else-if="type==='flex'">
      <ul>
        <li v-for="item in tabsData" :key="item.name"
          :class="{'active':activeName == item.name,'closable':!item.closable}"
          @click="onClick(item)" @contextmenu.prevent="(e)=>onContextmenu(e,item)">
          <span>{{item.title}}</span>
          <i class="el-icon-close close-btn" v-if="!item.permanent"
            @click.stop="removeTab(item)"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutTabs',
  props: {
    tabsData: {
      type: Array,
      default: () => []
    },
    activeName: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'scroll'
    }
  },
  methods: {
    onClick(data) {
      this.$emit('tab-click', data);
    },
    removeTab(data) {
      this.$emit('tab-remove', data);
    },
    onTabsContextmenu(e) {
      const data = this.tabsData.find(item => item.name === e.target.id.split('-')[1]);
      this.$emit('contextmenu', e, data);
    },
    onContextmenu(e, data) {
      this.$emit('contextmenu', e, data);
    }
  }
}
</script>

<style lang="less" scoped>
.layout-tabs {
  width: 100%;
  height: 31px;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  /deep/.el-tabs__nav {
    height: 100%;
    border-top: none;
  }
  /deep/.el-tabs__item {
    height: 31px;
    line-height: 31px;
  }
  /deep/.el-tabs__nav-prev {
    line-height: 31px;
    padding-left: 3px;
  }
  /deep/.el-tabs__nav-next {
    line-height: 31px;
    padding-right: 3px;
  }
  /deep/.el-tabs__item {
    font-size: 13px;
    font-weight: normal;
  }
  /deep/.el-tabs__item.is-closable .el-icon-close {
    top: -2px;
  }
  /deep/.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border-bottom: none;
  }
}
.flex-tabs {
  height: 30px;
  border-bottom: 1px solid #e4e7ed;
  ul {
    display: flex;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    li {
      width: 100px;
      list-style: none;
      flex: 0 1 100px;
      white-space: nowrap;
      border-bottom: 1px solid #e4e7ed;
      border-left: 1px solid #e4e7ed;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      height: 30px;
      line-height: 30px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      span {
        display: block;
        padding-left: 5px;
        overflow: hidden;
        font-size: 13px;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 22px;
          height: 30px;
          box-shadow: 0 0 6px 5px #fff;
          background-color: #fff;
        }
      }
      &:last-child {
        border-right: 1px solid #e4e7ed;
      }
      &:hover {
        span {
          color: #409eff;
        }
      }
      &.active {
        span {
          color: #409eff;
        }
        box-shadow: inset 2px 2px 8px #f0f0f0;
      }
      &.closable.active {
        .close-btn {
          opacity: 1;
        }
      }
      &.closable:hover {
        .close-btn {
          opacity: 1;
        }
      }
    }
    .close-btn {
      opacity: 0;
      font-size: 12px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 14px;
      height: 14px;
      position: absolute;
      right: 5px;
      top: 8.5px;
      cursor: pointer;
      border-radius: 50%;

      text-align: center;
      line-height: 14px;
      &:hover {
        background-color: #c0c4cc;
        color: #fff;
      }
    }
  }
}
</style>
