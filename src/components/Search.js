import React, { useState } from 'react';
import '../styles/Search.css'
import EventCards from './EventCards';

const Search = ({ handleSearch, eventData }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  console.log(eventData);
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
        />
        <button onClick={() => handleSearch(searchValue)} className="submit" type="button">
          WHATS ON?
        </button>
      </form>
      <div className="event-container-master">
        { eventData.map((listing) => (
            <div className="event-container">
              <EventCards 
                listing={listing.name}
                image={<img className="images" src={listing.images[8].url} alt="band" />}
                venue={listing._embedded.venues[0].name}
                address={listing._embedded.venues[0]}
                date={listing.dates.start.localDate}
                time={listing.dates.start.localTime}
                tickets={<a target="#" href={listing.url}>Buy Tickets</a>}
                location={listing._embedded.venues[0].location}
              />
          </div>
          ))
        }
      </div>
    </div>
  );
};
export default Search;
