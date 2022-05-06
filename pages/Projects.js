import styles from '../styles/Projects.module.css'
import Button from './components/Button'
import Image from 'next/image'

const projectList = [
  {
    id: 1,
    title: 'myPetz',
    description: 'A social media for your petz.',
    date: '12 February, 2022',
    image:
      'https://www.mypetbrasil.com/blog/wp-content/uploads/2020/02/Aumente-as-vendas-no-seu-Pet-Shop.jpg',
    techs: 'HTML, CSS, Javascript, React, Lottie, NPM'
  },
  {
    id: 2,
    title: 'Harry Potter - Wizard World',
    description: 'A social media for your petz.',
    date: '12 February, 2022',
    image:
      'https://www.mypetbrasil.com/blog/wp-content/uploads/2020/02/Aumente-as-vendas-no-seu-Pet-Shop.jpg',
    techs: 'HTML, CSS, Javascript, React, Lottie, NPM'
  },
  {
    id: 3,
    title: 'Netflix clone',
    description: 'A social media for your petz.',
    date: '12 February, 2022',
    image:
      'https://www.mypetbrasil.com/blog/wp-content/uploads/2020/02/Aumente-as-vendas-no-seu-Pet-Shop.jpg',
    techs: 'HTML, CSS, Javascript'
  },
  {
    id: 4,
    title: 'Netflix clone',
    description: 'A social media for your petz.',
    date: '12 February, 2022',
    image:
      'https://www.mypetbrasil.com/blog/wp-content/uploads/2020/02/Aumente-as-vendas-no-seu-Pet-Shop.jpg',
    techs: 'HTML, CSS, Javascript'
  }
]

const Projects = () => {
  return (
    <div className={`animeLeft ${styles.container}`}>
      <div className={styles.container_wrapper}>
        <div className={styles.container_center}>
          <h1 className="title">Projects</h1>
          <p>A collection of my recent works.</p>
        </div>
        <div className={styles.cards}>
          {projectList.map((post, key) => {
            return (
              <div className={styles.card} key={key}>
                <div className={styles.image_card}>
                  <Image src={post.image} layout="fill" />
                </div>
                <div className={styles.card_body}>
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                  <p>
                    <span>Techs: </span>
                    {post.techs}
                  </p>
                </div>
                <div className={styles.buttons}>
                  <Button>See it Live!</Button>
                  <Button>Github Repo</Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects