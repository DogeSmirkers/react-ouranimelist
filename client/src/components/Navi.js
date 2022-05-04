import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navi.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from './Modal';
import { GlobalStyle } from './../globalStyles';
import { Button, NavDropdown} from 'react-bootstrap';

function Navi() {
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
        <li className='nav-item'>
          <Link
            to='/ranking'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <NavDropdown title="Ranking" renderMenuOnMount={true} style={{ display: 'inline-flex' }}>
              <Dropdown.Toggle id="dropdown-autoclose-true">
              {/* Ranking */}
              </Dropdown.Toggle>
                {/* Top Upcoming Anime Page Link */}
                <NavDropdown.Item>
                  <Link
                    to='/top-upcoming'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Top Upcoming
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
          </li>
          <li className='nav-item'>
          <Link
            to='/profile'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <NavDropdown title="Profile" renderMenuOnMount={true} style={{ display: 'inline-flex' }}  >
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
          {/* Login Modal */}
          <li className='nav-item'>
            <Button onClick={openModal}>Login</Button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navi;