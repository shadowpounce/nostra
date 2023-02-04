import React from 'react'
import { useEffect } from 'react'
import styles from './Cursor.module.scss'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.cursor}`)

    document.addEventListener('mousemove', (e) => {
      const x = e.x
      const y = e.y
      const element = e.toElement

      if (element.tagName === 'H1') {
        cursor.classList.add(`${styles.scale}`)
      } else {
        cursor.classList.remove(`${styles.scale}`)
      }

      cursor.style.top = `${y - 25}px`
      cursor.style.left = `${x - 25}px`
    })
  }, [])

  return <div className={styles.cursor}></div>
}

export default Cursor
