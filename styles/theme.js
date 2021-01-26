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
    bold: 700,
  },
  height: {
    navBar: '55px',
    navBarMD: '94px',
    navBarScrolled: '58px'
  },
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 32,
    5: 64,
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
