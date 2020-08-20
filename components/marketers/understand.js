import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 40px 20px 20px 20px;
  @media ${({ theme }) => theme.breakpoint.sm} {
    display: flex;
    flex-wrap: wrap;
  }
  p {
    margin: 0 0 20px 0;
    @media ${({ theme }) => theme.breakpoint.sm} {
      box-sizing: border-box;
      padding: 20px;
      width: 50%;
    }
  }
  h2 {
    margin: 0 0 20px 0;
    @media ${({ theme }) => theme.breakpoint.sm} {
      padding: 0 0 0 20px;
      width: 100%;
    }
  }
`

const Understand = () => {
  return (
    <SectionStyled>
      <h2>Understand, apply, and target.</h2>
      <p>
        We partner with brands to understand the objectives of every marketing
        campaign and utilize our proprietary location behaviour data and
        algorithms to identify and create the most effective and impactful
        targeted audience segments.
      </p>
      <p>
        These audience segments are then used to execute targeted media buying –
        whether through your preferred media partner or through Atom, our
        proprietary in-house media buying platform.
      </p>
    </SectionStyled>
  )
}

export default Understand
