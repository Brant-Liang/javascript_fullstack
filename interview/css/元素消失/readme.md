display: none; visibility: hidden的区别 opacity: 0

display: none; 让元素在渲染树上消失；渲染时不占空间
visibily: hidden; 不会让元素在渲染树上消失；渲染时占空间
opacity: 0; 不会让元素在渲染树上消失；渲染时占空间

display: none; 不是继承属性， 子节点由于父元素在渲染树上消失也会随之消失；
visibily: hidden; 可继承属性，子节点可以设置visiable： visible;来显示出来
opacity: 0; 不是继承属性， 子节点由于父元素也会变透明；

display: none; 会导致回流； visibily: hidden; opacity 会只会导致重绘