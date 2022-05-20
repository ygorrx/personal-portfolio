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

const netflix = () => {
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
            <source src="/assets/header-netflix.mp4" type="video/mp4" />
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
            <h1>Netflix</h1>
            <h2>A simple clone of Netflix's website.</h2>
          </motion.div>
          <motion.div className={styles.back} variants={backVariants}>
            <Link href="/Projects">← Back to projects</Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.description}>
        <h1>about the project: Netflix</h1>
        <p>
          This is a solution to the challenge proposed in DIO's Inter Bootcamp
          to recreate Netflix's initial interface. The interface is not 100%
          faithful to the original, we were free to adapt as we wanted.
        </p>
        <h2>Features</h2>
        <p>✔️ Carousel | ✔️ Responsiveness</p>
        <h2>Techs Used</h2>
        <p>HTML | CSS | Vanilla Javascript | Jquery</p>
        <div className={styles.buttons}>
        <a
                href="https://netflix-alike.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              ><Button>See it Live!</Button></a>
          <a
                href="https://github.com/ygorrx/clone-netflix"
                target="_blank"
                rel="noopener noreferrer"
              ><Button>Github Repo</Button></a>
        </div>
        <h2>Some screenshots:</h2>
      </div>
      <div className={styles.img_container}>
        <div className={styles.image_card}>
          <Image src="/assets/screenshots-net/home2.png" layout="fill" />
        </div>
        <div className={styles.containerImg}>
          <div className={styles.image_card2}>
            <Image src="/assets/screenshots-net/tablet.png" layout="fill" />
          </div>
          <div className={styles.image_card2}>
            <Image src="/assets/screenshots-net/mobile.png" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default netflix
