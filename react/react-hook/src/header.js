import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <Link to="/">
        <span>useState </span>
      </Link>
      <Link to="/useEffect">
        <span>useEffect </span>
      </Link>
      <Link to="/useRef">
        <span>useRef </span>
      </Link>
    </div>
  )
}
