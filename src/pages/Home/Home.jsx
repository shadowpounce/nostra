import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'

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

const Home = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={850}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Welcome />
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

export default Home
