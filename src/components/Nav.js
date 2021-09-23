import { useState } from 'react';
import '../styles/Nav.css';
import { FaBars, FaLaptop, FaUser } from 'react-icons/fa';
import Logo from '../Assets/tonight-logo.png';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="nav-div">
        <img className="Logo" src={Logo} alt="logo" />
        <h2
          className="Menu"
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === 'Space') {
              handleClick();
            }
          }}
        >
          <FaBars />
        </h2>
      </div>
      <div className="Menu-List">
        {menu ? (
          <ul className="Dropdown">
            <li className="Account">
              Account
              <FaUser />
            </li>
            <li className="Login">
              Login
              <FaLaptop />
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
