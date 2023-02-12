import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSectionsStore from '../../../store'
import 'swiper/css'
import styles from './Impressions.module.scss'
import Img1 from './assets/1.png'
import Img2 from './assets/2.png'
import Img3 from './assets/3.png'
import Img4 from './assets/4.png'
import Img5 from './assets/5.png'
import Img6 from './assets/6.png'
import Img7 from './assets/7.png'
import Img1W from './assets/1.webp'
import Img2W from './assets/2.webp'
import Img3W from './assets/3.webp'
import Img4W from './assets/4.webp'
import Img5W from './assets/5.webp'
import Img6W from './assets/6.webp'
import Img7W from './assets/7.webp'

import RGB from './assets/rgb.svg'

const carouselItemsData = [
  {
    png: Img1,
    webp: Img1W,
  },
  {
    png: Img2,
    webp: Img2W,
  },
  {
    png: Img3,
    webp: Img3W,
  },
  {
    png: Img4,
    webp: Img4W,
  },
  {
    png: Img5,
    webp: Img5W,
  },
  {
    png: Img6,
    webp: Img6W,
  },
  {
    png: Img7,
    webp: Img7W,
  },
]

import downloadIcon from './assets/download.svg'

const Impressions = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const setSwiperImpressions = useSectionsStore(
    (state) => state.setSwiperImpressions
  )

  return (
    <section id="s-5" className={`section ${styles.impressions}`}>
      <div className={styles.container}>
        <h4>Our app</h4>
        <Swiper
          speed={500}
          centeredSlides={true}
          className={styles.impressionsCarousel}
          slidesPerView={2}
          spaceBetween={15}
          width={500}
          breakpoints={{
            481: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex)
          }}
          onSwiper={(swiper) => {
            setSwiperImpressions(swiper)
          }}
        >
          {carouselItemsData.map((item, idx) => (
            <SwiperSlide
              id={idx}
              className={`impression ${styles.carouselItem} ${
                activeSlide === idx ? `${styles.active}` : ''
              }`}
              key={idx}
            >
              <picture>
                <source
                  data-hovered="true"
                  srcSet={item.webp}
                  type="image/webp"
                />
                <img data-hovered="true" src={item.png} alt="" />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.downloadBtn}>
          <img src={downloadIcon} alt="" />
          Download now
        </button>
      </div>
      <img src={RGB} alt="rgb" className={`rgb ${styles.rgb}`} />
    </section>
  )
}

export default Impressions
