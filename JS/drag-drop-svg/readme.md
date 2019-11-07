## 
- 浏览器收到 HTML 解析为 DOM 
- 遇到 css 解析为 cssom
- 把cssom dom 合在一起 生成一棵渲染树
- 根据 样式 计算位置 开始渲染 布局

domContentloaded 就是当 html 解析完 之后发生

有一些标签 img link script 会引入外部资源 会在解析完 HTML之后开始请求资源