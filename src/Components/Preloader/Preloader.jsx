import { useEffect, useState, useRef } from 'react'
import { preloader } from './preloader'

import styles from './Preloader.module.scss'

const Preloader = ({}) => {
  const [loading, setLoading] = useState(0)

  const refPreloader = useRef(null)

  useEffect(() => {
    preloader({
      onChange(percentage, complete) {
        setLoading(percentage)
        if (complete || percentage > 80) {
          setTimeout(() => {
            refPreloader.current.classList.add(styles.loaded)
            func()
          }, 1000)
        }
      },
    })
  }, [])

  return (
    <div ref={refPreloader} className={styles.preloader}>
      <big id="ot-1" className={styles.overlayText}>
        stra metaverse
      </big>
      <big id="ot-2" className={styles.overlayText}>
        metaverse metaverse
      </big>
      <big id="ot-3" className={styles.overlayText}>
        nostra metaverse
      </big>
      <span className={styles.percentLoading}>
        {loading > 100 ? 100 : loading.toFixed(0)}%
      </span>
    </div>
  )
}

export default Preloader
