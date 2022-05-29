import styles from '../styles/Projects.module.css'
import Button from './components/Button'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { contentEnglish } from './components/contentEnglish'
import { contentPT } from './components/contentPT'
import Head from 'next/head'
import { useRouter } from 'next/router'
import en from '../public/locales/en/en'
import pt from '../public/locales/pt/pt'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const Projects = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  return (
    <>
      <Head>
        <title>Ygor Moreira | {t.headProject}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`animeLeft ${styles.container}`}>
        <motion.div
          key="container"
          className={styles.container_wrapper}
          exit={{
            scale: 0.5,
            opacity: 0,
            transition: { ...transition, duration: 1 }
          }}
        >
          <div className={styles.container_center}>
            <h1 className="title">{t.project1}</h1>
            <p>{t.project2}</p>
          </div>
          <AnimatePresence exitBeforeEnter>
            {locale === 'en' ? (
              <div className={styles.cards}>
                {contentEnglish.map((post, key) => {
                  return (
                    <div className={styles.card} key={key}>
                      <Link
                        href={`/single/${post.short}`}
                        as={`/projects/${post.short}`}
                        passHref
                      >
                        <motion.div
                          key={key}
                          className={styles.image_card}
                          initial={{ y: '50%', opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, ease: 'easeIn' }}
                          whileHover={{ scale: 1.1 }}
                          exit={{
                            scale: 0.5,
                            opacity: 0,
                            transition: { duration: 1 }
                          }}
                        >
                          <Image src={post.image} layout="fill" />
                        </motion.div>
                      </Link>
                      <div className={styles.card_container}>
                        <div className={styles.card_body}>
                          <h1>{post.title}</h1>
                          <p>{post.description}</p>
                          <p>
                            <span>{post.techs}</span>
                          </p>
                        </div>
                        <div className={styles.buttons}>
                          <Link
                            href={`/single/${post.short}`}
                            as={`/projects/${post.short}`}
                            passHref
                          >
                            <Button>{t.project_button}</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className={styles.cards}>
                {contentPT.map((post, key) => {
                  return (
                    <div className={styles.card} key={key}>
                      <Link
                        href={`/single/${post.short}`}
                        as={`/projects/${post.short}`}
                        passHref
                      >
                        <motion.div
                          key={key}
                          className={styles.image_card}
                          initial={{ y: '50%', opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, ease: 'easeIn' }}
                          whileHover={{ scale: 1.1 }}
                          exit={{
                            scale: 0.5,
                            opacity: 0,
                            transition: { duration: 1 }
                          }}
                        >
                          <Image src={post.image} layout="fill" />
                        </motion.div>
                      </Link>
                      <div className={styles.card_container}>
                        <div className={styles.card_body}>
                          <h1>{post.title}</h1>
                          <p>{post.description}</p>
                          <p>
                            <span>{post.techs}</span>
                          </p>
                        </div>
                        <div className={styles.buttons}>
                          <Link
                            href={`/single/${post.short}`}
                            as={`/projects/${post.short}`}
                            passHref
                          >
                            <Button>{t.project_button}</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Projects
