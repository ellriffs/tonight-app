import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MapView.css';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '70vw',
  height: '40vh'
};

const MapView = ({ location, listing }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const center = {
    lat: parseFloat(location.latitude),
    lng: parseFloat(location.longitude)
  };

  return isLoaded ? (
    <div className="map-view">
      <GoogleMap mapContainerStyle={containerStyle} zoom={12} center={center}>
        <Marker key={listing} position={center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapView;

MapView.propTypes = {
  listing: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.number).isRequired
};
