import { useState } from 'react'

import Link from 'next/link'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #3232f5;
  padding: 0.5em;
  color: white;
  font-size: 36px;
`

const Close = styled.button`
  position: relative;
  border: none;
  color: white;
  top: 12px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  font-size: 24px;
  font-weight: lighter;
`

const Main = styled.main`
  padding: 2em;
`

const H1 = styled.h1`
  font-size: 36px;
`

const P = styled.p`
  margin: 1.5em;
`

const ReadMore = styled.a`
  display: inline-block;
  background-color: #3232f5;
  padding: 1em 2em;
  color: white;
  text-decoration: none;
`

const Announcement = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          zIndex: 2147483647,
          inset: '20%',
          background: 'none'
        },
        content: {
          position: 'initial',
          inset: '0px',
          textAlign: 'center',
          padding: 0,
          border: 'none',
          borderRadius: 0,
          fontSize: '13px'
        }
      }}
      ariaHideApp={false}
    >
      <Header>
        EQ + Paymi
        <Close
          onClick={() => {
            setOpen(false)
          }}
        >
          &times;
        </Close>
      </Header>
      <Main>
        <H1>EQ IS EXCITED TO ANNOUNCE THE ACQUISITION OF PAYMI</H1>
        <div>
          <P>
            Paymi’s proprietary zero party purchase data will be incorporated
            into EQ’s LOCUS platform to strengthen its capabilities and provide
            retailers and brands with deeper, richer actionable insights.
          </P>
          <P>
            Paymi is a cloud-based marketing platform that uses card linking
            technology to enable consumers to receive cash-back rewards, and
            merchants the ability to execute strategically targeted incentives
            to drive incremental sales and better understand shopper behavior.
          </P>
          <ReadMore href='/press-release/eq-is-excited-to-announce-the-acquisition-of-paymi'>
            READ MORE...
          </ReadMore>
        </div>
      </Main>
    </ReactModal>
  )
}

export default Announcement
