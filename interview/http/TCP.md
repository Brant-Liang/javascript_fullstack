osi 7层 参考模型 (解耦)      TCP/IP 
应用层                       应用层 http smtp ssh 协议 DNS解析 http请求
表示层                       传输层 tcp三次握手 四次挥手
会话层                       网络层 IP寻址
传输层                       数据链路层 封装成帧
网络层                       物理层 物理传输（然后传输的时候通过双绞线，电磁波等各种介质）
数据链路层
物理层

服务端先进入 listen 状态 客户端发送SYN = 1 seq = x 到服务器 进入SYN-SENT状态
服务端接受后 发送 ACK = 1 seq = y ack = x + 1 至服务器 进入 SYN-REVD状态
客户端接收函 发送 ACK = 1 seq = x ack = y + 1 至客户端 客户端和服务器都
 进入ESTABLISHED

 客户端自动关闭发送 FIN = 1 seq = u 进入FIN-wait1阶段
 服务器接受后发送ACK = 1 seq = v ack = u + 1 进入close-wait阶段 客户端收到后进入FIN-WAIT2阶段

 服务器发送 FIN = 1 seq = w ack = u + 1 进入Last-ACK
 客户端发送 ACK = 1 seq = u + 1 ack = w + 1 进入time-wait阶段 等待2msl后进入close状态
 服务器收到ACK报文后 进入close状态
 1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端
1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达

为什么是四次挥手而不是三次？
因为服务端在接收到FIN, 往往不会立即返回FIN, 必须等到服务端所有的报文都发送完毕了，才能发FIN。因此先发一个ACK表示已经收到客户端的FIN，延迟一段时间才发FIN。这就造成了四次挥手。

如果是三次挥手会有什么问题？

等于说服务端将ACK和FIN的发送合并为一次挥手，这个时候长时间的延迟可能会导致客户端误以为FIN没有到达客户端，从而让客户端不断的重发FIN。