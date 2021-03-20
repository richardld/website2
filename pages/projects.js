import Head from 'next/head'
import Header from '../components/header'
import ProjectsContent from '../components/projectspage'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <ProjectsContent />
    </div>
  )
}
