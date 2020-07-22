修改state之后，  希望React根据最新的State来重新渲染页面，但是React并没有实现类似于Vue2中的Object.defineProperty或Vue3中的Proxy的方式或者Vue3.0中Proxy的方式来监听数据变化

而setState就是为了告诉React数据已经发生了变化

setState设计为异步，可以显著提升性能
如果每次调用setState都会进行一次更新，那么意味着render函数会被频繁调用，界面会重新渲染

获取多个更新 并进行批量更新

如果是同步的话 更新state但没有执行render函数 那么state和props不同步

this.state = {
  message: '你好啊',
  name: 'Brant'
}

this.setState({
  message: 'Hello world'
})

Object.assign({}, this.state, {message: 'Hello world'})