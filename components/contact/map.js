import styled from 'styled-components'

const SectionStyled = styled.section`
  height: auto;
  iframe {
    display: block;
    width: 100vw;
  }
`

export default function Section() {
  return (
    <SectionStyled>
      <iframe
        frameborder={0}
        height={500}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.90781640506!2d-79.39187304893944!3d43.67088697901827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34afa0cbf83b%3A0x156240b075d4225b!2sEQ%20Works!5e0!3m2!1sen!2sca!4v1598386914310!5m2!1sen!2sca'
      ></iframe>
    </SectionStyled>
  )
}
