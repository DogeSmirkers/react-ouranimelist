import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
  
  return (
    <>
      <Container fluid style={{ textAlign: 'center' }}>
            <h1 style={{ marginTop: '20px' }}>Coming Soon!</h1>
            <img className='center' src={require('../images/ouranimelist_icon_pog.png')} alt="ouranimelist icon of doge smirk in sakura blossom" height='50px'/><br/>
            <Link to='/error'> err </Link>
      </Container>
    </>
  );
}