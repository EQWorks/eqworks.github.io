import styled from 'styled-components'

const SectionStyled = styled.section`
  padding: ${({ theme }) => theme.spacing[5]}px 0;
  .content {
    background-color: ${({ theme }) => theme.color.blue};
    box-sizing: border-box;
    padding: ${({ theme }) => theme.spacing[3]}px;
  }
  .shape {
    box-sizing: border-box;
    height: calc(100vw * 0.066);
    /* height: 100px; */
    min-height: 25px;
    width: 100%;
    svg {
      fill: ${({ theme }) => theme.color.blue};
    }
  }
`

export default function LocationData() {
  return (
    <SectionStyled>
      <div className='shape'>
        <svg height='100%' preserveAspectRatio='none' width='100%' viewBox='0 0 100 100'>
          <polygon points='50 100, 100 0, 100 100, 0 100, 0 0' />
        </svg>
      </div>

      <div className='content'>
        <h2>Hello there</h2>
      </div>

      <div className='shape'>
        <svg height='100%' preserveAspectRatio='none' width='100%' viewBox='0 0 100 100'>
          <polygon points='0 0, 100 0, 50, 100' />
        </svg>
      </div>
    </SectionStyled>
  )
}
