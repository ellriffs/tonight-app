/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import MapView from './MapView';
import '../styles/PopupCard.css';

const PopupCard = ({
  listing,
  date,
  time,
  venue,
  address,
  ticket,
  location
}) => {
  return (
    <Popup
      trigger={
        <button className="trigger-button" type="button">
          More Info
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="popup">
          <button className="close" onClick={close} type="button">
            &times;
          </button>
          <div className="header"> {listing} </div>
          <div className="content">
            <p>Date: {date}</p>
            <p>Time Start: {time}</p>
            <p>Venue: {venue}</p>
            <p>
              Address: {address.address.line1}, {address.city.name}
              {address.postalCode}
            </p>

            {address.accessibleSeatingDetail !== undefined
              ? `Accessibility: ${address.accessibleSeatingDetail}`
              : 'Accessibility: Apologies, no accessibility information'}

            <div className="buy-tickets">{ticket}</div>
            {location && <MapView location={location} listing={listing} />}
          </div>
          <div className="actions">
            <button
              className="close-button"
              onClick={() => {
                close();
              }}
              type="button"
            >
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

// PopupCard.PropTypes = {
//   listing: PropTypes.string.isRequired,
//   date: PropTypes.number.isRequired,
//   time: PropTypes.number.isRequired,
//   venue: PropTypes.string.isRequired,
//   address: PropTypes.shape({
//     address: PropTypes.shape({
//       line1: PropTypes.string
//     }).isRequired,
//     city: PropTypes.shape({
//       name: PropTypes.string
//     }).isRequired,
//     postalCode: PropTypes.string,
//     accessibleSeatingDetail: PropTypes.string
//   }).isRequired,
//   ticket: PropTypes.string.isRequired,
//   location: PropTypes.objectOf(PropTypes.number).isRequired
// };

export default PopupCard;
