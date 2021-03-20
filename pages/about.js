import Head from 'next/head'
import Header from '../components/header'
import AboutContent from '../components/aboutcontent'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <AboutContent />
    </div>
  )
}
