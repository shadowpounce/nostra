import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import { Link } from 'react-router-dom'

import Welcome from './Welcome/Welcome'
import We from './We/We'
import ForYou from './ForYou/ForYou'
import How from './How/How'
import Footer from '../../Components/Footer/Footer'

import './Home.scss'

const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={850} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Welcome />
          <We />
          <ForYou />
          <How />
          <Footer />
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Home
