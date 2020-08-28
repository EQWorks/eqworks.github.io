import Head from 'next/head'
import { useRouter } from 'next/router'

const ROUTES = [
  {
    title: 'Website',
    description:
      "Unleash the power of location behaviour data and step into the future of advertising. Leverage our first-party audience data to uncover deep insights about your consumers' digital journey. Actively engage with your audience by mapping real- world location behaviour into consumable and actionable data."
  },
  {
    path: '/',
    title: 'Location Behavior, Data Science & Marketing',
    description:
      "Unleash the power of location behaviour data and step into the future of advertising. Leverage our first-party audience data to uncover deep insights about your consumers' digital journey. Actively engage with your audience by mapping real- world location behaviour into consumable and actionable data."
  },
  {
    path: '/atom',
    title: 'ATOM',
    description:
      'Our proprietary self-serve programmatic solution and the most advanced location-based advertising tool - all rolled into one. Execute on desktop and mobile based on preset location-powered audiences or build your own from various geographical and demographic inputs.'
  },
  {
    path: '/browser-opt-out',
    title: 'Browser Opt-Out',
    description: 'Opt-out.'
  },
  {
    path: '/careers',
    title: 'Careers',
    description: 'Come work with us!'
  },
  {
    path: '/contact',
    title: 'Contact',
    description: "Let's get in touch."
  },
  {
    path: '/covid-19',
    title: 'Contact Tracing: Moving Towards a New Normal',
    description:
      'As the country races to curb the spread of COVID-19, governments everywhere have been looking for the best approaches to address this novel virus. Contact Tracing has quickly become one of the most topical, and potentially one of the most impactful methods of future containment and prevention.'
  },
  {
    path: '/investors',
    title: 'Investor Relations',
    description:
      'We track the entire mobile ecosystem on the continent, giving us the largest database of location behaviour data and insights in North America. Our proprietary technology overlays location behaviour data with machine learning algorithms and advanced AI solutions for unparalleled results.'
  },
  {
    path: '/locus',
    title: 'LOCUS',
    description:
      'Leverage LOCUS location behaviour data to determine and visually analyze your audiences. Overlay physical locations and demographical factors to create high-value custom audiences.'
  },
  {
    path: '/marketers',
    title: 'Marketers',
    description:
      'From media buying and targeted audience creation to campaign measurement, exploring your options elsewhere is no longer a requirement. We incorporate the value of location behaviour and the EQ data advantage into each step of the advertising process for maximum - and undeniable - results.'
  },
  {
    path: '/press-releases',
    title: 'Press Releases',
    description: 'EQ Works Press Releases.'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'EQ Works privacy policy.'
  }
]

export default function Header() {
  const pageInfo = (() => {
    const router = useRouter()
    const currentRoute =
      ROUTES.find(({ path }) => path === router.pathname) || ROUTES[0]
    return currentRoute
  })()

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='msapplication-TileColor' content='#2b5797' />
      <meta name='theme-color' content='#ffffff' />

      <title>{pageInfo.title} | EQ Works</title>
      <meta name='description' content={pageInfo.description}></meta>

      {/* google fonts */}
      <link
        crossOrigin='true'
        href='https://fonts.gstatic.com'
        rel='preconnect'
      />
      <link
        as='style'
        href='https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Montserrat:wght@400;500;700&display=swap'
        rel='preload'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Montserrat:wght@400;500;700&display=swap'
        rel='stylesheet'
      />

      {/* site icons */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />
    </Head>
  )
}
