import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import { useState, useEffect } from 'react'
import useSectionsStore from '../../store'
import Welcome from './Welcome/Welcome'
import We from './We/We'
import ForYou from './ForYou/ForYou'
import How from './How/How'
import Impressions from './Impressions/Impressions'
import Location from './Location/Location'
import Values from './Values/Values'
import Team from './Team/Team'
import News from './News/News'
import Hiring from './Hiring/Hiring'
import Footer from '../../Components/Footer/Footer'
import Menu from '../../Components/Menu/Menu'

import './Home.scss'

const Home = () => {
  const [menuActive, setMenuActive] = useState(false)

  const sectionForYouActive = useSectionsStore((state) => state.setForYou)
  const sectionImpressionActive = useSectionsStore(
    (state) => state.setImpression
  )
  const sectionValuesActive = useSectionsStore((state) => state.setValues)
  const setDirectionImpression = useSectionsStore(
    (state) => state.setDirectionImpression
  )
  const setDirectionValues = useSectionsStore(
    (state) => state.setDirectionValues
  )

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      onLeave={(origin, destination, direction, trigger) => {
        if (menuActive) {
          return false
        }
        const sec = origin.item
        if (sec.id === 's-4' || sec.id === 's-2') {
          sectionForYouActive(true)
        } else {
          sectionForYouActive(false)
        }
        if (sec.id === 's-4' || sec.id === 's-6') {
          sectionImpressionActive(true)
        } else {
          direction === 'down'
            ? setDirectionImpression('down')
            : setDirectionImpression('up')
          sectionImpressionActive(false)
        }
        if (sec.id === 's-5' || sec.id === 's-7') {
          sectionValuesActive(true)
        } else {
          direction === 'down'
            ? setDirectionValues('down')
            : setDirectionValues('up')
          sectionValuesActive(false)
        }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Menu setMenuActive={setMenuActive} menuActive={menuActive} />
            <Welcome setMenuActive={setMenuActive} menuActive={menuActive} />
            <We />
            <ForYou />
            <How />
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
