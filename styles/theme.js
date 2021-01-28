const theme = {
  breakpoint: {
    xs: '(min-width: 576px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)'
  },
  breakpointValue: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200
  },
  breakpointVertical: {
    xs: '(min-height: 560px)'
  },
  color: {
    accentBlue: '#3542E4',
    black: '#1D1D1D',
    blue: '#3232F5',
    blueDark: '#1F0795',
    greyBorder: '#EEF1F6',
    greyDark: '#333333',
    greyMedium: '#616161',
    greyLight: '#BFBFBF',
    greyTextFooter: '#808080',
    navBarLinksListHover: '#F95F51',
    white: '#FFFFFF'
  },
  font: {
    name: 'Open Sans',
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700
  },
  height: {
    navBar: '55px',
    navBarMD: '94px',
    navBarScrolled: '58px'
  },
  spacing: {
    0: 4,
    1: 8,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
    10: 80,
    11: 88,
    12: 96
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
