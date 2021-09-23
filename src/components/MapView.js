import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import "../styles/MapView.css";
=======
import '../styles/MapView.css';
>>>>>>> 3f8f9acd70d57d6cfcd6a82b93ec65ca2ef27741
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};

const MapView = ({ location, listing }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBpKOgwMtEawFSofGW2rbGBgA3krFg5-p0'
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
<<<<<<< HEAD

MapView.propTypes= {
  listing: PropTypes.string.isRequired,
  location: PropTypes.objectOf (PropTypes.number).isRequired
};
=======
>>>>>>> 3f8f9acd70d57d6cfcd6a82b93ec65ca2ef27741
