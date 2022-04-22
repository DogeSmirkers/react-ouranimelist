import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MostPopular() {
  return (
    <>
        <Container>
          <h1 style={{ textAlign: 'center' }}>Most Popular Anime</h1>
          <div className='random-anime'>
            <Row>
              <Col lg={3}>
                <Link to=""><img src={require("../images/naruto.jpg")} alt="Card image" width={ '100%' }/></Link>
              </Col>
              <Col lg={9}>
                <h4> Naruto Shippuden </h4>
                <p>Naruto Shippuden is the second series of Naruto anime that follows the titular hero on his quest to become Hokage. Unlike the first series, Naruto is now older and has new teachers to help him through his adventure.</p>
                <p>Episode count - 500</p> 
              </Col>
            </Row>
          </div>
      </Container>
    </>
    
  );
}
