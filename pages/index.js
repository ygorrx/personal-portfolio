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

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
          <h2>
            <span>Hi, I am Ygor Moreira.</span> Welcome to my portfolio.
          </h2>
          <h1>Designer and Developer</h1>
          <p>Passionate about technology and it’s possibilities.</p>
        </div>
        <div className={styles.logos}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          > 
             <div className={`${styles.icon_bg} ${styles.icon_expand}`}>
            <IconContext.Provider
              value={{ size: '25px', color: 'var(--text-primary)' }}
            >
              <FaMailBulk />
            </IconContext.Provider>
            </div>
            
          </a>
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
        </div>
        <div className={styles.image_home}>
          <Image
            src="/assets/home-img.png"
            layout="responsive"
            width="663"
            height="887"
          />
        </div>
        <div className={styles.icon_scroll}></div>
      </div>
    </div>
  )
}

export default Home
