import Link from 'next/link';
import { withRouter } from 'next/router'
const A = ({ router }) => {
  return (
    <>
      <div>我是{router.query.name}</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}

export default withRouter(A);