<template>
  <div id="app">
    <vue-element-layout :menu-data="data" @onMenuHeaderClick="goHome">
      <router-view />
    </vue-element-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      total: 0,
      data: [{
        path: 'dashboard',
        redirect: '/dashboard/status/one',
        name: 'dashboard',
        meta: {
          title: '状态概览',
          nav: ['状态概览'],
          icon: 'el-icon-eleme',
          roles: [],
        },
        children: [{
          path: 'status',
          name: 'status',
          meta: {
            title: '状态概览',
            nav: ['状态概览', '状态概览'],
            icon: 'el-icon-user',
            roles: [],
          },
          children: [{
            path: 'one',
            name: 'one',
            meta: {
              title: '状态概览',
              nav: ['状态概览', '状态概览'],
              icon: 'el-icon-menu',
              roles: [],
            },
          }, {
            path: 'two',
            name: 'two',
            meta: {
              title: '更新日志',
              nav: ['更新日志', '更新日志'],
              icon: 'el-icon-menu',
              roles: [],
            },
          }],
        }, {
          path: 'update',
          name: 'update',
          meta: {
            title: '更新日志',
            nav: ['更新日志', '更新日志'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }],
      }, {
        path: 'wechat',
        redirect: '/wechat/menu',
        name: 'wechat',
        meta: {
          title: '微信配置',
          nav: ['微信配置'],
          icon: 'el-icon-ice-cream',
          roles: [],
        },
        children: [{
          path: 'menu',
          name: 'menu',
          meta: {
            title: '菜单管理',
            nav: ['微信配置', '菜单管理'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }, {
          path: 'reply',
          name: 'reply',
          meta: {
            title: '关键词回复',
            nav: ['微信配置', '关键词回复'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }],
      }, {
        path: 'plugin',
        redirect: '/plugin/venn',
        name: 'plugin',
        meta: {
          title: '插件测试',
          nav: ['插件测试'],
          icon: 'el-icon-sugar',
          roles: [],
        },
        children: [{
          path: 'venn',
          name: 'venn',
          meta: {
            title: '韦恩图',
            nav: ['插件测试', '韦恩图'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }, {
          path: 'tree-select',
          name: 'tree-select',
          meta: {
            title: '树选择',
            nav: ['插件测试', '树选择'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }, {
          path: 'calendar',
          name: 'calendar',
          meta: {
            title: '日历',
            nav: ['插件测试', '日历'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }],
      }, {
        path: 'function',
        redirect: '/function/diy-tree-select',
        name: 'function',
        meta: {
          title: '自定义功能',
          nav: ['自定义功能'],
          icon: 'el-icon-star-off',
          roles: [],
        },
        children: [{
          path: 'diy-tree-select',
          name: 'diy-tree-select',
          meta: {
            title: '自定义树选择',
            nav: ['自定义功能', '自定义树选择'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }, {
          path: 'moveable',
          name: 'moveable',
          meta: {
            title: '拖动布局',
            nav: ['自定义功能', '拖动布局'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }, {
          path: 'fullscreen',
          name: 'fullscreen',
          meta: {
            title: '自定义全屏',
            nav: ['自定义功能', '自定义全屏'],
            icon: 'el-icon-menu',
            roles: [],
          },
        }],
      }],
    };
  },
  methods: {
    goHome () {
      window.open('https://www.baidu.com');
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  min-width: 1198px;
}
</style>
