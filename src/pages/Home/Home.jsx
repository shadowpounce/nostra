import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import { useState } from 'react'
import useSectionsStore from '../../store'
import Welcome from './Welcome/Welcome'
import We from './We/We'
import ForYou from './ForYou/ForYou'
import Functions from './Functions/Functions'
import Impressions from './Impressions/Impressions'
import Location from './Location/Location'
import Values from './Values/Values'
import Team from './Team/Team'
import News from './News/News'
import Hiring from './Hiring/Hiring'
import Footer from '../../Components/Footer/Footer'
import Menu from '../../Components/Menu/Menu'
import Preloader from '../../Components/Preloader/Preloader.jsx'

import './Home.scss'

const Home = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [siteLoaded, setSiteLoaded] = useState(true)

  const sectionForYouActive = useSectionsStore((state) => state.setForYou)
  const swiperImpressions = useSectionsStore((state) => state.swiperImpressions)
  const swiperValues = useSectionsStore((state) => state.swiperValues)

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      // afterLoad={(origin, destination, direction, trigger) => {
      //   const activeSection = window.fullpage_api.getActiveSection().item.id

      //   if (activeSection === 's-5') {
      //     swiperImpressions.slideTo(4, 1500)
      //   }

      //   if (activeSection === 's-7') {
      //     swiperValues.slideTo(5, 1500)
      //   }
      // }}
      // onLeave={(origin, destination, direction, trigger) => {
      //   if (menuActive) {
      //     return false
      //   }

      //   if (origin.index === 3) {
      //     swiperImpressions.slideTo(4, 1500)
      //   }
      //   if (origin.index === 4) {
      //     if (direction === 'down') {
      //       swiperImpressions.slideTo(7, 1500)
      //     } else {
      //       swiperImpressions.slideTo(1, 1500)
      //     }
      //   }
      //   if (origin.index === 5) {
      //     if (direction === 'up') {
      //       swiperImpressions.slideTo(4, 1500)
      //     } else {
      //       swiperValues.slideTo(5, 1500)
      //     }
      //   }

      //   if (origin.index === 6) {
      //     if (direction === 'up') {
      //       swiperValues.slideTo(0, 1500)
      //     } else {
      //       swiperValues.slideTo(10, 1500)
      //     }
      //   }

      //   if (origin.index === 7) {
      //     if (direction === 'up') {
      //       swiperValues.slideTo(5, 1500)
      //     }
      //   }

      //   const sec = origin.item
      //   if (sec.id === 's-4' || sec.id === 's-2') {
      //     sectionForYouActive(true)
      //   } else {
      //     sectionForYouActive(false)
      //   }
      // }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* <Preloader setSiteLoaded={setSiteLoaded} />
            <Menu setMenuActive={setMenuActive} menuActive={menuActive} /> */}
            <Welcome
              siteLoaded={siteLoaded}
              setMenuActive={setMenuActive}
              menuActive={menuActive}
            />
            <We />
            <ForYou />
            <Functions />
            <Impressions />
            <Location />
            <Values />
            <Team />
            <News />
            <Hiring />
            <Footer />
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default Home
