import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapContainerStyle = {
  width: '100%',
  height: '15rem'
}

const Map = () => {
  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null) //eslint-disable-line

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: process.env.GATSBY_MAPBOX_API,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-79.389641, 43.670891],
      zoom: 15
    })
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    setMap(map)

    // eslint-disable-next-line
    const marker = new mapboxgl.Marker({
      color: '#3232F5',
      draggable: false
    })
      .setLngLat([-79.389641, 43.670891])
      .addTo(map)

    return () => map.remove()
  }, [])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default Map
