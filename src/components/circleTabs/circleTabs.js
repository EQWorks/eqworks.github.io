import React, { useState, useRef } from 'react'
import * as componentStyles from './circleTabs.module.scss'
import { Container, Row, Col } from 'react-grid-system'

import DataContent from './dataContent'
import BusinessContent from './businessContent'
import MarketerContent from './marketerContent'

import Points from '../../svgs/pointsIcon.svg'
import Breifcase from '../../svgs/briefcaseIcon.svg'
import Megaphone from '../../svgs/megaphoneIcon.svg'

const CircleTabs = () => {
  const tabsRef = useRef(null)
  const [activeTab, setActiveTab] = useState(null)

  const executeScroll = () => {
    console.log('scrolling')
    tabsRef.current.scrollIntoView()
  }

  const clickHandler = (key) => {
    if (key === activeTab) setActiveTab(null)
    else setActiveTab(key)
    executeScroll()
  }

  return (
    <>
      <Container className='container pageRow' style={{ marginBottom: `7vw` }}>
        <Row className='pageRow'>
          <Col lg={12}>
            <h2>What Role Do You Best Fit Into?</h2>
            <p className='centered blueUnderline'>
              This will help us better tailor our offering for you
            </p>
          </Col>
        </Row>

        <Row className='pageRowSm'>
          <div
            ref={tabsRef}
            style={{ marginTop: `-6rem`, marginBottom: `6rem` }}
          ></div>
          <Col>
            <div className={componentStyles.tabContainer}>
              <div
                className={
                  activeTab === 1
                    ? `${componentStyles.tab} ${componentStyles.active}`
                    : componentStyles.tab
                }
              >
                <button onClick={() => clickHandler(1)}>
                  <Points />
                </button>
                <h3>Data Scientists &amp; Analysts</h3>
                <p className='fontSm'>
                  You transform data into <br />
                  actionable insights
                </p>
              </div>

              <div
                className={
                  activeTab === 2
                    ? `${componentStyles.tab} ${componentStyles.active}`
                    : componentStyles.tab
                }
              >
                <button onClick={() => clickHandler(2)}>
                  <Breifcase />
                </button>
                <h3>Business Leaders</h3>
                <p className='fontSm'>
                  You leverage data and insights <br />
                  to drive decision making
                </p>
              </div>

              <div
                className={
                  activeTab === 3
                    ? `${componentStyles.tab} ${componentStyles.active}`
                    : componentStyles.tab
                }
              >
                <button onClick={() => clickHandler(3)}>
                  <Megaphone />
                </button>
                <h3>Marketers</h3>
                <p className='fontSm'>
                  You leverage data and <br />
                  insights to activate
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className={componentStyles.tabContentContainer}>
        {activeTab === 1 && (
          <div className={componentStyles.tabContent}>
            <DataContent />
          </div>
        )}

        {activeTab === 2 && (
          <div className={componentStyles.tabContent}>
            <BusinessContent
              dataClick={() => clickHandler(1)}
              marketerClick={() => clickHandler(3)}
            />
          </div>
        )}

        {activeTab === 3 && (
          <div className={componentStyles.tabContent}>
            <MarketerContent />
          </div>
        )}
      </div>
    </>
  )
}

export default CircleTabs
