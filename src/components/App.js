import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import LandingPage from './landing-page';
import Nav from './Nav';
import Search from './Search';

function App() {
  const [eventData, setEventData] = useState([]);

  const handleSearch = async (searchValue) => {
    const endpoint = `https://gjehejz04g.execute-api.eu-west-2.amazonaws.com/${searchValue}`;

    const response = await axios.get(endpoint)

    setEventData(response.data._embedded.events);
  };

  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Search 
        handleSearch={handleSearch}
        eventData={eventData} 
      />
    </div>
  );
}

export default App;
