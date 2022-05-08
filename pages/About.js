import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={`animeLeft ${styles.container}`}>
      <div className={styles.container_wrapper}>
        <div className={styles.container_center}>
          <h1 className="title">about me</h1>
          <p>Little facts about myself.</p>
        </div>
        <div className={styles.text_long}>
          <p>
            Hello. My name is <span>Ygor Moreira</span>, and I’m from Brasil. I
            have a Bachelor degree in Digital Systems and Media by the Federal
            University of Ceara. Always have been in love with technology and
            it's all possibilities. I've always had a fascination with the arts,
            and I've always wanted to know how things worked, how everything I
            saw on the internet, on TV and in publications was made. That's how
            I came to appreciate design. With the introduction of new
            technology, my interest in the web world grew with time. Currently,
            I'm seeking for a career transition. Despite the fact that I
            graduated with a degree in software development, I chose to continue
            my professional career as a Creative Designer, working in domains
            such as marketing, user interface and user experience. Now that I'm
            back in the development world, I see no better way to do it than to
            apply the skills I've gained in the field with which I'm most
            familiar, <span>Frontend Web Development</span>. {'\n'} I am a
            dedicated individual who is intrigued and eager to constantly
            provide my best effort to whatever task is assigned to me. If
            there's something I don't know, I'll figure out how to learn it.
          </p>
        </div>
        <div className={styles.image_card}>
          <Image src="/assets/foto-port.png" layout="fill" />
        </div>
        <div className={styles.text_title}>
          <h2>Tools and technologies that I use</h2>
        </div>
        <ul className={styles.techs}>
          <p>Creative Design</p>
          <li>Figma</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Indesign</li>
          <li>Adobe After Effects</li>
          <li>Sony Vegas</li>
        </ul>
        <ul className={styles.techs_1}>
          <p>Development</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>ReactJs</li>
          <li>NextJs</li>
        </ul>
        <ul className={styles.techs_2}>
          <li>NodeJs</li>
          <li>Git</li>
          <li>Github</li>
          <li>Styled Components</li>
          <li>Sass</li>
          <li>Lottie</li>
        </ul>
        <div className={styles.quote}>
          <h1>
            "The two most important days in your life are the day you are born
            and the day you find out why."
          </h1>
          <p>– Mark Twain</p>
        </div>
      </div>
    </div>
  )
}

export default About
