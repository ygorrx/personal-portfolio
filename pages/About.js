import styles from '../styles/About.module.css'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Button from './components/Button'
import Head from 'next/head'
import useTranslate from './helper/useTranslate'

const About = () => {
  const translate = useTranslate()
  const router = useRouter()
  const { locale } = router

  const { ref: myProject, inView: myProjectVisible } = useInView()
  const { ref: myProject2, inView: myProjectVisible2 } = useInView()

  return (
    <>
      <Head>
        <title>Ygor Moreira | {translate.headAbout}</title>
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
            <h1 className="title">{translate.about1}</h1>
            <p>{translate.about2}</p>
          </motion.div>
          <motion.div
            className={styles.text_long}
            initial={{ y: '50%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <p>
              {translate.about_description1} <span>Ygor Moreira</span>
              {translate.about_description2} {translate.about_description4}
            </p>
          </motion.div>
          <div className={styles.image_card}>
            <Image src="/assets/foto-about1.png" layout="fill" />
          </div>
          <div
            ref={myProject}
            className={`${styles.text_title} ${
              myProjectVisible ? 'textTitleAnimate' : ''
            }`}
          >
            <h2>{translate.about_techs}</h2>
          </div>
          <ul className={styles.techs}>
            <p>{translate.about_techs_p}</p>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Indesign</li>
            <li>Adobe After Effects</li>
            <li>Sony Vegas</li>
          </ul>
          <ul className={styles.techs_1}>
            <p>{translate.about_techs_p_2}</p>
            <li>Angular</li>
            <li>React.JS</li>
            <li>Next.JS</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>Spring Boot</li>
          </ul>
          <ul className={styles.techs_2}>
            <li>SASS/LESS</li>
            <li>Git</li>
            <li>Gitlab CI/CD</li>
            <li>Styled Components</li>
            <li>SCRUM</li>
            <li>JIRA</li>
          </ul>
          <div className={styles.quote}>
            <h1>{translate.about_quote}</h1>
            <p>– Mark Twain</p>
          </div>
          <div
            ref={myProject2}
            className={`${styles.text_title_2} ${
              myProjectVisible2 ? 'textTitleAnimate' : ''
            }`}
          >
            <h2>{translate.about_resume}</h2>
            {locale === 'en' ? (
              <a
                href="https://drive.google.com/file/d/1bRhbxt6HJ5MaMzEoo5uuN-QfJq6nYKH2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{translate.about_button}</Button>
              </a>
            ) : (
              <a
                href="https://drive.google.com/file/d/1TQcmhqjISTDEorngvY54AEhC18cpLhbV/view?usp=sharingile/d/1gFZn9TknK_OEtUhLlseTG1kLUm5s77EA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{translate.about_button}</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
