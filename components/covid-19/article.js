import styled from 'styled-components'

import ImgWebP from '../shared/img-webp'

const SectionStyled = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.article};
  padding: 20px;
  article {
    a {
      word-wrap: break-word;
    }
    h2 {
      font-size: 2em;
      margin: 20px 0;
      @media ${({ theme }) => theme.breakpoint.sm} {
        font-size: 3em;
      }
    }
    p {
      color: ${({ theme }) => theme.color.greyMedium};
      margin: 0 0 20px 0;
    }
    ul {
      color: ${({ theme }) => theme.color.greyMedium};
    }
  }
  .header {
    align-items: center;
    display: flex;
    padding: 30px 0 0 0;
    img {
      max-width: 65px;
    }
    p {
      color: ${({ theme }) => theme.color.greyMedium};
      padding: 0 0 0 10px;
      @media ${({ theme }) => theme.breakpoint.sm} {
        padding: 0 0 0 20px;
      }
    }
  }
`

export default function Article() {
  return (
    <SectionStyled>
      <div className='header'>
        <ImgWebP
          alt='headshot of geoff rotstein'
          fallback='/images/covid-19/fallback/article.jpg'
          src='/images/covid-19/article.webp'
        />
        <p>
          Geoffrey Rotstein
          <br />
          President and CEO at EQ Works
        </p>
      </div>
      <article>
        <h2>Contact Tracing: Moving Towards a New Normal</h2>
        <p>
          As the country races to curb the spread of COVID-19, governments
          everywhere have been looking for the best approaches to address this
          novel virus. Contact Tracing has quickly become one of the most
          topical, and potentially one of the most impactful methods of future
          containment and prevention.
        </p>
        <p>
          The principle of Contact Tracing is not new – it is basic detective
          work to understand who an individual may have come in contact with in
          order to get ahead of the spread. What is new is the technology. The
          penetration of mobile devices significantly increases the efficiency,
          automation and impact of Contract Tracing as we try to move towards a
          “new normal”.
        </p>
        <p>
          More than 86% of all Canadian Households have a smart-phone making
          them extremely effective tools for Contact Tracing [1]:
        </p>
        <ul>
          <li>
            They closely mirror people’s activities and behaviours (the two are
            seldom apart)
          </li>
          <li>
            They contain sensors for location (geo-location and Bluetooth
            technology)
          </li>
        </ul>
        <p>
          These technological elements are universal to all smartphones, and if
          used properly, they can create safe, secure and powerful networks that
          Governments can leverage as readily as multinational technology
          companies. The most compelling attribute of mobile-phone-based Contact
          Tracing is that{' '}
          <span className='font-weight-bold'>
            benefits can be achieved without breaching the trust and privacy of
            the public
          </span>
          .
        </p>
        <p>
          EQ has been working with geospatial data at scale for a decade. We
          understand how groups of anonymous mobile devices move throughout the
          country and from location to location. All of our models and data are
          fully privacy compliant. Our team has studied the Contact Tracing
          solutions being deployed in other parts of the world with a{' '}
          <span className='font-weight-bold'>
            goal to maintain Canadian standards for societal norms and public
            trust while adopting international best practices
          </span>
          . We continue to push the conversation forward in Canada and have been
          working with and speaking to academics, not-for-profits, and various
          levels of government, ML and AI experts, and a number of other
          Canadian companies.
        </p>
        <p>
          Our technology and our expertise provide the initial footprint for a
          Contact Tracing application that is tested and ready. Our focus has
          been on{' '}
          <span className='font-weight-bold'>
            Proactive Prevention NOT Policing Enforcement
          </span>{' '}
          and our work is based on the following principles:
        </p>
        <ul>
          <li>
            <span className='font-weight-bold'>Prevention</span> – Given the
            right tools, stakeholders (e.g. public health officials, first
            responders, citizens) can take proactive, preventative action to
            flatten the curve.
          </li>
          <li>
            <span className='font-weight-bold'>Privacy</span> – No solution
            should force a trade-off between privacy and public health. Until
            COVID-19, few topics were of more concern than privacy, user
            control, and public confidence in the technologies we use in our
            daily lives.
          </li>
          <li>
            <span className='font-weight-bold'>Knowledge</span> – Armed with the
            right information, we believe individuals will act in accordance
            with their own best interest, and that of their families, friends,
            and communities.
          </li>
          <li>
            <span className='font-weight-bold'>Collaboration</span> –
            Broad-based solutions, require coalitions – government,
            not-for-profit institutes, other technology providers – in order to
            achieve critical mass.
          </li>
          <li>
            <span className='font-weight-bold'>Canadian</span> – We believe it
            is essential that Canada leverage made-in-Canada solutions.
          </li>
        </ul>
        <p className='font-weight-bold'>
          Contact Tracing technology and expertise resides in Canada now and can
          be used to help flatten the curve today.
        </p>
        <p>
          EQ has been working incredibly hard to help find a Canadian solution
          for Contact Tracing. Our whitepaper contains over a decade of
          experience working with geospatial data and analytics. It has been
          published and is available to everyone who is working towards a
          solution.{' '}
          <a href='https://whitepaper.flaat.io/' target='_blank'>
            https://whitepaper.flaat.io/
          </a>
        </p>
        <p className='footer'>
          Source for Smartphone Penetration:{' '}
          <a
            href='https://www.statista.com/statistics/1035928/canada-smartphone-ownership-rate-by-province/'
            target='_blank'
          >
            https://www.statista.com/statistics/1035928/canada-smartphone-ownership-rate-by-province/
          </a>
        </p>
      </article>
    </SectionStyled>
  )
}
