import { useState } from 'react'

import Link from 'next/link'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import ImgWebP from '../shared/img-webp'

const Header = styled.header`
  background-color: #3232f5;
  padding: 0.5em;
  color: white;
  font-size: 36px;
`

const Close = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: white;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  font-size: 44px;
  font-weight: lighter;
`

const Main = styled.main`
  padding: 2em;
`

const H1 = styled.h1`
  font-size: 48px;
  font-family: 'Hind', sans-serif;
  font-weight: 200;
  line-height: 60px;
`

const P = styled.p`
  margin: 1.5em;
  font-size: 18px;
  line-height: 33px;
  font-family: 'Hind', sans-serif;
`

const ReadMore = styled.a`
  font-size: 16px;
  display: inline-block;
  background-color: #3232f5;
  padding: 1em 3em;
  color: white;
  text-decoration: none;
  font-family: 'Hind', sans-serif;
`

const FlexContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : '')};
`
const FlexItem = styled.div`
  width: ${(props) => (props.vertical ? '80%' : '')};
  padding: ${(props) => (props.vertical ? '0.3125em' : '0 0.3125em')};
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
        <FlexContainer>
          <FlexItem>
            <ImgWebP
              alt='EQ Works Logo'
              src='/images/icons/eq-icon.png'
              width='30px'
            />
          </FlexItem>
          <FlexItem>
            <p>+</p>
          </FlexItem>
          <FlexItem>
            <ImgWebP
              alt='Paymi Logo'
              src='/images/icons/paymi-icon.png'
              width='70px'
            />
          </FlexItem>
        </FlexContainer>

        <Close
          onClick={() => {
            setOpen(false)
          }}
        >
          &times;
        </Close>
      </Header>
      <Main>
        <FlexContainer vertical>
          <FlexItem vertical>
            <H1>EQ IS EXCITED TO ANNOUNCE THE ACQUISITION OF PAYMI</H1>
          </FlexItem>
          <FlexItem vertical>
            <P>
              Paymi’s proprietary zero party purchase data will be incorporated
              into EQ’s LOCUS platform to strengthen its capabilities and
              provide retailers and brands with deeper, richer actionable
              insights.
            </P>
            <P>
              Paymi is a cloud-based marketing platform that uses card linking
              technology to enable consumers to receive cash-back rewards, and
              merchants the ability to execute strategically targeted incentives
              to drive incremental sales and better understand shopper behavior.
            </P>
          </FlexItem>
          <FlexItem vertical>
            <ReadMore href='/press-release/eq-is-excited-to-announce-the-acquisition-of-paymi'>
              READ MORE »
            </ReadMore>
          </FlexItem>
        </FlexContainer>
      </Main>
    </ReactModal>
  )
}

export default Announcement
