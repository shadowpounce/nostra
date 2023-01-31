import React from 'react'
import { useEffect, useState, useRef } from 'react'
import styles from './News.module.scss'

import Img from './assets/1.png'

const categories = [
  'all',
  'metaverse',
  'businesses',
  'events',
  'cases',
  'analytics',
]

const News = () => {
  const [selectedCategories, setSelectedCategories] = useState(['all'])

  //   useEffect(() => {
  //     alert(selectedCategories)
  //   }, [selectedCategories])

  const selectCategory = (cat) => {
    if (cat.classList.contains(`${styles.active}`)) {
      setSelectedCategories(
        selectedCategories.filter((el) => el !== cat.dataset.category)
      )
      cat.classList.remove(`${styles.active}`)
    } else if (!cat.classList.contains(`${styles.active}`)) {
      cat.classList.add(`${styles.active}`)
      setSelectedCategories([...selectedCategories, cat.dataset.category])
    }
  }

  return (
    <section className={`section ${styles.news}`}>
      <div className={styles.newsHead}>
        <h1>What's up</h1>
        <div className={styles.sort}>
          <div className={styles.sortHead}>
            <span className={styles.sortValue}>Latest news</span>
            <svg
              width="27"
              height="15"
              viewBox="0 0 27 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L14.5 13.5L26.5 1" stroke="white" />
            </svg>
          </div>
          <div className={`line ${styles.line}`}></div>
        </div>
      </div>
      <div className={styles.newsBody}>
        <div className={styles.controlPanel}>
          <span
            className="label"
            onClick={() => {
              alert(selectedCategories.current)
            }}
          >
            Categories
          </span>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <div
                key={cat}
                data-category={cat}
                className={`${styles.category} ${
                  cat === 'all' && `${styles.active}`
                }`}
                onClick={(e) =>
                  selectCategory(e.target.closest(`.${styles.category}`))
                }
              >
                <p>{cat}</p>
              </div>
            ))}
          </div>
          <div className={styles.arrows}>
            <div className={styles.arrow}>
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6 7.4789H1.76722M1.76722 7.4789L7.50568 13.2174M1.76722 7.4789L7.50568 1.74045"
                  stroke="white"
                  stroke-width="1.62308"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className={`${styles.arrow} ${styles.active}`}>
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.2003 7.4789H18.0331M18.0331 7.4789L12.2946 13.2174M18.0331 7.4789L12.2946 1.74045"
                  stroke="white"
                  stroke-width="1.62308"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.newsWrapper}>
          <div className={styles.newsItem}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.newsArrow}
            >
              <path
                d="M1.28699 22.0293L20.7422 1.99988M20.7422 1.99988L7.2815 2.19565M20.7422 1.99988L20.9379 15.4605"
                stroke="#C2C1C1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p className={styles.newsNumber}>01</p>
            <h3>Provide innovative solutons</h3>
            <p className={styles.newsText}>
              Nostraverse provides innovative solutons to businesses to explore
              and unfold the opportunities of the Metaverse
            </p>
            <img src={Img} className={styles.newsPicture} alt="" />
            <p className={styles.newsLabel}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className={styles.newsItem}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.newsArrow}
            >
              <path
                d="M1.28699 22.0293L20.7422 1.99988M20.7422 1.99988L7.2815 2.19565M20.7422 1.99988L20.9379 15.4605"
                stroke="#C2C1C1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p className={styles.newsNumber}>01</p>
            <h3>Provide innovative solutons</h3>
            <p className={styles.newsText}>
              Nostraverse provides innovative solutons to businesses to explore
              and unfold the opportunities of the Metaverse
            </p>
            <img src={Img} className={styles.newsPicture} alt="" />
            <p className={styles.newsLabel}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className={styles.newsItem}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.newsArrow}
            >
              <path
                d="M1.28699 22.0293L20.7422 1.99988M20.7422 1.99988L7.2815 2.19565M20.7422 1.99988L20.9379 15.4605"
                stroke="#C2C1C1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p className={styles.newsNumber}>01</p>
            <h3>Provide innovative solutons</h3>
            <p className={styles.newsText}>
              Nostraverse provides innovative solutons to businesses to explore
              and unfold the opportunities of the Metaverse
            </p>
            <img src={Img} className={styles.newsPicture} alt="" />
            <p className={styles.newsLabel}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className={styles.newsItem}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.newsArrow}
            >
              <path
                d="M1.28699 22.0293L20.7422 1.99988M20.7422 1.99988L7.2815 2.19565M20.7422 1.99988L20.9379 15.4605"
                stroke="#C2C1C1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p className={styles.newsNumber}>01</p>
            <h3>Provide innovative solutons</h3>
            <p className={styles.newsText}>
              Nostraverse provides innovative solutons to businesses to explore
              and unfold the opportunities of the Metaverse
            </p>
            <img src={Img} className={styles.newsPicture} alt="" />
            <p className={styles.newsLabel}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className={styles.newsItem}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.newsArrow}
            >
              <path
                d="M1.28699 22.0293L20.7422 1.99988M20.7422 1.99988L7.2815 2.19565M20.7422 1.99988L20.9379 15.4605"
                stroke="#C2C1C1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p className={styles.newsNumber}>01</p>
            <h3>Provide innovative solutons</h3>
            <p className={styles.newsText}>
              Nostraverse provides innovative solutons to businesses to explore
              and unfold the opportunities of the Metaverse
            </p>
            <img src={Img} className={styles.newsPicture} alt="" />
            <p className={styles.newsLabel}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
