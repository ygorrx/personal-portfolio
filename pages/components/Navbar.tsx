import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <div>
          <Image
            src="/assets/ym-logo.png"
            width="103"
            height="103"
            alt="logo"
          ></Image>
        </div>
        <ul className={styles.link_items}>
          <li>
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <div className={styles.light_mode_button}>
            <Image
              src="/assets/dark-mode-button.svg"
              width="50"
              height="50"
              alt="button"
            />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
