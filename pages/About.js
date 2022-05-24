import styles from '../styles/About.module.css'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Button from './components/Button'
import Head from 'next/head'
import { useRouter } from 'next/router'
import en from '../public/locales/en/en'
import pt from '../public/locales/pt/pt'

const About = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  const { ref: myProject, inView: myProjectVisible } = useInView()
  const { ref: myProject2, inView: myProjectVisible2 } = useInView()

  return (
    <>
      <Head>
        <title>Ygor Moreira | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`animeLeft ${styles.container}`}>
        <div className={styles.container_wrapper}>
          <motion.div
            className={styles.container_center}
            initial={{ y: '50%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <h1 className="title">{t.about1}</h1>
            <p>{t.about2}</p>
          </motion.div>
          <motion.div
            className={styles.text_long}
            initial={{ y: '50%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <p>
              {t.about_description1} <span>Ygor Moreira</span>
              {t.about_description2} <span>{t.about_description3}</span>. <br />{' '}
              {t.about_description4}
            </p>
          </motion.div>
          <div className={styles.image_card}>
            <Image src="/assets/foto-port.png" layout="fill" />
          </div>
          <div
            ref={myProject}
            className={`${styles.text_title} ${
              myProjectVisible ? 'textTitleAnimate' : ''
            }`}
          >
            <h2>{t.about_techs}</h2>
          </div>
          <ul className={styles.techs}>
            <p>{t.about_techs_p}</p>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Indesign</li>
            <li>Adobe After Effects</li>
            <li>Sony Vegas</li>
          </ul>
          <ul className={styles.techs_1}>
            <p>{t.about_techs_p_2}</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>ReactJs</li>
            <li>NextJs</li>
          </ul>
          <ul className={styles.techs_2}>
            <li>NodeJs</li>
            <li>Git</li>
            <li>Github</li>
            <li>Styled Components</li>
            <li>Sass</li>
            <li>Lottie</li>
          </ul>
          <div className={styles.quote}>
            <h1>{t.about_quote}</h1>
            <p>– Mark Twain</p>
          </div>
          <div
            ref={myProject2}
            className={`${styles.text_title_2} ${
              myProjectVisible2 ? 'textTitleAnimate' : ''
            }`}
          >
            <h2>{t.about_resume}</h2>
            <a
              href="https://drive.google.com/file/d/1gFZn9TknK_OEtUhLlseTG1kLUm5s77EA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{t.about_button}</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
