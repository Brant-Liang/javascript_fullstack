
cookie 最开始是服务端用于记录用户状态的一种方式，由服务器设置，在客户端存储，然后每次发起同源请求时，发送给服务器端。cookie最多能存储4k的数据，它的生存时间由expires属性指定，cookie只能被同源的页面访问

SessionStorage 借鉴了服务器端session的概念，代表的是回话中所保存的数据。一般能存储5M或更大的数据，它在当前窗口关闭后就失效了，并且SessionStorage只能被同一个窗口的同源页面所访问共享

LocalStorage
SessionStorage， LocalStorage， Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。
# 区别 

  在于前两者属于 HTML5 WebStorage，创建它们的目的便于客户端存储数据。而 cookie 是网站为了标示用户身份而储存在用户 本地终端上的数据（通常经过加密）。cookie 数据始终在同源（协议、主机、端口相同）的 http 请求中携带（即使不需要），会 在浏览器和服务器间来回传递。

 # 存储大小： 	
          cookie 数据大小不能超过4 k
          sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。 
 # 有期时间：
          localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。 	
          sessionStorage 数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会 保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。	
          cookie 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。 
# 作用域： 
          sessionStorage 只在同源的同窗口（或标签页）中共享数据，也就是只在当前会话中共享。 localStorage 在所有同源窗口中都是共享的。 cookie 在所有同源窗口中都是共享的。

# session 
