import React from 'react';
import "../styles/MapView.css";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};

const MapView = ({ eventData }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBpKOgwMtEawFSofGW2rbGBgA3krFg5-p0"
  })

  const defaultCenter = {
    lat: parseFloat(eventData[0]._embedded.venues[0].location.latitude), 
    lng: parseFloat(eventData[0]._embedded.venues[0].location.longitude)
  };

  return isLoaded ? (
      <div className="map-view">
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={12}
          center={defaultCenter}>
         {
            eventData.map(item => {
              const location = {
                lat: parseFloat(item._embedded.venues[0].location.latitude), 
                lng: parseFloat(item._embedded.venues[0].location.longitude)}
              return (
        
              <Marker key={item.name} position={location}/>
              )
            })
         }
     </GoogleMap>
      </div>
  ) : <></>
}

export default MapView;