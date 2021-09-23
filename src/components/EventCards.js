<<<<<<< HEAD

import React from "react";
import PropTypes from "prop-types";
import '../styles/EventCard.css';
import PopupCard from "./PopupCard";

const EventCards = ({ listing, image, venue, address, date, time, tickets, location }) => {


  return (
    <div className="eventCards">

            <div className="eventCards_listing">{listing}</div>
            <div className="eventCards_images">{image}</div>
            <div className="eventCards_venue">{venue}</div>
            <div className="eventCards_date">{date}</div>
            <div className="eventCards_time">{time}</div>
            <button className="eventCards_button">
              <PopupCard 
                listing={listing}
                ticket={tickets}
                date={date}
                time={time}
                venue={venue}
                address={address}
                location={location}
              />
            </ button>

=======
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/EventCard.css';
import Popup from './PopupCard';

const EventCards = ({
  listing,
  image,
  venue,
  address,
  date,
  time,
  tickets,
  location
}) => {
  return (
    <div className="eventCards">
      <div className="eventCards_listing">{listing}</div>
      <div className="eventCards_images">{image}</div>
      <div className="eventCards_venue">{venue}</div>
      <div className="eventCards_date">{date}</div>
      <div className="eventCards_time">{time}</div>
      <button type="button" value="button" className="eventCards_button">
        <Popup
          listing={listing}
          ticket={tickets}
          date={date}
          time={time}
          venue={venue}
          address={address}
          location={location}
        />
      </button>
>>>>>>> 3f8f9acd70d57d6cfcd6a82b93ec65ca2ef27741
    </div>
  );
};

<<<<<<< HEAD
EventCards.propTypes = {
  listing: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tickets: PropTypes.string.isRequired,
  location: PropTypes.objectOf (PropTypes.number).isRequired,
  address: PropTypes.objectOf (PropTypes.string).isRequired
};
=======
// EventCards.propTypes = {
//   listing: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   venue: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   tickets: PropTypes.string.isRequired
// };
>>>>>>> 3f8f9acd70d57d6cfcd6a82b93ec65ca2ef27741

export default EventCards;
