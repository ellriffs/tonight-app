import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = 'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com';

ReactDOM.render(
  <Auth0Provider
    audience={audience}
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Auth0Provider>,
  document.getElementById('root')
);
