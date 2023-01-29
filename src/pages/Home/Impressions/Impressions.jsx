import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './Impressions.module.scss'
import Img1 from './assets/1.png'
import Img2 from './assets/2.png'
import Img3 from './assets/3.png'
import Img4 from './assets/4.png'
import Img5 from './assets/5.png'
import Img6 from './assets/6.png'
import Img7 from './assets/7.png'

import RGB from './assets/rgb.svg'

const carouselItemsData = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]

import downloadIcon from './assets/download.svg'

const Impressions = () => {
  const [swiper, setSwiper] = useState('')
  const [activeSlide, setActiveSlide] = useState(4)
  const swiperRef = useRef()

  //   useEffect(() => {
  //     console.log(swiper)
  //   }, [swiper])

  return (
    <section id="s-5" className={`section ${styles.impressions}`}>
      <img src={RGB} alt="rgb" className={styles.rgb} />

      <div className={styles.container}>
        <h4>Impressions</h4>
        <Swiper
          centeredSlides={true}
          ref={swiperRef}
          className={styles.impressionsCarousel}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(swiper) => {
            console.log(swiper.activeIndex)
            setActiveSlide(swiper.activeIndex)
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper)
            swiper.slideTo(activeSlide)
          }}
        >
          {carouselItemsData.map((item, idx) => (
            <SwiperSlide
              id={idx}
              className={`${styles.carouselItem} ${
                activeSlide === idx ? `${styles.active}` : ''
              }`}
              key={idx}
            >
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.downloadBtn}>
          <img src={downloadIcon} alt="" />
          Download now
        </button>
      </div>
    </section>
  )
}

export default Impressions
