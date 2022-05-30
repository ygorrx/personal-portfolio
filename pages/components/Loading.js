import styles from '../../styles/Loading.module.css'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/assets/logo-animate.gif"
          width="150"
          height="150"
          alt="logo"
        ></Image>
      </div>
    </div>
  )
}

export default Loading
