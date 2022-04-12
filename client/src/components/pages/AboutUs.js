import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import '../../App.css';
import Marquee from 'react-fast-marquee';

export default function AboutUs() {
  return (
    <>
      <div className='bgColor'>
        <Marquee speed={80} gradientColor='none'>
          <h1>We are Team DogeSmirk <img src={require('../images/dogesmirk.jpg')} height='30px' /> </h1>
        </Marquee>
        <br/>
      </div>
      <Container>
      <Row>
        <Col>
          <Marquee speed={45} gradientColor='none' direction='vertical'>
            <h1>
              <img src={require('../images/wind.png')} height='50px' />
            </h1>
          </Marquee>
          <div><br/></div>
          <Marquee speed={55} gradientColor='none' direction='vertical'>
            <h1>
              <img src={require('../images/wind.png')} height='50px' />
            </h1>
          </Marquee>
          <div><br/></div>
          <Marquee speed={50} gradientColor='none' direction='vertical'>
            <h1>
              <img src={require('../images/wind.png')} height='50px' />
            </h1>
          </Marquee>
        </Col>
        <Col>
          <img className='center' src={require('../images/ouranimelist_icon_pog.png')} height='250px'/><br/>
        </Col>  
        <Col>
          <Marquee speed={45} gradientColor='none' direction='vertical'>
              <h1>
                <img src={require('../images/wind.png')} height='50px' />
              </h1>
            </Marquee>
            <div><br/></div>
            <Marquee speed={55} gradientColor='none' direction='vertical'>
              <h1>
                <img src={require('../images/wind.png')} height='50px' />
              </h1>
            </Marquee>
            <div><br/></div>
            <Marquee speed={50} gradientColor='none' direction='vertical'>
              <h1>
                <img src={require('../images/wind.png')} height='50px' />
              </h1>
            </Marquee>
        </Col>
      </Row>
      <Row>
        <Col className="about-our-app">
          <br/>
          <h1>About our App</h1>
          <p>We designed our app for discovering anime, tracking what the users are currently watching, checking the reviews of the anime users want to know and the discussions. You can think of it as IMDb but for anime. We took our inspirations from <a href="https://myanimelist.net/" target="_blank"><u>MyAnimeList</u></a>.</p>
          <br></br>

          <h4>"Pretty, not function"</h4>
        </Col>
      </Row>
      <Row>
        <div><br/></div>
        <h1 className='centerText'>Meet Team DogeSmirk!</h1>
        <div><br/></div>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '377px' }}>
            <Card.Img variant="top" className="img-fluid" src={require('../images/leon_smirk.jpg')} />
            <Card.Body>
              <Card.Title><a className='teamLink' href='https://github.com/yelu2021' target="_blank">Leon</a></Card.Title>
              <Card.Text>
                About Leon
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="img-fluid" src={require('../images/hawyeepika.png')}/>
            <Card.Body>
              <Card.Title><a className='teamLink' href='https://github.com/LuongMonica' target="_blank">Monica</a></Card.Title>
              <Card.Text>
                About Monica
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="img-fluid" src={require('../images/kimuwu.jpg')}/>
            <Card.Body>
              <Card.Title><a className='teamLink' href='https://github.com/kimrenie' target="_blank">Kim</a></Card.Title>
              <Card.Text>
                About Kim
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="img-fluid" src={require('../images/sleepy_rai.jpg')} />
            <Card.Body>
              <Card.Title><a className='teamLink' href='https://github.com/ShibuyaNobody' target="_blank">Rai</a></Card.Title>
              <Card.Text>
                About Rai
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='teamImg' src={require('../images/leon_smirk.jpg')} height='200px' />
          <h4 className='centerText'><a className='teamLink' href='https://github.com/yelu2021' target="_blank">Leon</a></h4>
        </Col>
        <Col>
          <img className='teamImg' src={require('../images/hawyeepika.png')} height='200px' />
          <h4 className='centerText'><a className='teamLink' href='https://github.com/LuongMonica' target="_blank">Monica</a></h4>
        </Col>
        <Col>
          <img className='teamImg' src={require('../images/kimuwu.jpg')} height='200px' />
          <h4 className='centerText'><a className='teamLink' href='https://github.com/kimrenie' target="_blank">Kim</a></h4>
        </Col>
        <Col>
          <img className='teamImg' src={require('../images/sleepy_rai.jpg')} height='200px' />
          <h4 className='centerText'><a className='teamLink' href='https://github.com/ShibuyaNobody' target="_blank">Rai</a></h4>
        </Col>
      </Row>
      </Container>
    </>
  )
}