import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Scroll.module.css'

const Scroll = ({ theme }) => {
  return (
    <div className={styles.container}>
      {theme === 'light' ? (
        <div className={styles.image_scroll}>
          <Image
            src="/assets/scroll-mouse-icon.gif"
            layout="responsive"
            width="50"
            height="50"
          />
        </div>
      ) : (
        <div className={styles.image_scroll}>
          <Image
            src="/assets/scroll-mouse-icon-light.gif"
            layout="responsive"
            width="50"
            height="50"
          />
        </div>
      )}
    </div>
  )
}

export default Scroll
