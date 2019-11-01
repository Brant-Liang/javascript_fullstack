const subPub = {
  'price': [],
  'papaer': []
}
for (let i = 0; i < subPub.price.length; i++) {
  console.log('---', subPub.price[i]);
  subPub.price[i]();
}
//price 对应的方法执行一遍
function foo() {
  console.log('foo');
}
subPub.foo = [foo];
console.log(subPub);

// foo： [foo]
//在 subPub 上面添加一个 value 为数组的 key(foo)
// 把 foo 放到数组里去
class Events {
  constructor() {
    this.listener = {};
  }
  on(key, fn) {
    if (!this.listener[key]) {
      this.listener[key] = [];
    }
    this.listener[key].push(fn);

    //this.listener.push(fn);
  }
  emit(key) {
    //console.log(this.listener);
    for (let i = 0; i < this.listener[key].length; i++) {
      console.log('---', this.listener[key][i]);
      this.listener[key][i]();
    }
  }
}
const ev = new Events();
ev.on('abc', () => { console.log(1); })
ev.on('abc', () => { console.log(2); })
ev.emit('abc'); //执行的