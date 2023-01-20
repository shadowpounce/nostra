import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import { Link } from 'react-router-dom'

import Welcome from './Welcome/Welcome'
import We from './We/We'

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
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Home
