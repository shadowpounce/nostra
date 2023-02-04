import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import valuesData from './valuesData'
import styles from './Values.module.scss'

const Values = () => {
  SwiperCore.use([Autoplay])

  return (
    <section id="s-7" className={`section ${styles.values}`}>
      <svg className={styles.svg}>
        <clipPath id="values-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 V1 H1 L0.792,0.215 L0,0"></path>
        </clipPath>
      </svg>
      <div className={styles.valuesHead}>
        <h4>
          Our
          <br />
          Values
        </h4>
        <div>
          <p>
            Nostra aims to constantly set new standards and to facilitate social
            immersion to lead the way to convoy people together in an
            innovative, new digital world.
          </p>
          <button>Start now</button>
        </div>
      </div>
      <Swiper
        loop={true}
        loopedslides="true"
        slidesPerView={5}
        spaceBetween={25}
        className={styles.valuesBody}
      >
        {valuesData.map((value, idx) => (
          <SwiperSlide key={idx} className={styles.value}>
            <img src={value.img} alt="" />
            <div className={styles.head}>
              <h6>values</h6>
              <span>{value.span}</span>
            </div>
            <div className={styles.body}>
              <small>0{idx + 1}</small>
              <h6>{value.title}</h6>
              <p>{value.body}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Values
