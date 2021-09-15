import React, { useState, useEffect } from 'react';
import axios from 'axios'

import '../styles/listings.css';

const EventCard = () => {
  const [eventData, setEventData] = useState([]);
  const token = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';
    
  useEffect(() => {
    axios
    .get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${token}&countryCode=GB`)
    .then(res => setEventData(res.data._embedded.events)
    
    )}, [])

  return (
  <div>
    {eventData.map((listing) => {
      return (
         <ul className="listings">
         <li >{listing.name}</li>
         <div div className="images-align">
          <img className="images" src={listing.images[4].url} alt="band"/> 
          </div>
          <li>{listing._embedded.venues[0].name} </li>
          <li>{listing.dates.start.localDate}</li>
          <li >{listing.dates.start.localTime}</li>
          <a target="#" href={listing.url}>Buy Tickets</a>
          </ul>
        );
      })}
    </div>
  );
}

export default EventCard;
