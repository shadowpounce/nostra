import React from 'react'
import styles from './Location.module.scss'

import Map from './assets/map.svg'

const Location = () => {
  return (
    <section id="s-6" className={`section ${styles.location}`}>
      <div className={`container ${styles.container}`}>
        <div className="full-flex-row">
          <h3>We</h3>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.99951 3L21.9995 22M21.9995 22V9.04545M21.9995 22H9.04497"
              stroke="#C2C1C1"
              strokeWidth="4.90909"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={`line ${styles.line}`}></div>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <span className="label">Locations In:</span>
            <h4>London, Dubai, Malaga and Munich</h4>
          </div>
          <div className={styles.map}>
            <img src={Map} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
