import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const SectionStyled = styled.section`
  color: ${({ theme }) => theme.color.black};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page};
  padding: 20px;
  @media ${({ theme }) => theme.breakpoint.md} {
    display: flex;
  }
  .left {
    @media ${({ theme }) => theme.breakpoint.md} {
      background-color: ${({ theme }) => theme.color.white};
      box-sizing: border-box;
      height: 100%;
      position: sticky;
      position: -webkit-sticky;
      padding: 0 10px;
      top: ${({ theme }) => theme.height.navBarScrolled};
      width: 33%;
    }
    p {
      color: ${({ theme }) => theme.color.greyLight};
      margin: 0 0 20px 0;
    }
    .title {
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.copy.bold};
      font-size: 1.2em;
    }
  }
  .right {
    @media ${({ theme }) => theme.breakpoint.md} {
      box-sizing: border-box;
      padding: 0 10px;
      width: 66%;
    }
    form {
      color: ${({ theme }) => theme.color.greyLight};
      button {
        background-color: ${({ theme }) => theme.color.white};
        border: 2px solid ${({ theme }) => theme.color.black};
        cursor: pointer;
        font-weight: ${({ theme }) => theme.font.copy.bold};
        margin: 0 0 20px 0;
        padding: 10px 20px;
        text-transform: uppercase;
        transition: all 0.25s ease-out;
        &:hover {
          background-color: ${({ theme }) => theme.color.black};
          color: ${({ theme }) => theme.color.white};
        }
      }
      input {
        border: 1px solid ${({ theme }) => theme.color.greyLight};
        border-radius: 5px;
        box-sizing: border-box;
        margin: 0 0 30px 0;
        padding: 15px;
        width: 100%;
      }
      label {
        display: block;
      }
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      .item {
        padding: 40px 10px;
        width: 100%;
        @media ${({ theme }) => theme.breakpoint.md} {
          padding: 40px 0;
        }
        a {
          color: ${({ theme }) => theme.color.black};
          text-decoration: none;
          transition: all 0.25s ease-out;
          &:hover {
            color: ${({ theme }) => theme.color.navBarLinksListHover};
          }
        }
        p {
          color: ${({ theme }) => theme.color.greyLight};
        }
        .subtext {
          font-weight: ${({ theme }) => theme.font.copy.bold};
        }
        .subtitle {
          color: ${({ theme }) => theme.color.black};
          font-weight: ${({ theme }) => theme.font.copy.bold};
          margin: 0 0 20px 0;
        }
      }
    }
    .title {
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.copy.bold};
      font-size: 1.2em;
      margin: 0 0 10px 0;
    }
  }
`

export default function Section() {
  const [status, setStatus] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <SectionStyled>
      <div className='left'>
        <p className='title'>EQ Works</p>
        <p>
          <b>Location behaviour data is everything</b> - especially in today's
          digital age.
        </p>
        <p>
          To see how we can impact your bottom line with our offering, get in
          touch - we would love to hear from you.
        </p>
        <p className='title'>Toronto Office</p>
        <p>
          1235 Bay Street, Suite 401
          <br />
          Toronto, ON M5R 3K4
        </p>
      </div>
      <div className='right'>
        <p className='title'>Drop us a line</p>
        <form
          action='https://formspree.io/mqkyorzl'
          method='POST'
          onSubmit={submitForm}
        >
          <label>Your name (required)</label>
          <input name='name' required type='text' />
          <label>Email (required)</label>
          <input name='email' required type='email' />
          <label>Subject</label>
          <input name='subject' required type='text' />
          <label>Your Message</label>
          <input cols='50' name='message' required rows='4' type='textarea' />
          <button>Send Your Message</button>
          {status === 'SUCCESS' && (
            <p>Thank you for your message. It has been sent.</p>
          )}
          {status === 'ERROR' && (
            <p>Ooops! There was an error. Please try again</p>
          )}
        </form>
        <div className='items'>
          <div className='item'>
            <p className='subtitle'>Sales</p>
            <Link href='mailto:sales@eqworks.com'>
              <a className='link' target='_blank'>
                sales@eqworks.com
              </a>
            </Link>
          </div>
          <div className='item'>
            <p className='subtitle'>Media Inquiries</p>
            <Link href='mailto:press@eqworks.com'>
              <a target='_blank'>press@eqworks.com</a>
            </Link>
          </div>
          <div className='item'>
            <p className='subtitle'>Investor Relations</p>
            <p className='subtext'>Peter Kanniah</p>
            <Link href='mailto:peter.kanniah@eqworks.com'>
              <a target='_blank'>peter.kanniah@eqworks.com</a>
            </Link>
            <p>416 260 4326</p>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}
