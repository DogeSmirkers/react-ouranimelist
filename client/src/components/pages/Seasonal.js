import React from 'react';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function Seasonal() {
  return (
    <>
      <Container>
        <div className='suggestion-box'>
          <Row style={{ marginTop: 30 }}>
            <h4>Seasonal Anime</h4>
            <Stack direction="horizontal" gap={3}>
                <div className='suggestion-card'>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card"/></Link>
                  Naruto
                </div>
                <div className='suggestion-card'>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card"/></Link>
                  Naruto
                </div>
                <div className='suggestion-card'>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card"/></Link>
                  Naruto
                </div>
                <div className='suggestion-card'>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card"/></Link>
                  Naruto
                </div>
                <div className='suggestion-card'>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card"/></Link>
                  Naruto
                </div>
            </Stack>
          </Row>
        </div>
      </Container>
    </>
  );
}