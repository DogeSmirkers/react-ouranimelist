import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styled from 'styled-components';
import { Modal } from './Modal';
import { GlobalStyle } from './../globalStyles';
import { Button, NavDropdown} from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

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

        {/* Ranking Page Link */}
        <li className='nav-item'
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
        >
          <Link
            to='/ranking'
            className='nav-links'
            onClick={closeMobileMenu}
          >
          <NavDropdown title="Ranking" renderMenuOnMount={true}>
            <Dropdown.Toggle id="dropdown-autoclose-true">
            {/* Ranking */}
            </Dropdown.Toggle>
              {/* Top Anime of All Time Page Link */}
              <NavDropdown.Item>
                <Link
                  to='/topanime'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Top Anime of All Time
                </Link>
              </NavDropdown.Item>

              {/* Most Popular Page Link */}
              <NavDropdown.Item>
                <Link
                    to='/most-popular'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  Most Popular
                </Link>
              </NavDropdown.Item>
          </NavDropdown>

          </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className='nav-item'        >
          <Link
            to='/profile'
            className='nav-links'
            onClick={closeMobileMenu}
          >
          <NavDropdown title="Profile" renderMenuOnMount={true}>
            <Dropdown.Toggle id="dropdown-autoclose-true">
            {/* Profile */}
            </Dropdown.Toggle>
              {/* Settings Page Link */}
              <NavDropdown.Item>
                <Link
                  to='/Settings'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Settings
                </Link>
              </NavDropdown.Item>
          </NavDropdown>

          </Link>
          </li>
          {/* <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li> */}
          <li className='nav-item'>
          {/* <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
            Login
          </Link> */}
          {/* <Link className='nav-links' onClick={() =>{closeMobileMenu(); showModal();}}>
            Login
            <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
          </Link> */}
          <Button onClick={openModal}>Login</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;