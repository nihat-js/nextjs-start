import MasterLayout from "../components/master.layout"
import Head from 'next/head'
export default function index() {
  return (
    <MasterLayout>
      <Head>
        <title> Start | Home  </title>
      </Head>
      <p className="text"> Index</p>
    </MasterLayout>

  )
}
