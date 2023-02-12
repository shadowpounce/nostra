import React, { useEffect } from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './News.module.scss'
import indexingDelay from '../../../utils/indexingDelay'
import newsData from './newsData'

const FILTER_TAGS = ['metaverse', 'businesses', 'events', 'cases', 'analytics']

const News = () => {
  const [swiper, setSwiper] = useState(null)
  const [activeCategories, setActiveCategories] = useState([])
  const [catData, setCatData] = useState()
  const [allCategoriesSelected, setAllCategoriesSelected] = useState(true)

  useEffect(() => {
    if (
      activeCategories.length >= 1 &&
      activeCategories.length < catData.length
    ) {
      setAllCategoriesSelected(false)
    } else if (
      activeCategories.length < 1 ||
      activeCategories.length == catData.length
    ) {
      setAllCategoriesSelected(true)
    }
  }, [activeCategories])

  useEffect(() => {
    setCatData(FILTER_TAGS)
  })

  useEffect(() => {
    const categories = document.querySelectorAll(`.${styles.category}`)
    const newsItems = document.querySelectorAll(`.${styles.newsItem}`)

    indexingDelay(newsItems, 'transition')
    indexingDelay(categories, 'transition')
  })

  const selectCategory = (cat) => {
    let arr = activeCategories

    if (!activeCategories.includes(cat)) {
      arr = [...activeCategories, cat]
    } else {
      arr = arr.filter((el) => el !== cat)
    }

    return arr
  }

  return (
    <section id="s-9" className={`section ${styles.news}`}>
      <svg
        className={`svg ${styles.svg}`}
        width="420"
        height="811"
        viewBox="0 0 420 811"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_326)">
          <path
            d="M286.241 740.155L70.2958 211.527L134.092 70L164.974 106.173L386.123 247.78L416.758 405.779L286.241 740.155Z"
            fill="url(#paint0_linear_1_326)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_326"
            x="0.295776"
            y="0"
            width="486.462"
            height="810.155"
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
              stdDeviation="35"
              result="effect1_foregroundBlur_1_326"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_326"
            x1="398.527"
            y1="371.708"
            x2="191.021"
            y2="399.527"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#481246" />
            <stop offset="0.536458" stopColor="#18113D" />
            <stop offset="0.973958" stopColor="#101125" />
          </linearGradient>
        </defs>
      </svg>

      <div className={`newsHead ${styles.newsHead}`}>
        <h1>News</h1>
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
      <div className={`news-body ${styles.newsBody}`}>
        <div className={styles.controlPanel}>
          <span className="label">Categories</span>
          <div className={styles.categories}>
            <div
              onClick={() => {
                !allCategoriesSelected && setActiveCategories([])
              }}
              className={`category ${styles.category} ${
                allCategoriesSelected && `${styles.active}`
              }`}
            >
              <p>all</p>
            </div>
            {catData &&
              catData.map((cat) => (
                <div
                  key={cat}
                  data-category={cat}
                  onClick={() => setActiveCategories(selectCategory(cat))}
                  className={`category ${styles.category} ${
                    activeCategories.includes(cat) ? `${styles.active}` : ''
                  }`}
                >
                  <p>{cat}</p>
                </div>
              ))}
          </div>
          <div className={styles.arrows}>
            <div
              id="arrow-right"
              onClick={() => {
                swiper.slidePrev()
              }}
              className={`arrow ${styles.arrow}`}
            >
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
                  strokeWidth="1.62308"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div
              id="arrow-left"
              onClick={() => {
                swiper.slideNext()
              }}
              className={`arrow ${styles.arrow}`}
            >
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
                  strokeWidth="1.62308"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          speed={850}
          breakpoints={{
            1140: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
          }}
          className={styles.newsWrapper}
        >
          {activeCategories.length > 0
            ? newsData.map((item, idx) => {
                if (activeCategories.includes(item.category)) {
                  return (
                    <SwiperSlide
                      key={idx}
                      className={`news-item ${styles.newsItem} ${
                        !activeCategories.includes(item.category) &&
                        `${styles.out}`
                      }`}
                    >
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
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className={styles.newsNumber}>0{idx + 1}</p>
                      <h3>{item.title}</h3>
                      <p className={styles.newsText}>{item.text}</p>
                      <picture>
                        <source
                          srcSet={item.img.webp}
                          className={styles.newsPicture}
                          type="image/webp"
                        />
                        <img
                          src={item.img.png}
                          className={styles.newsPicture}
                          alt=""
                        />
                      </picture>
                      <p className={styles.newsLabel}>{item.label}</p>
                    </SwiperSlide>
                  )
                }
              })
            : newsData.map((item, idx) => {
                return (
                  <SwiperSlide
                    key={idx}
                    className={`news-item ${styles.newsItem}`}
                  >
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
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <p className={styles.newsNumber}>0{idx + 1}</p>
                    <h3>{item.title}</h3>
                    <p className={styles.newsText}>{item.text}</p>
                    <picture>
                      <source
                        srcSet={item.img.webp}
                        className={styles.newsPicture}
                        type="image/webp"
                      />
                      <img
                        src={item.img.png}
                        className={styles.newsPicture}
                        alt=""
                      />
                    </picture>
                    <p className={styles.newsLabel}>{item.label}</p>
                  </SwiperSlide>
                )
              })}
        </Swiper>
      </div>
    </section>
  )
}

export default News
