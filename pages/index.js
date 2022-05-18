import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  FaBehance,
  FaMailBulk,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
import ProjectSolo from './components/ProjectSolo'

const Home = () => {
  return (
    <>
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
                <span>Hi, I am Ygor Moreira.</span> Welcome to my portfolio.
              </h2>
              <h1>Designer and Developer</h1>
              <p>Passionate about technology and it’s possibilities.</p>
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
              />
            </motion.div>
          </div>
          <div className={styles.icon_scroll}></div>
        </div>
      </div>
      <ProjectSolo />
    </>
  )
}

export default Home
