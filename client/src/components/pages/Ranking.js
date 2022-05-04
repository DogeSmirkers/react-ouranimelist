import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Ranking() {
  return (
    <>
        <Container>
          <h1 style={{ textAlign: 'center' }}> Ranking </h1>
            <div className='anime-details'>
              <Row>
                <h3> Number 1 </h3>
                <Col lg={2}>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card image" width={ '100%' }/></Link>
                </Col>
                <Col lg={10}>
                  <h4> Naruto Shippuden </h4>
                  <p>Naruto Shippuden is the second series of Naruto anime that follows the titular hero on his quest to become Hokage. Unlike the first series, Naruto is now older and has new teachers to help him through his adventure.</p>
                  <p>Episode count - 500</p> 
                </Col>
              </Row>
              <Row style={{ marginTop: 30}}>
                <h3> Number 2 </h3>
                <Col lg={2}>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card image" width={ '100%' }/></Link>
                </Col>
                <Col lg={10}>
                  <h4> Naruto Shippuden </h4>
                  <p>Naruto Shippuden is the second series of Naruto anime that follows the titular hero on his quest to become Hokage. Unlike the first series, Naruto is now older and has new teachers to help him through his adventure.</p>
                  <p>Episode count - 500</p> 
                </Col>
              </Row>
              <Row style={{ marginTop: 30}}>
                <h3> Number 3 </h3>
                <Col lg={2}>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card image" width={ '100%' }/></Link>
                </Col>
                <Col lg={10}>
                  <h4> Naruto Shippuden </h4>
                  <p>Naruto Shippuden is the second series of Naruto anime that follows the titular hero on his quest to become Hokage. Unlike the first series, Naruto is now older and has new teachers to help him through his adventure.</p>
                  <p>Episode count - 500</p> 
                </Col>
              </Row>
              <Row style={{ marginTop: 30}}>
                <h3> Number 4 </h3>
                <Col lg={2}>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card image" width={ '100%' }/></Link>
                </Col>
                <Col lg={10}>
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
