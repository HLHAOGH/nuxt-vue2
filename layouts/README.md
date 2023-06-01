### 布局目录
- layouts目录下的每一个.vue文件都将作为一个layout布局组件来使用；
- 使用时可以在具体的页面通过layout属性引用，值为页面文件名称。如下：
```javascript
  export default {
    layout: '文件名'
  }
```