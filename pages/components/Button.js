import React from 'react'
import styles from '../../styles/Button.module.css'
import { useRouter } from 'next/router'

const Button = ({ children, ...props }) => {
  return (
    <button onClick={() => router.push("/page")} {...props} className={`${styles.button} ${styles.btn}`}>
      <span>
        <a>{children}</a>
      </span>
    </button>
  )
}

export default Button
