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
import useTranslate from '../helper/useTranslate'

const Footer = () => {
  const translate = useTranslate()

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <p>
          {translate.footer1}
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
              href="mailto:ygoroliveira55@gmail.com"
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
              href="https://github.com/ygorrx"
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
              href="https://www.linkedin.com/in/ygor-moreira-226672214/"
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
              href="https://www.instagram.com/ygorrx/"
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
              href="https://www.behance.net/ygorom"
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
