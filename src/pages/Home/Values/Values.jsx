import { Swiper, SwiperSlide } from 'swiper/react'
import useSectionsStore from '../../../store'
import 'swiper/css'
import valuesData from './valuesData'
import styles from './Values.module.scss'

const Values = () => {
  const setSwiperValues = useSectionsStore((state) => state.setSwiperValues)

  return (
    <section id="s-7" className={`section ${styles.values}`}>
      <svg className={styles.svg}>
        <clipPath id="values-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 V1 H1 L0.792,0.215 L0,0"></path>
        </clipPath>
      </svg>
      <div className={`head ${styles.valuesHead}`}>
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
        initialSlide={-5}
        slidesPerView={1}
        spaceBetween={25}
        speed={750}
        width={250}
        breakpoints={{
          481: {
            speed: 250,
            slidesPerView: 5,
            width: null,
          },
        }}
        onSwiper={(swiper) => setSwiperValues(swiper)}
        className={`swiper-values ${styles.valuesBody}`}
      >
        {valuesData.map((value, idx) => (
          <SwiperSlide key={idx} className={` ${styles.value}`}>
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
