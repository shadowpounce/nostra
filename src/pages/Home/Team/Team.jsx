import React, { useEffect } from 'react'
import styles from './Team.module.scss'
import teamData from './teamData'
import indexingDelay from '../../../utils/indexingDelay'

const Team = () => {
  useEffect(() => {
    const names = document.querySelectorAll(`.${styles.teamItem}`)
    indexingDelay(names, 'transition')
  })

  return (
    <section id="s-8" className={`section ${styles.team}`}>
      <svg
        className={`svg ${styles.svg}`}
        width="831"
        height="1028"
        viewBox="0 0 831 1028"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.15" filter="url(#filter0_f_1_10)">
          <path
            d="M345.232 878L742.257 368.149L648.602 150L594.193 209.846L214.746 452.816L150.19 705.181L345.232 878Z"
            fill="url(#paint0_linear_1_10)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_10"
            x="0.18988"
            y="0"
            width="892.067"
            height="1028"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_1_10"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_10"
            x1="183.411"
            y1="649.754"
            x2="517.948"
            y2="714.735"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C07A92" />
            <stop offset="0.536458" stopColor="#863999" />
            <stop offset="0.973958" stopColor="#3C1046" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.container}>
        <h4>Our team</h4>
        <div className={styles.teamItems}>
          {teamData.map((member, idx) => (
            <div key={idx} className={`name ${styles.teamItem}`}>
              <div className={styles.photoWrapper}>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
                <picture>
                  <source
                    srcSet={member.img.webp}
                    className={styles.memberPhoto}
                    type="image/webp"
                  />
                  <img
                    src={member.img.png}
                    alt={member.name}
                    className={styles.memberPhoto}
                  />
                </picture>
              </div>
              <span className="label">{member.role}</span>
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
