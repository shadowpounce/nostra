import React from 'react'
import { useEffect, useState } from 'react'
import styles from './We.module.scss'

import cardImg01 from './assets/01.png'
import cardImg02 from './assets/02.png'
import cardImg03 from './assets/03.png'
import cardImg01W from './assets/01.webp'
import cardImg02W from './assets/02.webp'
import cardImg03W from './assets/03.webp'

const We = () => {
  const [cards, setCards] = useState('')
  const [cardWidth, setCardWidth] = useState(0)

  useEffect(() => {
    setCards(document.querySelectorAll(`.${styles.cardHead}`))
  }, [])

  useEffect(() => {
    if (cards.length > 0) {
      setCardWidth(cards[0].offsetWidth)
    }
  }, [cards])

  useEffect(() => {
    cards &&
      cards.forEach((card) => (card.style.height = `${cardWidth - 60}px`))
  }, [cardWidth])

  return (
    <section className={`section ${styles.we}`} id="s-2">
      <div className="container">
        <div className="full-flex-row">
          <h2>We</h2>
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
              stroke="#C2C1C1"
              strokeWidth="4.90909"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={`line ${styles.line}`}></div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img className={styles.cardImg} src={cardImg01} alt="" />
              <p className={styles.cardNum}>01</p>
            </div>
            <div className={styles.cardBody}>
              <h3>Provide solutions</h3>
              <div className={styles.cardLine}></div>
              <p>A POS DAO designed to safeguard meritocracy in GameFi</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img className={styles.cardImg} src={cardImg02} alt="" />
              <p className={styles.cardNum}>02</p>
            </div>
            <div className={styles.cardBody}>
              <h3>Education</h3>
              <div className={styles.cardLine}></div>
              <p>
                Developers within Nostra 2B ecosystem are deprived ability to
                slash the game currency nor to manipulate the NFT market
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img className={styles.cardImg} src={cardImg03} alt="" />
              <p className={styles.cardNum}>03</p>
            </div>
            <div className={styles.cardBody}>
              <h3>Gaming ecosystem</h3>
              <div className={styles.cardLine}></div>
              <p>
                Developers will only be rerewarded from sustainable growth of
                their game & game community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default We
