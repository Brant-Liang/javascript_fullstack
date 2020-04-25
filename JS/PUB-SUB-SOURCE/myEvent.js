class myEvents {
  constructor () {
    this.listeners = {};
  }
  on(key, fn) {
    if(!this.listeners[key]){
      this.listeners[key] = []
    }
    this.listeners[key].push(fn)
  }
  emit(key) {
    if(this.listeners[key]) {
      for(let i = 0; i < this.listeners[key].length; i++) {
        this.listeners[key][i]();
      }
    }
  }
}

const ev = new myEvents()
ev.on('梁聪',() => { console.log('你好');}) 
ev.on('无名',() => { console.log('你好呀');}) 
console.log(ev);

ev.emit('梁聪');
ev.emit('无名');
