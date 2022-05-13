import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';


export default function Error() {
  
  return (
    <>
      <Container fluid style={{ textAlign: 'center' }} className='error'>
            {/* <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>Error!</h1> */}
            <Row>
                <Col className='error-text-left' lg={5}>4</Col>
                <Col><img src={require('../images/ouranimelist_icon_pog.png')} alt="ouranimelist icon of doge smirk in sakura blossom"/><br/></Col>
                <Col className='error-text-right' lg={5}>4</Col>
            </Row>
            <h1 style={{ marginTop: '20px', marginBottom: '20px' }}> What you are looking for is not here (Sadge)</h1>
      </Container>
    </>
  );
}