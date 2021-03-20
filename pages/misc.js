import Head from 'next/head'
import Header from '../components/header'
import RocketMisc from '../components/rocket'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Misc</title>
      </Head>
      <Header />
      <RocketMisc />
    </div>
  )
}
