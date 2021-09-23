import React from "react";
import '../styles/EventCard.css';
import Popup from "./PopupCard";

const EventCards = ({ listing, image, venue, address, date, time, tickets, location }) => {
  return (
     
    <div className="eventCards">
            <div className="eventCards_listing">{listing}</div>
            <div className="eventCards_images">{image}</div>
            <div className="eventCards_venue">{venue}</div>
            <div className="eventCards_date">{date}</div>
            <div className="eventCards_time">{time}</div>
            <button className="eventCards_button">
              <Popup 
                listing={listing}
                ticket={tickets}
                date={date}
                time={time}
                venue={venue}
                address={address}
                location={location}
              />
            </ button>
    </div>
   
  );
}

export default EventCards;