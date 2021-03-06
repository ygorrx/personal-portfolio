import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import { motion, useViewportScroll } from 'framer-motion'
import { IconContext } from 'react-icons'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useRouter } from 'next/router'
import useTranslate from '../helper/useTranslate'
import useMedia from '../helper/useMedia'

const Navbar = ({ theme, setTheme }) => {
  const mobile = useMedia('(max-width: 768px)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  React.useEffect(() => {
    setMobileMenu(false)
  }, [locale])

  const { scrollY } = useViewportScroll()
  const router = useRouter()
  const { locale } = router
  const translate = useTranslate()

  const [hidden, setHidden] = React.useState(false)

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 30 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

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
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <>
      <nav className={styles.navbar}>
        <motion.nav
          className={styles.nav_2}
          variants={variants}
          animate={hidden ? 'hidden' : 'visible'}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
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
          {mobile && (
            <button
              aria-label="Menu"
              className={`${styles.mobileButton} ${
                mobileMenu && styles.mobileButtonActive
              }`}
              onClick={() => setMobileMenu(!mobileMenu)}
            ></button>
          )}
          <div
            className={`${mobile ? styles.navMobile : styles.nav} ${
              mobileMenu && styles.navMobileActive
            }`}
          >
            <ul
              className={`${mobile ? styles.navMobile : styles.link_items} ${
                mobileMenu && styles.navMobileActive
              }`}
            >
              <li>
                <Link href="/Projects">
                  <a
                    onClick={() => setMobileMenu(false)}
                    className={`${
                      router.pathname == '/Projects' ? 'active' : ''
                    } ${mobileMenu && styles.mobileButtonActive}`}
                  >
                    {translate.nav1}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <a
                    onClick={() => setMobileMenu(false)}
                    className={`${
                      router.pathname == '/About' ? 'active' : ''
                    } ${mobileMenu && styles.mobileButtonActive}`}
                  >
                    {translate.nav2}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <a
                    onClick={() => setMobileMenu(false)}
                    className={`${
                      router.pathname == '/Contact' ? 'active' : ''
                    } ${mobileMenu && styles.mobileButtonActive}`}
                  >
                    {translate.nav3}
                  </a>
                </Link>
              </li>
              <div className={styles.navOnMobile}>
                <button className={styles.button} onClick={switchTheme}>
                  {theme === 'light' ? (
                    <IconContext.Provider
                      value={{ size: '25px', color: 'black' }}
                    >
                      <FaMoon />
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider
                      value={{ size: '25px', color: 'white' }}
                    >
                      <FaSun />
                    </IconContext.Provider>
                  )}
                </button>
                <select
                  onChange={changeLanguage}
                  defaultValue={locale}
                  className={styles.selector}
                >
                  <option value="en">EN</option>
                  <option value="pt">PT</option>
                </select>
              </div>
            </ul>
          </div>
        </motion.nav>
      </nav>
    </>
  )
}

export default Navbar
