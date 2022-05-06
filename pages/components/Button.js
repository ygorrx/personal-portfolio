import styles from '../../styles/Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${styles.btn}`}>
      <span>
        <a>{children}</a>
      </span>
    </button>
  )
}

export default Button
