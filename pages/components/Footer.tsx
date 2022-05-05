import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <p>
          Designed and developed with love by <span>Ygor Moreira. </span> &copy;
          2022
        </p>
        <div className={styles.icons}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/white-icons/mail-white.svg"
              width="34"
              height="34"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/white-icons/github-white.svg"
              width="34"
              height="34"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/white-icons/linkedin-white.svg"
              width="34"
              height="34"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/white-icons/insta-white.svg"
              width="34"
              height="34"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/white-icons/behance-white.svg"
              width="34"
              height="34"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
