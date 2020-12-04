import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: 700px;
  padding: 40px 20px;
  text-align: left;
  h2 {
    font-size: 2.5em;
    margin: 0 0 20px 0;
    max-width: 400px;
  }
  .content {
    color: ${({ theme }) => theme.color.greyMedium};
    margin: 0 0 20px 0;
    max-width: 600px;
  }
  .footer {
    font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.copy.bold};
    margin: 20px 0 0 0;
  }
  .subtitle {
    font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
    font-weight: ${({ theme }) => theme.font.copy.bold};
    font-size: 1.5rem;
    margin: 0 0 20px 0;
  }
`

export default function LocationBehaviour() {
  return (
    <SectionStyled>
      <h2>Make moves with location behaviour</h2>
      <p className='subtitle'>
        Work, home, groceries, dinner, Friday night drinks.
      </p>
      <p className='content'>
        As humans, we’re always on the move. What better way to predict purchase
        intent than leveraging where your customers go?
      </p>
      <p className='content'>
        EQ’s data advantage means you can access a winning combination of
        predictive analytics and location behaviour – tangible information about
        where your customers go in the real world.
      </p>
      <p className='footer'>Your move.</p>
    </SectionStyled>
  )
}
