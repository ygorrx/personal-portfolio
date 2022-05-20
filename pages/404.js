import Image from "next/image"
import Link from "next/link"
import { Layout } from "react-feather"
import styles from '../styles/404.module.css'
import Head from "next/head"

const fourOhFour = () => {
  return (
    <>
    <Head>
        <title>Ygor Moreira | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
        <h2>Sometimes websites get broken. Life goes on.</h2>
        <Link href="/">← Go back to home</Link>
        <div className={styles.image_card}><Image src={'/assets/404-statue.png'} layout='fill'/></div>
    </div>
    </>
  )
}

export default fourOhFour