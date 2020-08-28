const theme = {
  breakpoint: {
    xs: '(min-width: 576px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)'
  },
  color: {
    accentBlue: '#3542E4',
    black: '#1D1D1D',
    greyBorder: '#EEF1F6',
    greyDark: '#333333',
    greyMedium: '#777777',
    greyLight: '#BFBFBF',
    navBarLinksListHover: '#F95F51',
    white: '#FFFFFF'
  },
  font: {
    copy: {
      name: 'Hind',
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    title: {
      name: 'Montserrat',
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  height: {
    navBar: '55px',
    navBarMD: '94px',
    navBarScrolled: '58px'
  },
  width: {
    article: '800px',
    page: '1200px'
  },
  zIndex: {
    page404: 12,
    navBar: 11,
    footer: 10,
    pageContent: 5,
    indexHeroVideo: 1
  }
}

export default theme
