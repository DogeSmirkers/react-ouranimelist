import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import Marquee from 'react-fast-marquee';

export default function AboutUs() {
  return (
    <>
      <div className='bgColor'>
              <Marquee speed={80} gradientColor='none'>
                <h1>We are Team DogeSmirk <img src={require('../images/dogesmirk.jpg')} height='30px' /> </h1>
              </Marquee>
            </div>
      <Container>
        <Row>
          <Col>
            {/* <h2>Doge is our mascot!</h2> */}
            <img className='center' src={require('../images/ouranimelist_icon_pog.png')} height='250px'/>
          </Col>
          <Col xs={8}>
            <h1>About our App</h1>
            <p>We designed our app for discovering anime, tracking what the users are currently watching, checking the reviews of the anime users want to know and the discussions. You can think of it as IMDb but for anime. We took our inspirations from <a href="https://myanimelist.net/" target="_blank"><u>MyAnimeList</u></a>.</p>
            <br></br>

            <h4>"Pretty, not function"</h4>
          </Col>
        </Row>
        <Row>
          <h1 className='centerText'>Meet Team DogeSmirk!</h1>
        </Row>
        <Row>
          <Col>
            <img className='teamImg' src={require('../images/dogesmirk.jpg')} height='200px' />
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