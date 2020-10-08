const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/cs-company-website' : '',
  basePath: isProd ? '/cs-company-website' : '',
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    FULLPAGE_JS_LICENSE_KEY: process.env.FULLPAGE_JS_LICENSE_KEY,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN
  }
}
