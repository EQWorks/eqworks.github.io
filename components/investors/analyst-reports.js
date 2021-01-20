import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  max-width: ${({ theme }) => theme.width.article};
  margin: 0 auto;
  padding: 0 20px 40px 0;
  text-align: center;
  h2 {
    margin: 0 auto 20px auto;
    text-align: center;
  }
  .items {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      margin: 20px;
      .img-container {
        align-items: center;
        display: flex;
        height: 125px;
        justify-content: center;
        max-width: 150px;
        width: 100%;
      }
      img {
        margin: auto;
        max-width: 150px;
        width: 100%;
      }
      a {
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.copy.bold};
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.25s ease-out;
        &:hover {
          color: ${({ theme }) => theme.color.navBarLinksListHover};
        }
      }
    }
  }
`

export default function AnalystReports() {
  return (
    <SectionStyled>
      <h2>Analyst Reports</h2>
      <div className='items'>
        <div className='item'>
          <div className='img-container'>
            <img
              alt='Canaccord Genuity logo'
              src='/images/investors/fallback/analyst-reports-canaccord-genuity.png'
            />
          </div>
          <Link href='https://www.eqworks.com'>
            <a className='link' target='_blank'>
              View PDF
            </a>
          </Link>
        </div>
        <div className='item'>
          <div className='img-container'>
            <img
              alt='Echelon Wealth Investors logo'
              src='/images/investors/fallback/analyst-reports-echelon-wealth-partners.png'
            />
          </div>
          <Link href='https://www.eqworks.com'>
            <a className='link' target='_blank'>
              View PDF
            </a>
          </Link>
        </div>
        <div className='item'>
          <div className='img-container'>
            <img
              alt='eResearch logo'
              src='/images/investors/fallback/analyst-reports-eresearch.jpg'
            />
          </div>
          <Link href='https://www.eqworks.com'>
            <a className='link' target='_blank'>
              View PDF
            </a>
          </Link>
        </div>
      </div>
    </SectionStyled>
  )
}
