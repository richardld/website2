import styles from './header.module.css'

import Link from 'next/link'

export default function Header({}) {
  return (
    <div className={styles.overall}>
      <div className={styles.header}>
        <div className={styles.['header-horizontal']}>
          <Link href='/about'><p className={styles.['header-content']}>about</p></Link>
          <Link href='/projects'><p className={styles.['header-content']}>projects</p></Link>
          <Link href='/'><p className={styles.['header-title']}>richard liu</p></Link>
          <Link href='/misc'><p className={styles.['header-content']}>misc</p></Link>
          <Link href='/contact'><p className={styles.['header-content']}>contact</p></Link>
        </div>
      </div>
    </div>);
}
