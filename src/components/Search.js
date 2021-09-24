import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';
import EventCards from './EventCards';

const Search = ({ handleSearch, eventData, setSelect }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div className="search-container">
      <form className="search-form">
        <input
          onChange={handleInputChange}
          value={searchValue}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch(searchValue);
              setSearchValue('');
            }
          }}
          className="search-bar"
          type="text"
          placeholder="Enter your Search Here"
        />
        <select onChange={handleSelect} className="select-box">
          <option selected disabled hidden>
            Search By...
          </option>
          <option value="Tonight">Tonight</option>
          <option value="FutureEvents"> Get Future Events </option>
        </select>
        <button
          onClick={() => handleSearch(searchValue)}
          className="submit"
          type="button"
        >
          WHATS ON?
        </button>
      </form>
      <div className="event-container-master">
        {eventData.map((listing) => (
          <div className="event-container">
            <EventCards
              listing={listing.name}
              image={
                <img
                  className="images"
                  src={listing.images[8].url}
                  alt="band"
                />
              }
              venue={listing._embedded.venues[0].name}
              address={listing._embedded.venues[0]}
              date={listing.dates.start.localDate}
              time={listing.dates.start.localTime}
              tickets={
                <a target="#" href={listing.url}>
                  Buy Tickets
                </a>
              }
              location={listing._embedded.venues[0].location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  eventData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
    PropTypes.objectOf(PropTypes.number)
  ]).isRequired,
  setSelect: PropTypes.func.isRequired
};
