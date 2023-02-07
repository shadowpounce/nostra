import React from 'react'
import { useEffect } from 'react'
import styles from './Cursor.module.scss'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.cursor}`)

    const tagNames = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'a',
      'button',
      'input',
    ]

    tagNames.forEach((tag) => {
      document
        .querySelectorAll(`${tag}`)
        .forEach((el) => (el.dataset.hovered = true))
    })

    document.addEventListener('mousemove', (e) => {
      const x = e.x
      const y = e.y
      const element = e.toElement

      tagNames.forEach((tag) => {
        if (element.dataset.hovered === 'true') {
          cursor.classList.add(`${styles.scale}`)
        } else {
          cursor.classList.remove(`${styles.scale}`)
        }
      })

      cursor.style.top = `${y - 25}px`
      cursor.style.left = `${x - 25}px`
    })
  }, [])

  return <div className={styles.cursor}></div>
}

export default Cursor
