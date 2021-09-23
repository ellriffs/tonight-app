import React from 'react';
import Popup from 'reactjs-popup';
import MapView from './MapView';
import '../styles/PopupCard.css';

export default ({ listing, date, time, venue, address, ticket, location }) => (
  <Popup
    trigger={
      <button type="button" className="trigger-button">
        {' '}
        More Info{' '}
      </button>
    }
    modal
    nested
  >
    {(close) => (
      <div className="popup">
        <button type="button" className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {listing} </div>
        <div className="content">
          <p>Date: {date}</p>
          <p>Time Start: {time}</p>
          <p>Venue: {venue}</p>
          <p>
            Address: {address.address.line1}, {address.city.name}{' '}
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
            type="button"
            className="close-button"
            onClick={() => {
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);
