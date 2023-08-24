import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  FaBehance,
  FaMailBulk,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFileDownload
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
import ProjectSolo from './components/ProjectSolo'
import Head from 'next/head'
import useTranslate from './helper/useTranslate'
import { useInView } from 'react-intersection-observer'
import Button from './components/Button'
import { useRouter } from 'next/router'

const Home = () => {
  const translate = useTranslate()
  const router = useRouter()
  const { locale } = router
  const { ref: myProject2, inView: myProjectVisible2 } = useInView()

  return (
    <>
      <Head>
        <title>Ygor Moreira | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.text}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4
                  }
                }
              }}
            >
              <h2>
                <span>{translate.homeH1}</span> {translate.homeH1_2}
              </h2>
              <h1>{translate.homeH1_3}</h1>
              <p>{translate.homep1}</p>
            </motion.div>
          </div>

          <div className={styles.logos}>
            <motion.div
              whileHover={{
                scale: 1.3
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="mailto:ygoroliveira55@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ size: '25px', color: 'var(--text-primary)' }}
                >
                  <FaMailBulk />
                </IconContext.Provider>
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.3
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://github.com/ygorrx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ size: '25px', color: 'var(--text-primary)' }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.3
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://www.linkedin.com/in/ygor-moreira-226672214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ size: '25px', color: 'var(--text-primary)' }}
                >
                  <FaLinkedinIn />
                </IconContext.Provider>
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.3
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://www.instagram.com/ygorrx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ size: '25px', color: 'var(--text-primary)' }}
                >
                  <FaInstagram />
                </IconContext.Provider>
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.3
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://www.behance.net/ygorom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ size: '25px', color: 'var(--text-primary)' }}
                >
                  <FaBehance />
                </IconContext.Provider>
              </a>
            </motion.div>
          </div>
          <div className={styles.image_home}>
            <motion.div
              animate={{
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)'
                ]
              }}
              transition={{
                duration: 5,
                loop: Infinity,
                ease: 'linear'
              }}
            >
              <Image
                src="/assets/home-img.png"
                layout="responsive"
                width="663"
                height="887"
                priority
              />
            </motion.div>
          </div>
          <div className={styles.icon_scroll}></div>
        </div>
      </div>
      <div>
        <ProjectSolo />
      </div>
      <div
        ref={myProject2}
        className={`${styles.text_title_2} ${
          myProjectVisible2 ? 'textTitleAnimate' : ''
        }`}
      >
        <IconContext.Provider
          value={{ size: '25px', color: 'var(--text-primary)' }}
        >
          <FaFileDownload />
        </IconContext.Provider>
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
    </>
  )
}

export default Home
