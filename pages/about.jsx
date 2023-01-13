import MasterLayout from "../components/master.layout"
import Head from 'next/head'


export default function about() {
  return (
    <MasterLayout>
      <Head>
        <title> About | Home  </title>
        <meta  charSet="utf-8" />
      </Head>
      <p className="text"> About Page </p>
    </MasterLayout>

  )
}
