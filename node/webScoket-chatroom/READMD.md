## 应用层
http webSocket

http: client ->>>> server

webSocket : client <--->server 双向
全双工双向通信

http2.0 支持 server-push
## 连接
1. 发送一个http请求
   后端 101 Switching Protocols
   Connection: Upgrade
之后 由 http 协议升级为 webSocket 后续的发送 接受信息都会走这个全双工双向通信