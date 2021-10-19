import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-grid-system'
import { useSwipeable } from 'react-swipeable'
import * as componentStyles from './slideshow.module.scss'

import NewsReleaseTile from '../newsReleaseTile/newsReleaseTile'
import Button from '../button/button'

const SlideShow = ({ data }) => {
  const [activeSection, setSection] = useState(1)

  const handleNavClick = (dir) => {
    if (dir === -1 && activeSection === 1) setSection(3)
    else if (dir === 1 && activeSection === 3) setSection(1)
    else setSection(activeSection + dir)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => handleNavClick(1),
    onSwipedRight: (e) => handleNavClick(-1)
  })

  return (
    <StaticQuery
      query={graphql`
        {
          newsReleases: allContentfulPost(
            sort: { order: DESC, fields: createdAt }
            limit: 9
          ) {
            nodes {
              createdAt(formatString: "D MMM YYYY")
              id
              title
              slug
              excerpt {
                childrenMarkdownRemark {
                  excerpt(pruneLength: 80)
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <div {...swipeHandlers}>
            {activeSection === 1 && (
              <Row className={componentStyles.slideSection}>
                {data.newsReleases.nodes.slice(0, 3).map((newsRelease, i) => (
                  <Col lg={4} md={12} sm={12} key={i}>
                    <NewsReleaseTile
                      date={newsRelease.createdAt}
                      readingTime='2'
                      header={newsRelease.title}
                      snippet={
                        newsRelease.excerpt.childrenMarkdownRemark[0].excerpt
                      }
                      linkPath={`/company/news-releases/${newsRelease.slug}`}
                    />
                  </Col>
                ))}
              </Row>
            )}

            {activeSection === 2 && (
              <Row className={componentStyles.slideSection}>
                {data.newsReleases.nodes.slice(3, 6).map((newsRelease, i) => (
                  <Col lg={4} md={12} sm={12} key={i}>
                    <NewsReleaseTile
                      date={newsRelease.createdAt}
                      readingTime='2'
                      header={newsRelease.title}
                      snippet={
                        newsRelease.excerpt.childrenMarkdownRemark[0].excerpt
                      }
                      linkPath={`/company/news-releases/${newsRelease.slug}`}
                    />
                  </Col>
                ))}
              </Row>
            )}

            {activeSection === 3 && (
              <Row className={componentStyles.slideSection}>
                {data.newsReleases.nodes.slice(6).map((newsRelease, i) => (
                  <Col lg={4} md={12} sm={12} key={i}>
                    <NewsReleaseTile
                      date={newsRelease.createdAt}
                      readingTime='2'
                      header={newsRelease.title}
                      snippet={
                        newsRelease.excerpt.childrenMarkdownRemark[0].excerpt
                      }
                      linkPath={`/company/news-releases/${newsRelease.slug}`}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </div>

          <div className={componentStyles.slideshowNavContainer}>
            <Row>
              <Col>
                <div className='flexContainer justifyCenter'>
                  <ul className={componentStyles.slideshowNav}>
                    <li>
                      <button
                        aria-label='View news releases 1-3'
                        className={
                          activeSection === 1
                            ? componentStyles.active
                            : undefined
                        }
                        onClick={() => setSection(1)}
                      ></button>
                    </li>
                    <li>
                      <button
                        aria-label='View news releases 4-6'
                        className={
                          activeSection === 2
                            ? componentStyles.active
                            : undefined
                        }
                        onClick={() => setSection(2)}
                      ></button>
                    </li>
                    <li>
                      <button
                        aria-label='News releases 7-9'
                        className={
                          activeSection === 3
                            ? componentStyles.active
                            : undefined
                        }
                        onClick={() => setSection(3)}
                      ></button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>

          <Row className='pageRowSm'>
            <Col>
              <div className='flexContainer justifyCenter noMargins'>
                <Button
                  aria-label='View all news releases'
                  linkPath='/company/news-releases/'
                  text='View All'
                />
              </div>
            </Col>
          </Row>
        </>
      )}
    />
  )
}

export default SlideShow
