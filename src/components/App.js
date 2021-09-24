import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import LandingPage from './landing-page';
import Nav from './Nav';
import Search from './Search';

function App() {
  const [eventData, setEventData] = useState([]);
  const [select, setSelect] = useState('');

  const handleSearch = async (searchValue) => {
    if (select === 'Tonight') {
      const endpoint = `https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com/${searchValue}`;
      const response = await axios.get(endpoint);
      setEventData(response.data._embedded.events);
    } else if (select === 'FutureEvents') {
      const endpoint = `https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com/${searchValue}?extendedDate=true`;
      const response = await axios.get(endpoint);
      setEventData(response.data._embedded.events);
    }
  };

  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Search
        handleSearch={handleSearch}
        eventData={eventData}
        select={select}
        setSelect={setSelect}
      />
    </div>
  );
}

export default App;
