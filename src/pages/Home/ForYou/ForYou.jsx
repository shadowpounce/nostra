import React from 'react'

import { useState, useEffect } from 'react'

import styles from './ForYou.module.scss'
import Img1 from './assets/1.png'

const ForYou = () => {
  // calculating body width for each case
  useEffect(() => {
    const caseHeads = document.querySelectorAll(`.${styles.caseHead}`)
    const caseWidth = caseHeads[0].offsetWidth
    const cases = caseHeads.length
    const casesWidth = caseWidth * cases

    const caseBodyWidth = document.body.clientWidth - casesWidth

    document
      .querySelectorAll(`.${styles.caseBody}`)
      .forEach((body) => (body.style.width = `${caseBodyWidth}px`))
  }, [])

  return (
    <section className={`section ${styles.forYou}`} id="s-3">
      <div className={`container ${styles.container}`}>
        <h3>For You</h3>
        <div className={styles.cases}>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseHead}>
              <span>/01</span>
              <div>
                <small>Digital Twins</small>
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
                    stroke-width="1.77273"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.caseBody}>
              <h1>digital twins</h1>
              <img src={Img1} alt="" className={styles.image} />
              <div>
                <a href="">
                  <p>Download PDF</p>
                </a>
                <p>
                  Nostra aims to constantly set new standards and to facilitate
                  social immersion to lead the way to convoy people together in
                  an innovative, new digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForYou
