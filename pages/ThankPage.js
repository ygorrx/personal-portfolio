import styles from '../styles/ThankPage.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '../public/locales/en/en'
import pt from '../public/locales/pt/pt'

const ThankPage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt
  return (
    <>
      <Head>
        <title>Ygor Moreira | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`animeLeft ${styles.container}`}>
        <div className={styles.container_wrapper}>
          <div className={styles.container_center}>
            <h1 className="title">{t.thank1}</h1>
            <p>{t.thank2}</p>
            <Link href="/">
              <span>{t.thank3}</span>
            </Link>
          </div>
          <div className={styles.image_card}>
            <Image src="/assets/contact-image.png" layout="fill" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankPage
