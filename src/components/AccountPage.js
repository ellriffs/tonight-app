import '../styles/Account.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AccountPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [favourites, setFavourites] = useState([]);

  const fetchFavourites = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com'
      });
      const result = await axios.get(
        'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com/user',
        {
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        }
      );

      const tmActs = await Promise.all(
        result.data.Items.map(async (item) => {
          const { data } = await axios.get(
            `https://app.ticketmaster.com/discovery/v2/events/${item.ActID}.json?apikey=${process.env.REACT_APP_TM_API_KEY}`
          );
          console.log(data.name);
          return data;
        })
      );
      setFavourites(tmActs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <div className="Account-Container">
      <div className="col-1">
        <h1 className="account-name">Welcome: {user.nickname}</h1>
        <img className="user-image" src={user.picture} alt="user-avatar" />
      </div>
      {favourites && (
        <div>
          <h2>Favourite Acts</h2>
          <ul>
            {favourites.map((act) => {
              return <li key={act.id}>{act.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default AccountPage;
