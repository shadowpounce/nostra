import React from 'react'
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
        </h1>
      </div>
      <div className={styles.startNow}>
        <span className="label">start now</span>
        <h6>2.1M users</h6>
      </div>
      <button className={styles.buttonStart}>
        <svg
          className={styles.outline}
          width="151"
          height="151"
          viewBox="0 0 151 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="75.5"
            cy="75.5"
            r="74.5"
            stroke="url(#paint0_linear_2_26)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_26"
              x1="44.5"
              y1="145.5"
              x2="116"
              y2="-14.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <span>start now</span>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.18388 13.0537L14.8164 2.94657M14.8164 2.94657L6.72334 1.74473M14.8164 2.94657L13.6146 11.0396"
              stroke="#C2C1C1"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </button>
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
