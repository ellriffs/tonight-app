import '../styles/Account.css';

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AccountPage = () => {
  const { user } = useAuth0();
  // eslint-disable-next-line no-console
  return (
    <div className="Account-Container">
      <div className="col-1">
        <h1 className="account-name">Welcome: {user.nickname}</h1>
        <img className="user-image" src={user.picture} alt="user-avatar" />
      </div>
    </div>
  );
};
export default AccountPage;
