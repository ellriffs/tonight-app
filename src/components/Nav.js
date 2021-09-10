import React, {useState} from 'react'
import '../styles/Nav.css'
import Logo from '../Assets/tonight-logo.png'
import {FaBars} from 'react-icons/fa';

const Nav = () => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <>
        <div div className="nav-div">
            <img className="Logo" src={Logo} alt="logo"></img>
            <h2 className="Menu" onClick={handleClick}><FaBars /></h2>
            </div>
            <div className="Menu-List">
            {
                menu ?
                <ul className="Dropdown">
                    <li>Account</li>
                </ul>
                :null
            }
        </div>
        </>
    )
}

export default Nav