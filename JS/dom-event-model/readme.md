## 事件模型
-  捕获
-  冒泡
-  三个阶段： 捕获阶段 目标阶段 冒泡阶段
addEventListener 
第三个参数 默认为 false 冒泡阶段 true 捕获阶段

e.preventDefault() 阻止默认事件

## 请用DOM2 级别的事件
- DOM0 onClick  不能绑定多个事件，绑定多个时属性会发生覆盖
- DOM2 addEventLister
- DOM3 addEventLister 增加了很多 键盘鼠标事件 