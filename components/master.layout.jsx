import Nav from "./nav"
import Footer from './footer'
import Head from 'next/head'


export default function MasterLayout({ children }) {
  return (
    <div className="master-layout">
      <Head>
        <title> Website </title>
        <meta charSet="utf-8" />
      </Head>
      <Nav />
      <main  >
        {children}
      </main>
      <Footer />
    </div>
  )
}
