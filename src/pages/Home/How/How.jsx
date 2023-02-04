import React from 'react'
import styles from './How.module.scss'
import { useEffect } from 'react'
import ImgOne from './assets/1.png'
import ImgOneW from './assets/1.webp'

const How = () => {
  useEffect(() => {
    const names = document.querySelectorAll(`.${styles.title}`)
    names.forEach((name, idx) => {
      name.style.transitionDelay = `0.${idx}5s`
    })
  })

  return (
    <section id="s-4" className={`section ${styles.how}`}>
      <div className={`container ${styles.container}`}>
        <h3>How</h3>
        <div className={styles.wrap}>
          <div className={styles.row}>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>3d Objects Management</h4>
            </div>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>3d Sound</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Full Integrated Individual Avatar System</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Gravity Motion</h4>
            </div>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Public & Private Rooms</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Import Media Files</h4>
            </div>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Multiple Room</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Configutations</h4>
            </div>
            <div className={`name ${styles.title}`}>
              <picture>
                <source srcSet={ImgOneW} type="image/webp" />
                <img src={ImgOne} alt="" />
              </picture>
              <h4>Up to 24 Users Per Room</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
