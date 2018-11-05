// styles/email.js

import ui from 'universal/styles/ui'
import {buttonShadow} from 'universal/styles/elevation'

export const emailPrimaryButtonStyle = {
  backgroundColor: ui.palette.warm,
  backgroundImage: ui.gradientWarm,
  borderRadius: '4em',
  boxShadow: buttonShadow,
  color: '#ffffff',
  cursor: 'pointer',
  display: 'block',
  fontFamily: ui.emailFontFamily,
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  margin: '0 auto',
  padding: '18px 0',
  textAlign: 'center',
  textDecoration: 'none',
  width: '128px'
}

export const emailLinkStyle = {
  color: ui.palette.blue,
  fontFamily: ui.emailFontFamily,
  fontSize: '13px',
  textDecoration: 'underline'
}

export const headCSS = `
  table[class=body] .responsiveEmailTest {
    color: red !important;
  }
  @media only screen and (max-width: 620px) {
    table[class=body] .container {
      padding: 0 !important;
      width: 100% !important;
    }

    table[class=body] .responsiveEmailTest {
      color: green !important;
    }
  }
`