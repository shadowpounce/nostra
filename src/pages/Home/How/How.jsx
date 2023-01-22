import React from 'react'
import styles from './How.module.scss'

import ImgOne from './assets/1.png'

const How = () => {
  return (
    <section id="s-4" className={`section ${styles.how}`}>
      <div className={`container ${styles.container}`}>
        <h3>How</h3>
        <div className={styles.wrap}>
          <div className={styles.row}>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>3d Objects Management</h4>
            </div>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>3d Sound</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Full Integrated Individual Avatar System</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Gravity Motion</h4>
            </div>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Public & Private Rooms</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Import Media Files</h4>
            </div>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Multiple Room</h4>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Configutations</h4>
            </div>
            <div className={styles.title}>
              <img src={ImgOne} alt="" />
              <h4>Up to 24 Users Per Room</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
