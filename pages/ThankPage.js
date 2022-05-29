import styles from '../styles/ThankPage.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import useTranslate from './helper/useTranslate'

const ThankPage = () => {
  const translate = useTranslate()
  return (
    <>
      <Head>
        <title>Ygor Moreira | {translate.headContact}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`animeLeft ${styles.container}`}>
        <div className={styles.container_wrapper}>
          <div className={styles.container_center}>
            <h1 className="title">{translate.thank1}</h1>
            <p>{translate.thank2}</p>
            <Link href="/">
              <span>{translate.thank3}</span>
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
