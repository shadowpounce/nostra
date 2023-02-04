import React from 'react'
import casesData from './casesData'
import { useState, useEffect } from 'react'

import styles from './ForYou.module.scss'

const ForYou = ({ sectionForYou }) => {
  const [activeCaseID, setActiveCaseID] = useState(undefined)
  const [caseBodyW, setCaseBodyW] = useState(0)

  useEffect(() => {
    const caseHeads = document.querySelectorAll(`.${styles.caseHead}`)
    const caseWidth = caseHeads[0].offsetWidth
    const cases = caseHeads.length
    const casesWidth = caseWidth * cases
    const casesArr = Array.from(caseHeads)
    const caseBodyWidth = document.body.clientWidth - casesWidth
    setCaseBodyW(caseBodyWidth)

    casesArr.forEach((el, idx) => {
      el.querySelector('span').innerHTML = `/0${idx + 1}`
    })
  }, [])

  useEffect(() => {
    if (sectionForYou) {
      setActiveCaseID(0)
    } else {
      setActiveCaseID(undefined)
      document.querySelectorAll(`.${styles.case}`).forEach((el) => {
        el.classList.remove(`${styles.active}`)
        el.querySelector(`.${styles.caseBody}`).style.width = `0px`
      })
    }
  }, [sectionForYou])

  useEffect(() => {
    if (activeCaseID !== undefined) {
      const cases = document.querySelectorAll(`.${styles.case}`)

      cases[activeCaseID].classList.add(`${styles.active}`)
      cases[activeCaseID].querySelector(
        `.${styles.caseBody}`
      ).style.width = `${caseBodyW}px`
    }
  }, [activeCaseID, caseBodyW])

  const openCase = (e) => {
    const id = e.target.closest(`.${styles.case}`).id
    if (activeCaseID !== id) {
      document.querySelectorAll(`.${styles.case}`).forEach((el) => {
        el.classList.remove(`${styles.active}`)
        el.querySelector(`.${styles.caseBody}`).style.width = `0px`
      })

      setActiveCaseID(id)
    }
  }

  return (
    <section className={`section ${styles.forYou}`} id="s-3">
      <div className={`container ${styles.container}`}>
        <h3>For You</h3>
        <div className={styles.cases}>
          {casesData.map((item, idx) => (
            <div
              onClick={(e) => openCase(e)}
              id={idx}
              key={idx}
              className={styles.case}
            >
              <div className={styles.caseHead}>
                <span>/0{idx + 1}</span>
                <div className={`${styles.caseHeadInfo}`}>
                  <small>{item.title}</small>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9998 14L0.999756 1M0.999756 1L9.86339 1M0.999756 1L0.999756 9.86364"
                      stroke="white"
                      strokeWidth="1.77273"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.caseBody}>
                <div className={styles.wrap}>
                  <h4>{item.title}</h4>
                  <picture>
                    <source
                      className={styles.image}
                      srcSet={item.img.webp}
                      type="image/webp"
                    />
                    <img src={item.img.png} alt="" className={styles.image} />
                  </picture>
                  <div className={styles.bodyInfo}>
                    <a href="">
                      <p>Download PDF</p>
                    </a>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForYou
