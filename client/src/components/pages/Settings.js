import React from 'react';
// import '../../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <>
      <Container>
          <h1 style={{ textAlign: 'center' }}>Settings </h1>
          <div className='random-anime'>
            <Row>
              <Col lg={3}>
                <Link to="">
                  {/* <img src={require("../images/naruto.jpg")} alt="Card image" width={ '100%' }/> */}
                  Profile Image
                </Link>
              </Col>
              <Col lg={9}>
                <h3> DogeSmirker_CoCo </h3>
                <br/><br/>
                <Button variant="outline-custom">Edit Username</Button>
                <br/><br/>
                <Button variant="outline-custom">Change Password</Button>
                <br/><br/>
                <Button variant="outline-danger">Delete Account</Button>
              </Col>
            </Row>
          </div>
      </Container>
    </>
  );
}
