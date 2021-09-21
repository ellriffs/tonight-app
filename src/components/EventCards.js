import '../styles/EventCard.css';
import PropTypes from 'prop-types';

const EventCards = ({ listing, image, venue, date, time, tickets }) => {
  return (
    <div className="eventCards">

      <div className="eventCards_listing">{listing}</div>
      <img className="images" src={image} alt="" />
      <div className="eventCards_venue">{venue}</div>
      <div className="eventCards_date">{date}</div>
      <div className="eventCards_time">{time}</div>
      <div className="eventCards_tickets">{tickets}</div>
    </div>
  );
};

EventCards.propTypes = {
  listing: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tickets: PropTypes.string.isRequired
};

export default EventCards;
