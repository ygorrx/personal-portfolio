import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from '../../styles/SingleProject.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import Head from 'next/head'
import useTranslate from '../helper/useTranslate'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
}

const HarryPotter = () => {
  const translate = useTranslate()

  return (
    <>
      <Head>
        <title>Ygor Moreira | Projects | Harry Potter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.single}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ y: '50%', opacity: 0, transition: 0.5 }}
            animate={{
              y: '0%',
              opacity: 1
            }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            exit={{ y: '50%', opacity: 0, transition: { duration: 0.5 } }}
          >
            <video autoPlay muted className={styles.video_card}>
              <source src="/assets/header-hp.mp4" type="video/mp4" />
            </video>
            {/* <Image src="/assets/images/petz.jpg" layout="fill" /> */}
            <motion.div
              className={styles.text}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: 2
              }}
            >
              <h1>Harry Potter</h1>
              <h2>{translate.hph2}</h2>
            </motion.div>
            <motion.div className={styles.back} variants={backVariants}>
              <Link href="/Projects">{translate.backtoprojects}</Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className={styles.description}>
          <h1>{translate.hph1}</h1>
          <p>{translate.hpp}</p>
          <h2>{translate.features}</h2>
          <p>{translate.hpfeats}</p>
          <h2>{translate.techsused}</h2>
          <p>
            ReactJs | CSS Modules | Axios | Custom Hooks | Lottie | NPM | Heroku
            | Netlify | Express
          </p>
          <div className={styles.buttons}>
            <a
              href="harrypotterwom.netlify.app/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{translate.btnSingle}</Button>
            </a>
            <a
              href="https://github.com/ygorrx/hpteste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Github Repo</Button>
            </a>
          </div>
          <h2>{translate.screenS}</h2>
        </div>
        <div className={styles.img_container}>
          <div className={styles.image_card}>
            <Image
              src="/assets/screenshots-hp/home.png"
              layout="fill"
              className={styles.image}
            />
          </div>
          <div className={styles.image_card}>
            <Image
              src="/assets/screenshots-hp/history.png"
              layout="fill"
              className={styles.image}
            />
          </div>
          <div className={styles.image_card}>
            <Image
              src="/assets/screenshots-hp/chars.png"
              layout="fill"
              className={styles.image}
            />
          </div>
          <div className={styles.image_card}>
            <Image
              src="/assets/screenshots-hp/movies.png"
              layout="fill"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HarryPotter
