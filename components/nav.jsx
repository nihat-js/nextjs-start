import Link from 'next/link'
import style from './nav.module.css'

export default function Nav() {
  return (
    <nav className=''>
      <Link href='/'> Home </Link>
      <Link href='/products'> Products </Link>
      <Link href='/product/1'> First Product </Link>
    </nav>
  )
}
