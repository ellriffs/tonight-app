import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import '../styles/Search.css';
import EventCards from './EventCards';

const Search = ({ handleSearch, eventData, setSelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const addFavourite = async (actIdSource) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com'
      });
      const result = await axios.post(
        'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com/user',
        {
          // somehow get the actID from the ticketmaster API for the favourited act

          actID: actIdSource
        },
        {
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        }
      );

      // eslint-disable-next-line no-console
      console.log(result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      {isAuthenticated && (
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
                  addFavourite={addFavourite}
                  listing={listing.name}
                  id={listing.id}
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
      )}
    </>
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
