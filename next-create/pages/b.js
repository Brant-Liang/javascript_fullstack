import Link from 'next/link';

export default () => (
  <>
    <div>page B</div>
    <Link href="/">
     <a>
       <span>返回首页</span>
       <span>ICON</span>
     </a>
    </Link>
  </>
)