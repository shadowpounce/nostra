import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import { useState, useEffect } from 'react'
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

import './Home.scss'

const Home = () => {
  const [sectionForYou, setSectionForYou] = useState(false)

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={850}
      onLeave={(origin, destination, direction, trigger) => {
        const sec = origin.item
        if (sec.id === 's-4' || sec.id === 's-2') {
          setSectionForYou(true)
        } else {
          setSectionForYou(false)
        }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Welcome />
            <We />
            <ForYou sectionForYou={sectionForYou} />
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
