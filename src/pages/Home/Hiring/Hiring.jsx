import React from 'react'
import suggestionsData from './suggestionsData'
import styles from './Hiring.module.scss'

const Hirign = () => {
  return (
    <section className={`section ${styles.hiring}`}>
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.article}>
          <big>
            <span>nostra</span>
            <svg
              width="82"
              height="82"
              viewBox="0 0 82 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 81L81 1M81 1V55.5455M81 1L26.4545 1"
                stroke="#F6F6F6"
                strokeWidth="2"
              />
            </svg>
            <span>nostra</span>
          </big>
          <h2>
            Join the
            <span>Journey</span>
          </h2>
        </div>
        <div className={styles.suggestions}>
          <div className={styles.col}>
            {suggestionsData.map((item, idx) => (
              <div key={idx} className={styles.suggestion}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className={styles.applyButton}>Apply</button>
              </div>
            ))}
          </div>
          <div className={styles.col}>
            {suggestionsData.map((item, idx) => (
              <div key={idx} className={styles.suggestion}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className={styles.applyButton}>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hirign
