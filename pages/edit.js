import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Editor from '../components/editor'

export default function Edit() {
  return (
    <div className="container">
      <Head>
        <title>Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Editor/>
      </main>
    </div>
  )
}
