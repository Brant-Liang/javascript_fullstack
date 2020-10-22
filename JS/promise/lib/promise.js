/* 自定义promise */
(function (window) {
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  /* 
    Promise构造函数 
    excutor: 执行器函数
  */
  function Promise(excutor) {
    const self = this;
    self.status = PENDING; //给promise指定status属性，初始值为pending;
    self.data = undefined; // 给promise对象指定一个用于存储结果数据都属性
    self.callbacks = []; // 每个元素的结构： {onResolved() {}, onRejected() {}}
    function resolve(value) {
      if (self.status !== PENDING) {
        return;
      }
      // 将状态改为resolved
      self.status = RESOLVED;
      // 将value数据保存
      self.data = value;
      // 如果有待执行的callback函数，立即同步执行回调函数onResolved
      if (self.callbacks.length > 0) {
        // 放入队列中执行所有成功的回调
        setTimeout(() => {
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value);
          });
        }, 0)
      }
    }
    function reject(reason) {
      if (self.status !== PENDING) {
        return;
      }
      // 将状态改为rejected
      self.status = REJECTED;
      // 将reason数据保存
      self.data = reason;
      // 如果有待执行的callback函数，立即同步执行回调函数onRejected
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(value);
          });
        }, 0);
      }
    }
    // 立即同步执行excutor
    try {
      excutor(resolve, reject);
    } catch (error) { // 如果执行器抛出异常，promise对象变为rejected状态
      reject(error)
    }
  }
  // promise原型对象的方法
  Promise.prototype.then = function (onResolved, onRejected) {
    // 作用：指定成功和失败的回调函数，返回一个新的promise对象
    const self = this;
    return new Promise((resolve, reject) => {
      /* 
        调用指定的回调函数处理
      */
      function handle(callback) {
        try {
          const result = callback(self.data);
          if (result instanceof Promise) {
            // 3、如果回调函数返回的是promise,return的promise的就结果就是这个promise的结果
            // result.then(
            //   value => resolve(value), //当result成功时，return当promise也会成功
            //   reason => reject(reason) //当result失败时，return当promise也会失败
            // )
            result.then(resolve, reject)
          } else {
            // 2、如果回调函数返回的不是promise, return的promise会成功，value就是返回值
            resolve(result);
          }
        } catch (error) {
          // 1、如果抛出异常，return的promise就会失败，error就是reason
          reject(error);
        }
      }
      if (self.status === PENDING) {
        self.callbacks.push({
          // 加入当前状态还是padding状态，将回调函数保存起来
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          }
        })
      } else if (self.status === RESOLVED) { //如果当前为resolved
        setTimeout(() => {
          handle(onResolved)
        }, 0)
      } else {
        setTimeout(() => {
          handle(onRejected)
        }, 0)
      }
    })
  }
  // 作用：指定失败的回调函数，返回一个新的promise对象
  Promise.prototype.catch = function (onRejected) {

  }
  // promise函数对象resolve
  // 返回指定结果的一个成功的promise
  Promise.resolve = function (value) {

  }
  // 返回指定reason的一个失败的promise
  Promise.reject = function (reason) {

  }
  /* Promise对象的all方法 
    返回一个promise，当所有promise都成功时才成功，否则失败
  */
  Promise.all = function (promises) {

  }
  // 返回一个Promise, 其结果由第一个完成由promise决定
  Promise.race = function () {

  }
  //向外暴露Promise函数
  window.Promise = Promise
})(window)