import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../Assets/tonight-logo.png';

const Nav = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <div className="nav-div">
      <Link to="/" className="Logo">
        <img src={Logo} alt="logo" />
      </Link>
      {!isLoading && !user && (
        <button type="button" className="Login" onClick={loginWithRedirect}>
          Login
        </button>
      )}
      {!isLoading && user && (
        <>
          <Link to="/account" className="Account-title">
            My Account
          </Link>
          <button type="button" className="Logout" onClick={() => logout()}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
