import Link from 'next/link'

export default function Nav() {
  return (
    <nav className=''>
      <Link href='/'> Home </Link>
      <Link href='/products'> Products </Link>
      <Link href='/product/1'> First Product </Link>
    </nav>
  )
}
