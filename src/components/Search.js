import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Search.css'
import EventCards from './EventCards';


const Search = () => {
  const [select, setSelect] = useState("")
  const [searchValue, setSearchValue] = useState('');
  const [eventData, setEventData] = useState([]);

  const handleSelect = (event) => {
    setSelect(event.target.value)
    console.log(select)
    }
  

  const handleSearch = async () => {
  if(select === "City") {
  const endpoint = `https://gjehejz04g.execute-api.eu-west-2.amazonaws.com/${searchValue}`;
  const response = await axios.get(endpoint)
  setEventData(response.data._embedded.events);

  } else if (select === "Postcode") {
    const postalCode = searchValue
    const token = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0"
    axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${token}&postalCode=${postalCode}&locale=*&countryCode=*`)
      .then((res) => setEventData(res.data._embedded.events))
  }

  
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
          placeholder="Enter your Search Here"
          autoFocus
          >
        </input>
        <select onChange={handleSelect} className="select-box">
          <option selected disabled hidden>Search By...</option>
          <option  value="City">City</option>
          <option value="Postcode">Postcode</option>
          </select>
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
