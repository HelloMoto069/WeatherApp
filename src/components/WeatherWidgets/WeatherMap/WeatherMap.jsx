import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const WeatherMap = ({ lon, lat, city }) => {
  const layer = 'precipitation_new';
  const apiKey = 'e59a1482d0be237c1680d29670faf7ca';
  const url = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`;

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer
      center={[lon, lat]}
      zoom={1}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer attribution="&copy; OpenWeatherMap" url={url} />
      <Marker position={[lon, lat]}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};
