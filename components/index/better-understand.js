import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto ${({ theme }) => theme.spacing[12]}px auto;
  max-width: ${({ theme }) => theme.width.page};
  @media ${({ theme }) => theme.breakpoint.md} {
    padding: 0 ${({ theme }) => theme.spacing[2]}px;
  }
  .slide-img-left {
    margin: 0 auto ${({ theme }) => theme.spacing[8]}px auto;
    .image-bar {
      background-color: ${({ theme }) => theme.color.greyMedium};
      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;
      height: 200px;
      @media ${({ theme }) => theme.breakpoint.xs} {
        height: 300px;
      }
      @media ${({ theme }) => theme.breakpoint.sm} {
        height: 400px;
      }
      @media ${({ theme }) => theme.breakpoint.md} {
        display: none;
      }
    }
    .image-bar-1 {
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
        url('/images/index/fallback/better-understand-1.jpg');
    }
    .image-bar-2 {
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
        url('/images/index/fallback/better-understand-2.jpg');
    }
    .image-bar-3 {
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
        url('/images/index/fallback/better-understand-3.jpg');
    }
    .content {
      align-items: center;
      @media ${({ theme }) => theme.breakpoint.md} {
        display: flex;
      }
      .left {
        display: none;
        padding: 0 ${({ theme }) => theme.spacing[4]}px;
        width: 50%;
        @media ${({ theme }) => theme.breakpoint.md} {
          display: block;
        }
        @media ${({ theme }) => theme.breakpoint.lg} {
          padding: 0 ${({ theme }) => theme.spacing[8]}px;
        }
        .image {
          background-color: ${({ theme }) => theme.color.greyMedium};
          height: 100%;
          width: 100%;
        }
      }
      .right {
        padding: ${({ theme }) => theme.spacing[8]}px
          ${({ theme }) => theme.spacing[2]}px 0
          ${({ theme }) => theme.spacing[2]}px;
        text-align: center;
        @media ${({ theme }) => theme.breakpoint.md} {
          padding: 0 ${({ theme }) => theme.spacing[2]}px 0 0;
          text-align: left;
        }
        h2 {
          margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
          text-transform: uppercase;
          @media ${({ theme }) => theme.breakpoint.md} {
            margin: 0 0 ${({ theme }) => theme.spacing[2]}px 0;
            max-width: 450px;
          }
        }
        p {
          margin: 0 auto;
          max-width: 450px;
          @media ${({ theme }) => theme.breakpoint.md} {
            margin: 0;
          }
        }
        .divider {
          background-color: ${({ theme }) => theme.color.blue};
          height: 5px;
          margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
          width: 100px;
          @media ${({ theme }) => theme.breakpoint.md} {
            margin: 0 0 ${({ theme }) => theme.spacing[2]}px 0;
          }
        }
        .paragraph-1 {
          margin: 0 auto ${({ theme }) => theme.spacing[2]}px auto;
          @media ${({ theme }) => theme.breakpoint.md} {
            margin: 0 0 ${({ theme }) => theme.spacing[2]}px 0;
          }
        }
      }
    }
  }
`

export default function BetterUnderstand() {
  return (
    <SectionStyled>
      <div className='slide-img-left'>
        <div className='image-bar image-bar-1' />
        <div className='content'>
          <div className='left'>
            <img
              alt='Person jumping for joy.'
              className='image'
              src='/images/index/fallback/better-understand-1.jpg'
            />
          </div>
          <div className='right'>
            <h2>
              Better <span className='color-blue'>Understand</span> Your
              Consumers
            </h2>
            <div className='divider' />
            <p className='paragraph-1'>
              Where consumers are and where they’ve been not only reveal their
              day to day habits in the physical world, but also their values and
              who they aspire to&nbsp;be.
            </p>
            <p className='font-weight-bold'>
              99% of consumers shop in store with their mobile&nbsp;device.
            </p>
          </div>
        </div>
      </div>

      <div className='slide-img-left'>
        <div className='image-bar image-bar-2' />
        <div className='content'>
          <div className='right'>
            <h2>
              Better <span className='color-blue'>Understand</span> Your
              Consumers
            </h2>
            <div className='divider' />
            <p className='paragraph-1'>
              Where consumers are and where they’ve been not only reveal their
              day to day habits in the physical world, but also their values and
              who they aspire to&nbsp;be.
            </p>
            <p className='font-weight-bold'>
              99% of consumers shop in store with their mobile&nbsp;device.
            </p>
          </div>
          <div className='left'>
            <img
              alt='Person jumping for joy.'
              className='image'
              src='/images/index/fallback/better-understand-2.jpg'
            />
          </div>
        </div>
      </div>

      <div className='slide-img-left'>
        <div className='image-bar image-bar-3' />
        <div className='content'>
          <div className='left'>
            <img
              alt='Person jumping for joy.'
              className='image'
              src='/images/index/fallback/better-understand-3.jpg'
            />
          </div>
          <div className='right'>
            <h2>
              <span className='color-blue'>Influence</span> Consumer Decisions
            </h2>
            <div className='divider' />
            <p className='paragraph-1'>
              Deepening loyalty and taking consumer share, requires businesses
              to close the last-mile: The consumer emotions that
              drive&nbsp;impulse.
            </p>
            <p className='font-weight-bold'>
              Marketing efforts that engage consumer emotions are 2x
              more&nbsp;effective.
            </p>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}
