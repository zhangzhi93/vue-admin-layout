## 使用
> 建议使用vue-cli@3.0以上版本创建一个项目，使用前请确保已安装vue和element-ui
```bash
npm i vue-element-layout --save
// or
yarn add vue-element-layout
```
```js
import { VueElementLayout } from 'vue-element-layout';

Vue.use(VueElementLayout);
```
```html
 <vue-element-layout :menu-data="data"></vue-element-layout>
```
## API

|          参数          |                说明               |               类型             | 默认值 |
| :--------------------: | :------------------------------: | :----------------------------: | :----: |
|         menu-data      |        左侧菜单数据，树状结构      |            Array               |   []   |
|          layout        |             layout布局           |            'sidemenu'          |    -   |
|           logo         |              左上角图标           |            String              |   -    |
|          title         |              左上角标题           |            String              |   -    |
|        isCollapse      |          左侧菜单是否可折叠        |            Boolean             |  true  |
|         collapse       |           设置菜单收起展开         |            Boolean             |  false |
|      defaultActive     |            选中的菜单key          |            String              |   -    |
|      defaultOpeneds    |          默认打开的菜单key         |           String               |   -    |
|       uniqueOpened     |          菜单手风琴模式            |           Boolean              |   true |
|        showFooter      |             是否展示页脚           |           Boolean              |   true |
|    onMenuHeaderClick   |      menu 菜单的头部点击事件       |            event                |   -    |
|       menuHeader       |           自定义slider logo       |            slot                 |   -    |
|       asideExtra       |       在slider菜单底部追加dom      |            slot                 |   -    |
|         header         |           自定义Header            |            slot                 |   -    |
|     collapsedButton    |           自定义折叠按钮           |            slot                 |   -    |
|      rightContent      |           自定义头部右侧dom        |            slot                 |   -    |
|        navTabs         |            自定义导航tabs          |            slot                 |   -    |
|         footer         |             自定义页脚             |            slot                |    -    |

## 说明

>使用element-ui NavMenu 的api : 

+ unique-opened
+ default-active
+ default-active
+ default-openeds

>menu-data 数据格式 ：

```json
[{
  index: 'level1',
  title: '一级菜单',
  icon: 'el-icon-eleme',
  children: [{
    index: 'level2-0',
    title: '二级菜单',
    icon: 'el-icon-eleme',
    children: [{
      index: 'level3',
      title: '三级菜单',
      icon: 'el-icon-eleme',
    }]
  },{
    index: 'level2-1',
    title: '二级菜单',
    icon: 'el-icon-eleme',
  }],
},{
  index: 'level1-1',
  title: '一级菜单',
  icon: 'el-icon-eleme',
}]
```
