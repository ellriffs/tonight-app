import { useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';
import EventCards from './EventCards';

const Search = () => {
  const today = new Date();
  const Year = today.getFullYear();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const [select, setSelect] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [eventData, setEventData] = useState([]);

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const handleSearch = async () => {
    if (select === 'FutureEvents') {
      const endpoint = `https://gjehejz04g.execute-api.eu-west-2.amazonaws.com/${searchValue}`;
      const response = await axios.get(endpoint);
      setEventData(response.data._embedded.events);
    } else if (select === 'Tonight') {
      const endpoint = `https://gjehejz04g.execute-api.eu-west-2.amazonaws.com/${searchValue}&startDateTime=${Year}-${month}-${day}T00:00:00Z&endDateTime=${Year}-${month}-${day}T23:59:00Z`;
      const response = await axios.get(endpoint);
      setEventData(response.data._embedded.events);
    }
  };

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="search-container">
      <form className="search-form">
        <input
          onChange={handleInputChange}
          value={searchValue}
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
          onChange={handleSelect}
          onClick={handleSearch}
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
              image={listing.images[8].url}
              venue={listing._embedded.venues[0].name}
              date={listing.dates.start.localDate}
              time={listing.dates.start.localTime}
              tickets={
                <a target="#" href={listing.url}>
                  Buy Tickets
                </a>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
