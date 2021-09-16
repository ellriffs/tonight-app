import React, { useState } from 'react';
import '../styles/Nav.css';
import Logo from '../Assets/tonight-logo.png';
import { FaBars, FaLaptop, FaUser } from 'react-icons/fa';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className='nav-div'>
        <img className='Logo' src={Logo} alt='logo'></img>
        <h2 className='Menu' onClick={handleClick}>
          <FaBars />
        </h2>
      </div>
      <div className='Menu-List'>
        {menu ? (
          <ul className='Dropdown'>
            <li className='Account'>
              <FaUser />
            </li>
            <li className='Login'>
              <FaLaptop />
            </li>
          </ul>
        ) : null
        }
      </div>
    </>
  );
};

export default Nav;
