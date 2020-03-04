<template>
  <div class="layout-tabs">
    <el-tabs v-model="activeName" type="card" @tab-remove="removeTab" @tab-click="onClick"
      v-if="type==='scroll'">
      <el-tab-pane v-for="item in tabsData" :key="item.name" :label="item.title" :name="item.name"
        :closable="!item.closable" />
    </el-tabs>
    <div class="flex-tabs">
      <ul>
        <li v-for="item in tabsData" :key="item.name"
          :class="{'active':activeName == item.name,'closable':!item.closable}"
          @click="onClick(item)" @contextmenu.prevent="onContextmenu">
          <span>{{item.title}}</span>
          <i class="el-icon-close close-btn" v-if="!item.permanent"
            @click.stop="removeTab(item.name)"></i>
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
    type: {
      type: String,
      default: 'scroll'
    }
  },
  data() {
    return {
      activeName: ''
    }
  },
  methods: {
    onClick(data) {
      if (this.type === 'flex') this.activeName = data.name;
      this.$emit('tab-click', data.name);
    },
    removeTab(name) {
      this.$emit('tab-remove', name);
    },
    onContextmenu(e) {
      console.log(e);
    }
  }
}
</script>

<style lang="less" scoped>
.layout-tabs {
  width: 100%;
  height: 35px;
  z-index: 2;
  overflow: hidden;
  /deep/.el-tabs__nav {
    height: 100%;
    border-top: none;
  }
  /deep/.el-tabs__item {
    height: 35px;
    line-height: 35px;
  }
  /deep/.el-tabs__nav-prev {
    line-height: 35px;
    padding-left: 3px;
  }
  /deep/.el-tabs__nav-next {
    line-height: 35px;
    padding-right: 3px;
  }
}
.flex-tabs {
  height: 34px;
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
      height: 34px;
      line-height: 34px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      &:last-child {
        border-right: 1px solid #e4e7ed;
      }
      &.active {
        span {
          color: #409eff;
        }
        box-shadow: inset 2px 2px 8px #f0f0f0;
      }
      &.closable.active {
        .close-btn {
          display: block;
        }
      }
      &.closable:hover {
        .close-btn {
          display: block;
        }
      }
      &:hover {
        span {
          color: #409eff;
        }
      }
      span {
        display: block;
        padding-left: 5px;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 22px;
          height: 34px;
          box-shadow: 0 0 6px 5px #fff;
          background-color: #fff;
        }
      }
    }
    .close-btn {
      display: none;
      font-size: 12px;
      width: 14px;
      height: 14px;
      position: absolute;
      right: 5px;
      top: 10.5px;
      cursor: pointer;
      border-radius: 50%;
      transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
