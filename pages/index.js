import Head from 'next/head'
import Link from 'next/link'
import List from '../components/recipe-list.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recept boken</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <List>Test test test </List>
      </main>

      <footer className={styles.footer}>
       Made by {' '}
       <Link href="https://gustavliden.se">Gustav</Link>
      </footer>
    </div>
  )
}
