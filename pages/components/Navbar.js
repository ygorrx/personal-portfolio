import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import { motion, useViewportScroll } from 'framer-motion'
import { IconContext } from 'react-icons'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useRouter } from 'next/router'
import en from '../../public/locales/en/en'
import pt from '../../public/locales/pt/pt'

const Navbar = ({ theme, setTheme }) => {
  const { scrollY } = useViewportScroll()
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  const [hidden, setHidden] = React.useState(false)

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 30 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update())
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 }
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const changeLanguage = (e) => {
    const locale = e.target.value
    const path = locale + router.pathname
    router.replace(path, path, { locale })
  }

  return (
    <nav className={styles.navbar}>
      <motion.nav
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <div className={styles.nav}>
          {theme === 'light' ? (
            <Link href="/">
              <div className={styles.link_home}>
                <Image
                  src="/assets/ym-logo.svg"
                  width="103"
                  height="103"
                  alt="logo"
                ></Image>
              </div>
            </Link>
          ) : (
            <Link href="/">
              <div className={styles.link_home}>
                <Image
                  src="/assets/ym-logo-white.svg"
                  width="103"
                  height="103"
                  alt="logo"
                ></Image>
              </div>
            </Link>
          )}
          <ul className={styles.link_items}>
            <li>
              <Link href="/Projects">
                <a className={router.pathname == '/Projects' ? 'active' : ''}>
                  {t.nav1}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <a className={router.pathname == '/About' ? 'active' : ''}>
                  {t.nav2}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <a className={router.pathname == '/Contact' ? 'active' : ''}>
                  {t.nav3}
                </a>
              </Link>
            </li>
            <button className={styles.button} onClick={switchTheme}>
              {theme === 'light' ? (
                <IconContext.Provider value={{ size: '25px', color: 'black' }}>
                  <FaMoon />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ size: '25px', color: 'white' }}>
                  <FaSun />
                </IconContext.Provider>
              )}
            </button>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className={styles.selector}
            >
              <option value="en">
                <Image
                  src="/assets/usflag.svg"
                  width="15"
                  height="15"
                  alt="usflag"
                ></Image>
                EN
              </option>
              <option value="pt">
                <Image
                  src="/assets/brflag.svg"
                  width="15"
                  height="15"
                  alt="brflag"
                ></Image>
                PT
              </option>
            </select>
          </ul>
        </div>
      </motion.nav>
    </nav>
  )
}

export default Navbar
