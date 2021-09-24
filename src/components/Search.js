import { useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';
import EventCards from './EventCards';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [eventData, setEventData] = useState([]);

  const handleSearch = async () => {
    const endpoint = `https://gjehejz04g.execute-api.eu-west-2.amazonaws.com/${searchValue}`;

    const response = await axios.get(endpoint);

    setEventData(response.data._embedded.events);
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
              setSearchValue('');
            }
          }}
          className="search-bar"
          type="text"
          placeholder="Enter Your City Here"
        />
        <button
          onClick={() => {
            handleSearch();
            setSearchValue('');
          }}
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
