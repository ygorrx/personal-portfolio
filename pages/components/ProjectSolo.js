import React from 'react'
import { content } from '../components/content'
import styles from '../../styles/ProjectSolo.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

const projectList = [
  {
    id: 1,
    title: 'myPetz',
    short: 'Mypetz',
    description: 'A social media for your petz.',
    date: '12 February, 2022',
    image: 'https://i.imgur.com/oFdUdwd.png',
    techs: 'Web Development'
  },
  {
    id: 2,
    title: 'Harry Potter - Wizard World',
    short: 'harrypotter',
    description: 'Website for the Wizard World.',
    date: '12 February, 2022',
    image: 'https://i.imgur.com/GByhQ3t.png',
    techs: 'Web Development | UI | UX'
  }
]

const ProjectSolo = () => {
  return (
    <div className={`animeLeft ${styles.container}`}>
      <motion.div className={styles.container_wrapper}>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{
            y: 20,
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1
            }
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          className={styles.container_center}
        >
          <h1 className="title">recent projects</h1>
          <p>my latest experiments.</p>
        </motion.div>
        <div className={styles.cards}>
          {projectList.map((post, key) => {
            return (
              <div className={styles.card} key={key}>
                <Link
                  href={`/single/${post.short}`}
                  as={`/projects/${post.short}`}
                  passHref
                >
                  <motion.div
                    key={key}
                    className={styles.image_card}
                    initial={{ y: '50%', opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeIn' }}
                    whileHover={{ scale: 1.1 }}
                    exit={{
                      scale: 0.5,
                      opacity: 0,
                      transition: { duration: 1 }
                    }}
                  >
                    <Image src={post.image} layout="fill" />
                  </motion.div>
                </Link>
                <div className={styles.card_container}>
                  <div className={styles.card_body}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p>
                      <span>{post.techs}</span>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectSolo
