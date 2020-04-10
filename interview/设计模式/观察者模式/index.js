// 1、消息的发布者

//2、可以让别人订阅你的消息

//3、可以发布消息

var lk = {
  //1.1 用户群体
  targetActions: [],
  //1.2 添加用户
  addUser: function (target, action) {
    var obj = {
      target: target,
      action: action
    }
    this.targetActions.push(obj)
  },
  publishMsg: function() {
    for (let i = 0,len = this.targetActions.length; i < len; i++) {
      var obj = this.targetActions[i]
      var target = obj.target
      var action = obj.action
      action.call(target, '明天周末了')
    }
  }
}

function response (str) {
  console.log('已推送', this.name, '消息为', str);
}

var stul1 = { name: '张三'}
var stul2 = { name: '李四'}
lk.addUser(stul1,response)
lk.addUser(stul2,response)

//开始广播
lk.publishMsg()

