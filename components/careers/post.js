import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 20px;
  h2 {
    font-size: 3em;
    margin: 10px auto 20px auto;
    text-align: center;
  }
  h3 {
    font-size: 2em;
    margin: 20px auto;
  }
  hr {
    border: 0.001em solid ${({ theme }) => theme.color.greyLight};
    opacity: 0.33;
  }
  p {
    color: ${({ theme }) => theme.color.greyLight};
    margin: 0 0 20px 0;
  }
  ul {
    color: ${({ theme }) => theme.color.greyLight};
    margin: 0 0 20px 0;
  }
`

export default function Post() {
  return (
    <SectionStyled>
      <h2>Careers</h2>
      <hr />
      <div className='posting'>
        <h3>Junior Account Manager</h3>
        <p>SUMMARY</p>
        <p>
          EQ Works is growing! We are looking for an Account Manager to join our
          team. An EQ Works Account Manager aims to ensure the overall success
          of client engagement, provides support to the operations team, and
          assists in the setup, reporting and management of media plan
          executions.
        </p>
        <p>ROLE AND RESPONSIBILITIES</p>
        <ul>
          <li>Build positive relationships with clients</li>
          <li>Act as day to day contact with clients</li>
          <li>
            Ensure campaign assets are collected and team deadlines are met
          </li>
          <li>Work to understand the client’s business and online planning</li>
          <li>Assist in the strategy and development of media plans</li>
          <li>Administer and review all campaigns in flight</li>
          <li>Create, review and coordinate client reporting</li>
        </ul>
        <p>QUALIFICATIONS AND EDUCATION REQUIREMENTS</p>
        <ul>
          <li>Strong customer service skills</li>
          <li>Demonstrated time management and multitasking abilities</li>
          <li>Solid Microsoft suite skills (Excel, Powerpoint)</li>
          <li>Excellent verbal and written communication skills</li>
          <li>Detail-oriented and able to meet tight deadlines</li>
        </ul>
        <p>ADDITIONAL NOTES</p>
        <p>Full Benefits Coverage Including Medical, Dental and Vision</p>
      </div>
      <hr />
    </SectionStyled>
  )
}
