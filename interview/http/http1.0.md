http 1.0 和 1.1 的区别
缓存策略 1.0 expires Last-Modified 2.0 cache-control etags
长连接 在一个TCP连接上可传送多个HTTP请求和响应 connenction: keep alive
错误通知管理： 新增24个错误状态码 409 请求的资源与当前状态发生冲突
                               410 表示服务器上的某个资源被永久性删除
host头处理 虚拟机和主机共享IP,不同的域名可以对应一个ip地址