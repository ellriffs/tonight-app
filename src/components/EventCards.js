import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EventCard.css';
import PopupCard from './PopupCard';

const EventCards = ({
  listing,
  image,
  venue,
  address,
  date,
  time,
  tickets,
  location,
  addFavourite,
  id
}) => {
  return (
    <div className="eventCards">
      <div className="eventCards_listing">{listing}</div>
      <button
        type="button"
        onClick={() => addFavourite(id)}
        className="Favorite"
      >
        ♡ Favourite Event
      </button>
      <div className="eventCards_images">{image}</div>
      <div className="eventCards_venue">{venue}</div>
      <div className="eventCards_date">{date}</div>
      <div className="eventCards_time">{time}</div>
      <button className="eventCards_button" type="button">
        <PopupCard
          listing={listing}
          ticket={tickets}
          date={date}
          time={time}
          venue={venue}
          address={address}
          location={location}
        />
      </button>
    </div>
  );
};

EventCards.propTypes = {
  listing: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tickets: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
  address: PropTypes.objectOf(PropTypes.string).isRequired,
  addFavourite: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default EventCards;
