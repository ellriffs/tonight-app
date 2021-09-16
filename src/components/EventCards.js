import React from "react";
import '../styles/EventCard.css'

const EventCards = ({ listing,image, venue, date, time, tickets }) => {
  return (
     
    <div className="eventCards">
            <div className="eventCards_listing">{listing}</div>
            <div div className="eventCards_images">{image}</div>
            <div className="eventCards_venue">{venue}</div>
            <div className="eventCards_date">{date}</div>
            <div className="eventCards_time">{time}</div>
            <div className="eventCards_tickets">{tickets}</div>
    </div>
   
  );
}

export default EventCards;