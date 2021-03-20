import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import PostPage from '../components/postpage'

import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  var id = 1;
  return (
    <div className="container">
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <div>
          <PostPage id={id}/>
        </div>
      </main>
    </div>
  )
}
