import React from 'react';
import '../../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <>
      <Container className="profile">
        <h1 style={{ textAlign: 'center' }}> Profile </h1>
        <div className='random-anime'>
          <Row>
            <Col lg={3}>
              <img src={require("../images/enteipfp.jpg")} alt="Card image"/>
            </Col>
            <Col lg={6}>
              <h3> DogeSmirker_CoCo </h3>
              <p> Joined November 6</p>
              <p> "Anime was a mistake" </p>
            </Col>
            <Col lg={3}>
              <Link to='/Settings'><Button variant="outline-custom">Edit Profile</Button></Link>
              <br/><br/>
              <Button variant="outline-custom">Add Anime</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <Col sm={12} lg={4} className='profile-column'>
              <h4> Favourites </h4>
              <Link to=""><p> Naruto </p></Link>
              <Link to=""><p> Your name </p></Link>
            </Col>
            <Col sm={12} lg={4} className='profile-column'>
              <h4> Top 5 </h4>
              <Link to=""><p> Pokemon </p></Link>
              <Link to=""><p> Entei </p></Link>
              <Link to=""><p> Entei </p></Link>
              <Link to=""><p> Entei </p></Link>
              <Link to=""><p> Entei </p></Link>
            </Col>
            <Col sm={12} lg={4}>
              <h4> Currently Watching </h4>
              <Link to=""><p> Blue Period </p></Link>
              <Link to=""><p> Komi-san wa , Comyushou desu </p></Link>
              <Link to=""><p> Platinum End </p></Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}