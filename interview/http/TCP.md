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