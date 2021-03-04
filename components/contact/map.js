import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'

const SectionStyled = styled.section`
  height: auto;
  iframe {
    display: block;
    width: 100vw;
  }
  .map {
    height: 300px;
    .mapboxgl-ctrl-logo {
      display: none;
    }
  }
`

export default function Section() {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

    const coordinates = [-79.389718, 43.670791]

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        attributionControl: false,
        center: coordinates,
        container: mapContainer.current,
        scrollZoom: false,
        style: 'mapbox://styles/mapbox/light-v10',
        zoom: 15
      })

      new mapboxgl.Marker().setLngLat(coordinates).addTo(map)

      map.on('load', () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map])

  return (
    <SectionStyled>
      <div className='map' ref={(el) => (mapContainer.current = el)} />
    </SectionStyled>
  )
}
