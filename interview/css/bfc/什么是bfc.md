根元素或包含根元素的元素
浮动元素 float ＝ left | right 或 inherit（≠ none）
绝对定位元素 position ＝ absolute 或 fixed
display ＝ inline-block | table-cell 或 table-caption
overflow ＝ hidden | auto 或 scroll (≠ visible)


BFC 是一个独立的容器，容器内子元素不会影响容器外的元素。反之亦如此。
盒子从顶端开始垂直地一个接一个地排列，盒子之间垂直的间距是由 margin 决定的。
在同一个 BFC 中，两个相邻的块级盒子的垂直外边距会发生重叠。
BFC 区域不会和 float box 发生重叠。
BFC 能够识别并包含浮动元素，当计算其区域的高度时，浮动元素也可以参与计算了。