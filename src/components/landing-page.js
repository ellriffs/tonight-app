import React, { useState } from 'react';
import axios from 'axios';
import MainText from '../Assets/tonight-main.png';
import '../styles/landing-page.css';

const LandingPage = () => {
  const [searchValue, setSearchValue] = useState('');
  

  const handleSearch = () => {
    const token = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${token}&countryCode=GB&city=${searchValue}`
      )
      .then((res) => console.log(res.data._embedded.events));
    };
    const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  
  };

  return (
    <div className="landing-page-container">
      <h3 className="WhatsOn">WHATS ON..</h3>
      <img className="tonight-text" src={MainText} alt="tonight-logo"></img>
      <form className="search-form">
        <input
          onChange={handleInputChange}
          value={searchValue}
          className="search-bar"
          type="text"
          placeholder="Enter Your City Here"
          autoFocus
        ></input>
        <button onClick={handleSearch} className="submit" type="button">
          WHATS ON?
        </button>
      </form>
    </div>
  );
};
export default LandingPage;
