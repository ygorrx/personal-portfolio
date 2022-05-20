import Image from "next/image"
import Link from "next/link"
import { Layout } from "react-feather"
import styles from '../styles/404.module.css'

const fourOhFour = () => {
  return (
    <div className={styles.container}>
        <h2>Sometimes websites get broken. Life goes on.</h2>
        <Link href="/">← Go back to home</Link>
        <div className={styles.image_card}><Image src={'/assets/404-statue.png'} layout='fill'/></div>
    </div>
  )
}

export default fourOhFour