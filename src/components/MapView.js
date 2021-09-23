import React from 'react';
import PropTypes from 'prop-types';
import "../styles/MapView.css";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};

const MapView = ({ location, listing }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBpKOgwMtEawFSofGW2rbGBgA3krFg5-p0"
  })

  const center = {
    lat: parseFloat(location.latitude), 
    lng: parseFloat(location.longitude)
  };

  return isLoaded ? (
    <div className="map-view">
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={12}
          center={center}>
              <Marker key={listing} position={center}/>
      </GoogleMap>
    </div>
  ) : <></>
}

export default MapView;

MapView.propTypes= {
  listing: PropTypes.string.isRequired,
  location: PropTypes.objectOf (PropTypes.number).isRequired
};