import styles from '../styles/Contact.module.css'
import Button from './components/Button'
import Image from 'next/image'
import Head from 'next/head'
import useTranslate from './helper/useTranslate'
import { useRouter } from 'next/router'

const Contact = () => {
  const translate = useTranslate()
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <Head>
        <title>Ygor Moreira | {translate.headContact}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`animeLeft ${styles.container}`}>
        <div className={styles.container_wrapper}>
          <div className={styles.container_center}>
            <h1 className="title">{translate.contacth1}</h1>
            <p>{translate.contactp}</p>
          </div>
          <div className={styles.form}>
            <form
              action="https://formsubmit.co/ygoroliveira55@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value={
                  locale === 'en'
                    ? 'https://ygormoreira-portfolio.vercel.app/ThankPage'
                    : 'https://ygormoreira-portfolio.vercel.app/pt/ThankPage'
                }
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="text"
                name="name"
                placeholder={translate.input1}
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder={translate.input2}
                className={styles.input}
              />
              <input
                type="text"
                name="subject"
                placeholder={translate.input3}
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder={translate.input4}
                className={styles.input}
                rows="15"
              ></textarea>
              <Button type="submit" className={styles.button}>
                {translate.contact_button}
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
