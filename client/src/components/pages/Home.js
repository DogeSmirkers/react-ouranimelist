import React from 'react';
import '../../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: 30 }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ require('../images/gintama.jpg') }
                alt="Gintama"
              />
              <Carousel.Caption>
                <h3>Gintama</h3>
                <p>Action, Comedy, Sci-Fi</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ require('../images/k-on.jpg') }
                alt="K-on"
              />
              <Carousel.Caption>
                <h3>K-on</h3>
                <p>Comedy, Slice of Life</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ require('../images/blueperiod.jpg') }
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Blue Period</h3>
                <p>Drama, Slice of Life</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        {/* Personal Suggestions */}
        <div className='suggestion-box'>
          <Row style={{ marginTop: 5 }}>
            <h3>Your Personal Anime Suggestions</h3>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <Col xs={2} md={6} lg={{ span: 4 }} >
              <div className='personalSuggestion'></div>
            </Col>
            <Col xs={12} md={6} lg={{ span: 8 }}>
              <p>Odd Taxi is set in an anthropomorphic animal world and tells the narrative of Odokawa, a 41-year-old walrus taxi driver whose parents abandoned him while he was in elementary school, leaving him socially awkward. However, he generally has chats with various animal occupants while riding in his cab around Tokyo, where the story is set. Odokawa's interactions with these individuals lead to a series of riddles and acts of violence, including the disappearance of a high school student. The police have been following leads back to him as a result of the missing girl case, and both the yakuza and policemen are now on his tail.</p>
              <p><b>Original Run:</b> April 6, 2021 - June 29, 2021</p>
              <p><b>Episodes:</b> 13</p>
            </Col>
          </Row>
        </div>

        {/* Seasonal Anime */}
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

        {/* Top Anime of All Time */}
        <div className='suggestion-box'>
          <Row style={{ marginTop: 30 }}>
            <h4>Top Anime of All Time</h4>
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