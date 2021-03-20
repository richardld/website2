import Head from 'next/head'
import Header from '../components/header'
import RocketMisc from '../components/rocket'
import ContactForm from '../components/contactform'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <ContactForm />
    </div>
  )
}
