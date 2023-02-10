import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Header/Header'

import styles from './Welcome.module.scss'

const Welcome = ({ menuActive, setMenuActive, siteLoaded }) => {
  return (
    <section
      className={`section ${siteLoaded ? 'loaded' : ''} s-1 ${styles.welcome}`}
      id="s-1"
    >
      <Header setMenuActive={setMenuActive} menuActive={menuActive} />
      <div className={styles.block}>
        <span className="label">metaverse for businesses</span>
        <h1>Meta what?</h1>
        <h1>
          Let's discuss
          <Link to="/about">
            <svg
              className="arrow"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L39 39M39 39V14.4545M39 39H14.4545"
                stroke="#F6F6F6"
                strokeWidth="4.90909"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </h1>
      </div>
      <div className={`scroll-label ${styles.scrollLabel}`}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.445312"
            y="0.445312"
            width="14.5469"
            height="18.1094"
            rx="5.24218"
            stroke="white"
            strokeWidth="0.890624"
          />
          <path
            id="scrollPath"
            d="M7.71875 3.5625V10.0937"
            stroke="white"
            strokeWidth="0.890624"
          />
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Welcome
