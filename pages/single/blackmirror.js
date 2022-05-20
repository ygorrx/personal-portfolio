import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from '../../styles/SingleProject.module.css'
import Link from 'next/link'
import Button from '../components/Button'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
}

const blackmirror = () => {
  return (
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
            <source src="/assets/header-bm.mp4" type="video/mp4" />
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
            <h1>Black Mirror</h1>
            <h2>Web Interface for the TV series Black Mirror.</h2>
          </motion.div>
          <motion.div className={styles.back} variants={backVariants}>
            <Link href="/Projects">← Back to projects</Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.description}>
        <h1>about the project: Black Mirror</h1>
        <p>
        This concept brings the atmosphere of Black Mirror into its own website. The prototype seeks to provide users with more information about the series, including character profiles and cast information for each episode, as well as the ability to watch it.
        </p>
        <h2>Features</h2>
        <p>
          ✔️ Characters Description | ✔️ Episodes Selection | ✔️ Media Player
          
        </p>
        <h2>Techs Used</h2>
        <p>
          Adobe XD | Adobe Photoshop | Adobe After Effects
        </p>
        <div className={styles.buttons}>
        <a
                href="https://www.behance.net/gallery/76592959/Black-Mirror-Website-Concept"
                target="_blank"
                rel="noopener noreferrer"
              ><Button>See the full project!</Button></a>
        </div>
        <h2>Some screenshots:</h2>
      </div>
      <div className={styles.img_container}>
        <div className={styles.image_card}>
          <Image src="/assets/screenshots-bm/homebm.png" layout="fill" />
        </div>
        <div className={styles.image_card}>
          <Image src="/assets/screenshots-bm/about.png" layout="fill" />
        </div>
        <div className={styles.image_card}>
          <Image src="/assets/screenshots-bm/episodes.png" layout="fill" />
        </div>
        <div className={styles.image_card}>
          <Image src="/assets/screenshots-bm/episode-1.png" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default blackmirror
