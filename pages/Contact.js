import styles from '../styles/Contact.module.css'
import Button from './components/Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={`animeLeft ${styles.container}`}>
      <div className={styles.container_wrapper}>
        <div className={styles.container_center}>
          <h1 className="title">contact</h1>
          <p>
            If you want to say anything to me, feel free to contact me on the
            form below.
          </p>
        </div>
        <div className={styles.form}>
          <form
            action="https://formsubmit.co/ygoroliveira55@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder="Message"
              className={styles.input}
              rows="15"
            ></textarea>
            <Button type="submit" className={styles.button}>
              Send Message
            </Button>
          </form>
        </div>
        <div className={styles.image_card}>
          <Image src="/assets/contact-image.png" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default Contact
