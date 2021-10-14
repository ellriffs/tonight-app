import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './landing-page';
import Nav from './Nav';
import Search from './Search';
import AccountPage from './AccountPage';

function App() {
  const [eventData, setEventData] = useState([]);
  const [select, setSelect] = useState('');
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (event) => {
    const favoriteList = [...favorites, event];
    setFavorites(favoriteList);
  };

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
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <Search
              handleSearch={handleSearch}
              eventData={eventData}
              select={select}
              setSelect={setSelect}
              addFavorite={addFavorite}
            />
          </Route>
          <Route path="/account">
            <AccountPage addFavorite={addFavorite} favorites={favorites} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
