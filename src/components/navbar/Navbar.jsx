import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#investments">TLE Crypto OTC</a></p>
  <p><a href="#about">About Me</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="tle__navbar">
      <div className="tle__navbar-links">
        <div className="tle__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tle__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="tle__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="tle__navbar-menu_container scale-up-center">
            <div className="tle__navbar-menu_container-links">
              <Menu />

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar