import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'

import Header from '../../Components/Header/Header'

import './Home.scss'

const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={850} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section" id="s-1">
            <Header />
            <div className="welcome-block">
              <span className="label">metaverse for businesses</span>
              <h1>Meta what?</h1>
              <h1>
                Let's discuss
                <svg
                  onClick={() => {
                    fullpageApi.moveSectionDown()
                  }}
                  className="arrow"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3L39 39M39 39V14.4545M39 39H14.4545"
                    stroke="#F6F6F6"
                    strokeWidth="4.90909"
                    strokeLinecap="round"
                  />
                </svg>
              </h1>
            </div>
            <div className="scroll-label">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.445312"
                  y="0.445312"
                  width="14.5469"
                  height="18.1094"
                  rx="5.24218"
                  stroke="white"
                  stroke-width="0.890624"
                />
                <path
                  d="M7.71875 3.5625V10.0937"
                  stroke="white"
                  stroke-width="0.890624"
                />
              </svg>
              <span>Scroll</span>
            </div>
          </section>
          <section className="section" id="s-2">
            <div className="container">
              <div className="full-flex-row">
                <h2>We</h2>
                <svg
                  className="arrow"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3L39 39M39 39V14.4545M39 39H14.4545"
                    stroke="#C2C1C1"
                    stroke-width="4.90909"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="line"></div>
              <div className="we-cards">
                <div className="card">
                  <div className="card__head">
                    <p className="card__num">01</p>
                  </div>
                  <div className="card__body">
                    <h3>Provide solutions</h3>
                    <div className="line"></div>
                    <p>A POS DAO designed to safeguard meritocracy in GameFi</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card__head">
                    <p className="card__num">02</p>
                  </div>
                  <div className="card__body">
                    <h3>Education</h3>
                    <div className="line"></div>
                    <p>
                      Developers within Nostra 2B ecosystem are deprived ability
                      to slash the game currency nor to manipulate the NFT
                      market
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card__head">
                    <p className="card__num">03</p>
                  </div>
                  <div className="card__body">
                    <h3>Gaming ecosystem</h3>
                    <div className="line"></div>
                    <p>
                      Developers will only be rerewarded from sustainable growth
                      of their game & game community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Home
