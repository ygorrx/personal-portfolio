import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from '../../styles/SingleProject.module.css'
import Link from 'next/link'

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
      <AnimatePresence>
        <motion.div
          key="image"
          className={styles.image_card}
          initial={{ y: '50%', opacity: 0, transition: 0.5 }}
          animate={{
            y: '0%',
            opacity: 1
          }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          exit={{ y: '50%', opacity: 0, transition: { duration: 0.5 } }}
        >
          <Image src="/assets/images/petz.jpg" layout="fill" />

          <motion.div className={styles.back} variants={backVariants}>
            <Link href="/Projects">← Back</Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Mypetz
