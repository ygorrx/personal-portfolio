import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import en from '../public/locales/en/en'
import pt from '../public/locales/pt/pt'

const FourOhFour = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  return (
    <>
      <Head>
        <title>Ygor Moreira | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <h2>{t.h2404}</h2>
        <Link href="/">{t.link404}</Link>
        <div className={styles.image_card}>
          <Image src={'/assets/404-statue.png'} layout="fill" />
        </div>
      </div>
    </>
  )
}

export default FourOhFour
