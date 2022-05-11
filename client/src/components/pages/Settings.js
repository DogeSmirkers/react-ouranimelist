import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <>
      <Container>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Settings </h1>
        <div className='anime-details'>
          <Row>
            <Col lg={3}>
              <Link to="/profile">
                <img src={require("../images/enteipfp.jpg")} alt="entei" width={ '100%' }/>
              </Link>
            </Col>
            <Col lg={9}>
              <h3> DogeSmirker_CoCo </h3>
              <br/><br/>
              <Link to='/coming-soon'><Button variant="outline-custom">Edit Username</Button></Link>
              <br/><br/>
              <Link to='/coming-soon'><Button variant="outline-custom">Change Password</Button></Link>
              <br/><br/>
              <Link to='/coming-soon'><Button variant="outline-danger">Delete Account</Button></Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
