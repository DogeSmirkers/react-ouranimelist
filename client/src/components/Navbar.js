import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='navbar'>
        {/* Website Title */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            OurAnimeList
        </Link>

        {/* Navigation Hamburger */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        {/* Leads nowhere. Used for spacing */}
        <li className='nav-item'>
          <Link
            to='/'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            
          </Link>
        </li>

        {/* Home Page Link */}
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        {/* About Us Page Link */}
        <li className='nav-item'>
          <Link
            to='/about-us'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
        </li>

        {/* Random Anime Page Link */}
        <li className='nav-item'>
          <Link
            to='/random-anime'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Random Anime
          </Link>
        </li>

        <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
        </li>

        {/* Ranking Page Link */}
        <li
          className='nav-item'
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
        >
          <Link
            to='/ranking'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <Dropdown renderMenuOnMount={true}>
              <Dropdown.Toggle id="dropdown-autoclose-true">
              Ranking
              </Dropdown.Toggle>
              <Dropdown.Menu renderMenuOnMount={true}>
                {/* Top Anime of All Time Page Link */}
                <Dropdown.Item>
                  <Link
                    to='/marketing'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Top Anime of All Time
                  </Link>
                </Dropdown.Item>

                {/* Most Popular Page Link */}
                <Dropdown.Item>
                  <Link
                      to='/most-popular'
                      className='nav-links'
                      onClick={closeMobileMenu}
                  >
                    Most Popular
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>

          </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li
            className='nav-item'
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              {/* Ranking <i className='fas fa-caret-down' /> */}
              <Dropdown renderMenuOnMount={true}>
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  <Link
                    to='/profile'
                    className='nav-links'
                    onClick={closeMobileMenu}>
                    Profile
                  </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu renderMenuOnMount={true}>
                  <Dropdown.Item>
                    <Link
                    to='/settings'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                      Settings
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;