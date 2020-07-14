网络会话跟踪技术

Cookie是有服务器生成，保存在客户端的一种信息载体，存储用户访问的会话状态信息

用户在第一次提交请求后，由服务端生成cookie,并将其封装到响应头中，以响应的形式发送给客户端。
客户端接受到这个响应后，将Cookie保存到客户端。当客户端再次发送同类请求后，在请求中会携带保存在客户端的Cookie数据，发送至服务端，由服务器对会话进行跟踪

属性： expires属性

domain属性
  domain属性可以使多个web服务器共享cookie。domain属性的默认值是创建cookie的网页所在服务器的主机名。不能将一个cookie的域设置成服务器所在的域之外的域。
  例如让位于a.sodao.com的服务器能够读取b.sodao.com设置的cookie值。如果b.sodao.com的页面创建的cookie把 它的path属性设置为"/"，把domain属性设置成".sodao.com"，那么所有位于b.sodao.com的网页和所有位于 a.sodao.com的网页，以及位于sodao.com域的其他服务器上的网页都可以访问这个cookie。

HttpOnly属性——用于避免cookie被Javascript访问；
  HttpOnly 属性限制了 cookie 对 HTTP 请求的作用范围。特别的，该属性指示用户代理忽略那些通过"非 HTTP" 方式对 cookie 的访问（比如浏览器暴露给js的接口）。注意 HttpOnly 属性和 Secure 属性相互独立：一个 cookie 既可以是 HttpOnly 的也可以有 Secure 属性。
