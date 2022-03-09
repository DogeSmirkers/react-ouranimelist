import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const HorizontalLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
  );
  return (
    <>
      <Container className='main' fluid>
        <Container style={{  width: 1366, margin: 'auto', backgroundColor: 'rgb(255, 255, 255, 0.4)', boxShadow: 3 }}>
          {/* Search Bar and Login Box */}
          <Row className="justify-content-center">
            <Col xs={12} md={2} lg={{ span: 9 }} >
              <div className='bar'>
                <form className="searchBar" action="index.html" method="POST">
                    <input type="text" name=""placeholder="Search"/>
                    <input type="submit" formaction="search.html" name="" value="Go"/>
                </form>
              </div>
            </Col> 
            <Col xs={{ offset: 0 }} lg={{ offset: 0 }}>
              <div className='loginBox'>
                <form className="loginBox" action="index.html" method="POST">
                  <input type="text" name="" placeholder="Username"/>
                  <input type="password" name="" placeholder="Password"/>
                  <input type="submit" name="" value="Login"/>
                  <HorizontalLine color="#996666" />
                  <input type="button" name="" value="Sign Up"/>
                  <input type="button" name="" value="Forgot Password?"/>
                </form>
              </div>
            </Col> 
          </Row>

          {/* Nav Bar */}
          <Row className="justify-content-center" xs={2} style={{ marginTop: 30 }}>
            <Col sm={3}>
              <DropdownButton alignRight variant="outline-secondary" title="About Us" id="input-group-dropdown-1">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={3}>
              <DropdownButton variant="outline-secondary" title="Ranking" id="input-group-dropdown-1">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={3}>
              <DropdownButton variant="outline-secondary" title="Random Anime" id="input-group-dropdown-1">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={3}>
              <DropdownButton variant="outline-secondary" title="Profile" id="input-group-dropdown-1">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>

          {/* Image Carousel */}
          <Row style={{ marginTop: 30 }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ require('./images/gintama.jpg') }
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
                  src={ require('./images/k-on.jpg') }
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
                  src={ require('./images/blueperiod.jpg') }
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
          <Row style={{ marginTop: 30 }}>
            <h6>Your Personal Anime Suggestions</h6>
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

          {/* Shounen Suggestions */}
          <Row style={{ marginTop: 30 }}>
            <h6>Shounen Suggestions</h6>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
            </CardGroup>
          </Row>

          {/* Shoujo Suggestions */}
          <Row style={{ marginTop: 30 }}>
            <h6>Shoujo Suggestions</h6>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/naruto.jpg" />
              </Card>
            </CardGroup>
          </Row>

          {/* Footer */}
          <Row style={{ marginTop: 30, span: 12 }}>
            Designed and Managed by <a href="https://shibuyanobody.github.io/" target="_blank"><i>Team DogeSmirk</i> <img src="images/dogesmirk.jpg" alt="" height="16px" width="auto"/></a>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
