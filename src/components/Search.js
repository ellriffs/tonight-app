import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Search.css'
import EventCards from './EventCards';


const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [eventData, setEventData] = useState([]);

  const handleSearch = () => {
    const token = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${token}&countryCode=GB&city=${searchValue}`
      )
      .then((res) => setEventData(res.data._embedded.events));
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };


  return (
        <div className="search-container">
        <form className="search-form">
        <input
          onChange={handleInputChange}
          value={searchValue}
          className="search-bar"
          type="text"
          placeholder="Enter Your City Here"
          autoFocus
          
        >
        </input>
        <button onClick={handleSearch} className="submit" type="button">
          WHATS ON?
        </button>
        </form>
        <div className="event-container-master">
      {eventData.map((listing) => (
        <div className="event-container">
          <EventCards 
            listing={listing.name}
            image={<img className="images" src={listing.images[8].url} alt="band" />}
            venue={listing._embedded.venues[0].name}
            date={listing.dates.start.localDate}
            time={listing.dates.start.localTime}
            tickets={<a target="#" href={listing.url}>
              Buy Tickets
          </a>}
          />
         </div>
        ))}
    </div>
    </div>
  );
};
export default Search;
