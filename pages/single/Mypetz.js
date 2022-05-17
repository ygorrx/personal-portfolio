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

const Mypetz = () => {
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
            <source src="/assets/Petz.mp4" type="video/mp4"/>       
          </video>
          {/* <Image src="/assets/images/petz.jpg" layout="fill" /> */}
          <motion.div className={styles.text}
          initial={{ opacity: 0}}
          animate={{
            opacity: 1, transition: 2 
          }}
        >
            <h1>myPetz</h1>
            <h2>A social network for your pets.</h2>
          </motion.div>
          <motion.div className={styles.back} variants={backVariants}>
            <Link href="/Projects">← Back to projects</Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.description}>
          <h1>about the project: myPetz</h1>
          <p>Origamid's React course project completion inspired the creation of myPetz. The task was to construct an app that uses the course's API to allow you to utilize the site as a social network where you can publish, comment on, and browse images of your pets and other’s. The API allows the data to last 10 minutes on the server, so that’s the max. amount of time your photo is going to be on your profile.</p>
          <h2>Features</h2>
          <p>✔️ User Creation/Login/Password Loss | ✔️ Posting photos/comments | ✔️ View statistics of your photos</p>
          <h2>Techs Used</h2>
          <p>ReactJs | CSS Modules | Fetch API | Custom Hooks | Lottie | Victory | NPM </p>
          <div className={styles.buttons}>
                    <Button>See it Live!</Button>
                    <Button>Github Repo</Button>
          </div>
          <h2>Some screenshots:</h2>
        </div>
        <div className={styles.img_container}>
        <div className={styles.image_card}>
            <Image src="/assets/screenshots-mypetz/home.png" layout="fill" />                
        </div>
        <div className={styles.image_card}>
            <Image src="/assets/screenshots-mypetz/login.png" layout="fill" />                
        </div>
        <div className={styles.image_card}>
            <Image src="/assets/screenshots-mypetz/post.png" layout="fill" />                
        </div>
        <div className={styles.image_card}>
            <Image src="/assets/screenshots-mypetz/fotos.png" layout="fill" />                
        </div>
        </div>
    </div>
  )
}

export default Mypetz
