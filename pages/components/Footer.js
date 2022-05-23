import styles from '../../styles/Footer.module.css'
import {
  FaBehance,
  FaMailBulk,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import en from '../../public/locales/en/en'
import pt from '../../public/locales/pt/pt'

const Footer = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <p>
          {t.footer1}
          <span>Ygor Moreira. </span> &copy; 2022
        </p>
        <div className={styles.icons}>
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
                value={{ size: '25px', color: 'var(--text-secondary)' }}
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
                value={{ size: '25px', color: 'var(--text-secondary)' }}
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
                value={{ size: '25px', color: 'var(--text-secondary)' }}
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
                value={{ size: '25px', color: 'var(--text-secondary)' }}
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
                value={{ size: '25px', color: 'var(--text-secondary)' }}
              >
                <FaBehance />
              </IconContext.Provider>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
