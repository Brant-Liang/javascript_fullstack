redux
# store是唯一的
# 只有store可以更改state reducers只是返回复制过后的数据，store将newState进行更新
# reducer只能是纯函数（给定固定的输入，就一定会有固定的输出，而且不会有任何副作用）