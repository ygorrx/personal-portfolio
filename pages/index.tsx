import Image from 'next/image'
import styles from '../styles/Home.module.css'
import homeImage from '../assets/home-img.png'

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
            <Image
              src="/assets/black-icons/mail-black.svg"
              width="25"
              height="25"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/black-icons/github-black.svg"
              width="25"
              height="25"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/black-icons/linkedin-black.svg"
              width="25"
              height="25"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/black-icons/insta-black.svg"
              width="25"
              height="25"
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/black-icons/behance-black.svg"
              width="25"
              height="25"
            />
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

        <Image
          className={styles.image_bg_1}
          src="/assets/molecules.svg"
          width="511"
          height="690"
        />
        <Image
          className={styles.image_bg_2}
          src="/assets/molecules.svg"
          width="511"
          height="690"
        />
      </div>
    </div>
  )
}

export default Home
