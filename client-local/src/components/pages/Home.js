import React from 'react';
import '../../App.css';
import { Row, Container, Carousel } from 'react-bootstrap';
import Seasonal from './Seasonal'
import TopAnimeAllTime from './TopAnimeAllTime';
import PersonalSuggestion from './PersonalSuggestion';

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

        <PersonalSuggestion />
        
        <Seasonal/>

        <TopAnimeAllTime />
        
      </Container>
    </>
  );
}