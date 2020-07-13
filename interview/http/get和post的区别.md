get 一般使用url或者cookie传参 
post 将数据放在请求体中

get 提交的数据有长度限制， 而post可以提交的数据非常大

get 幂等性 请求多少次资源都不会变, post 会产生副作用,对资源进行更改 

get 产生一个tcp数据包 post产生两个tcp数据包
发送header和body    post先发送header，服务器返回100(continue) 浏览器再返回data 服务器响应200ok
