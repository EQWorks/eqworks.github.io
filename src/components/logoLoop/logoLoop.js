import * as React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import * as componentStyles from './logoLoop.module.scss'

import Walmart from '../../svgs/Logos/walmartLogo.svg'
import Prime from '../../svgs/Logos/amazonPrime.svg'
import Sobeys from '../../svgs/Logos/sobeysLogo.svg'
import HRosen from '../../svgs/Logos/harryrosenLogo.svg'
import Audi from '../../svgs/Logos/audiLogo.svg'
import Gm from '../../svgs/Logos/gmLogo.svg'
import Subway from '../../svgs/Logos/subwayLogo.svg'
import Subaru from '../../svgs/Logos/subaruLogo.svg'
import Lcbo from '../../svgs/Logos/lcboLogo.svg'
import Rogers from '../../svgs/Logos/rogersLogo.svg'
import Bell from '../../svgs/Logos/bellLogo.svg'

const LogoLoop = () => {
  return (
    <>
      <p className='centered'>
        <strong>Trusted by some of the world’s largest brands</strong>
      </p>
      <div className={componentStyles.loopContainer}>
        <div className={componentStyles.overlay}></div>

        <div className={componentStyles.logos}>
          <Walmart />
          <Prime />
          <Sobeys />
          <HRosen />
          <Audi />
          <Gm />
          <Subway />
          <Subaru />
          <Lcbo />
          <Rogers />
          <Bell />
        </div>

        <div className={componentStyles.logos}>
          <Walmart />
          <Prime />
          <Sobeys />
          <HRosen />
          <Audi />
          <Gm />
          <Subway />
          <Subaru />
          <Lcbo />
          <Rogers />
          <Bell />
        </div>
      </div>
    </>
  )
}

export default LogoLoop
