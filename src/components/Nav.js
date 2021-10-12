import React from 'react';
import '../styles/Nav.css';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../Assets/tonight-logo.png';

const Nav = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <div className="nav-div">
      <img className="Logo" src={Logo} alt="logo" />
      {!isLoading && !user && (
        <button type="button" className="Login" onClick={loginWithRedirect}>
          Login
        </button>
      )}
      {!isLoading && user && (
        <>
          <p className="Account-title"> My Account </p>
          <button type="button" className="Logout" onClick={() => logout()}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
