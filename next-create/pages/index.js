import Link from 'next/link'
import Router from 'next/router'
const Home = () => {

  //routeChangeStart

  //routeChangeComplete

  //beforeHistoryChange 路由加载将要完成之前

  //routeChangeError

  //hashChangeStart
  
  //hashChangeComplete
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart -> 路由开始变化，参数为', ...args);
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange -> 路由变化结束，参数为', ...args);
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete -> 路由变化结束，参数为', ...args);
  })

  function gotoA() {
    Router.push({
      pathname: '/a',
      query: {
        name: "梁聪"
      }
    })
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href={{pathname: "/a",query: {name: '梁聪'}}}>
          <a>选择梁聪</a>
        </Link>
        <br />
        <Link href={{pathname: "/a",query: {name: '无名'}}}>
          <a>选择无名</a>
        </Link>
        <div>
          <button onClick={gotoA}>去A界面</button>
        </div>
      </div>
    </>
  )
}

export default Home;