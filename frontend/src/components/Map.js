import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXhlbGxiZW4iLCJhIjoiY2pneHc0a2o2MGlkcTJ3bGxtdHB1cXoycSJ9.BRtJfvAR2e_5nA3irA2KSg';

let mrk = null;

export default function MapBox({ onCoordinatesChange }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    // Add marker on dragend
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: true,
      placeholder: 'Search for a location',
      position: 'top-left',
    });
    geocoder.on('result', (e) => {
      console.log(e);
      setLng(e.result.geometry.coordinates[0]);
      setLat(e.result.geometry.coordinates[1]);
      onCoordinatesChange({
        lat: e.result.geometry.coordinates[1],
        lng: e.result.geometry.coordinates[0],
      });
      console.log(e.result.geometry.coordinates);

      if (mrk) {
        mrk.remove();
      }
    });

    // Add search box
    map.current.addControl(geocoder);
  }, []);

  useEffect(() => {
    // Map on click add marker only
    map.current.on('click', (e) => {
      // map.current.removeLayer('marker');
      // map.current.removeSource('marker');
      if (mrk) {
        mrk.remove();
      }

      const marker = new mapboxgl.Marker({
        draggable: true,
        color: '#ff0000',
      });
      marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
      onCoordinatesChange({
        lat: e.lngLat.lat,
        lng: e.lngLat.lng,
      });
      marker.addTo(map.current);
      mrk = marker;
      setLng(e.lngLat.lng);
      setLat(e.lngLat.lat);
      console.log(e.lngLat);
    });
    // Remove marker on dragend
    map.current.on('dragend', (e) => {
      map.current.removeLayer('marker');
      map.current.removeSource('marker');
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div
        styles={{
          backgroundColor: 'rgba(35, 55, 75, 0.9)',
          color: '#fff',
          padding: '6px 12px',
          fontFamily: 'monospace',
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          margin: '12px',
          borderRadius: '4px',
        }}
      ></div>
      <div ref={mapContainer} style={{ height: '400px' }} />
    </div>
  );
}
