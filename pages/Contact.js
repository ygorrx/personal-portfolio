import styles from '../styles/Contact.module.css'
import Button from './components/Button'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import en from '../public/locales/en/en'
import pt from '../public/locales/pt/pt'

const Contact = () => {
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
            <h1 className="title">{t.contacth1}</h1>
            <p>{t.contactp}</p>
          </div>
          <div className={styles.form}>
            <form
              action="https://formsubmit.co/ygoroliveira55@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/ThankPage"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="text"
                name="name"
                placeholder={t.input1}
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder={t.input2}
                className={styles.input}
              />
              <input
                type="text"
                name="subject"
                placeholder={t.input3}
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder={t.input4}
                className={styles.input}
                rows="15"
              ></textarea>
              <Button type="submit" className={styles.button}>
                {t.contact_button}
              </Button>
            </form>
          </div>
          <div className={styles.image_card}>
            <Image src="/assets/contact-image.png" layout="fill" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
