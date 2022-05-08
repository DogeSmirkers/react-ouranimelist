import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import Marquee from 'react-fast-marquee';
import pikaCry from '../assets/pikachu-cry.mp3'

export default function AboutUs() {
  let audio = new Audio("/bark.mp3");
  let pika = new Audio(pikaCry);

  const start = () => {
    audio.play();
  }
  const go = () => {
    pika.play();
  }
  return (
    <>
      <div className='bgColor'>
        <Marquee speed={80} gradientColor='none'>
          <h1>We are Team DogeSmirk <img src={require('../images/dogesmirk.jpg')} alt="doge smirk" height='30px' /> </h1>
        </Marquee>
        <br/>
      </div>
      <Container>
      <Row>
        <Col>
          <Marquee speed={45} gradientColor='none' direction='vertical'>
            <h1>
              <img src={require('../images/wind.png')} alt="wind" height='50px' />
            </h1>
          </Marquee>
          <div><br/></div>
          <Marquee speed={55} gradientColor='none' direction='vertical'>
            <h1>
              <img src={require('../images/wind.png')} alt="wind" height='50px' />
            </h1>
          </Marquee>
          <div><br/></div>
          <Marquee speed={50} gradientColor='none' direction='vertical'>
            <h1>
              <img src={require('../images/wind.png')} alt="wind" height='50px' />
            </h1>
          </Marquee>
        </Col>
        <Col>
          <img className='center' src={require('../images/ouranimelist_icon_pog.png')} alt="ouranimelist icon of doge smirk in sakura blossom" height='250px'/><br/>
        </Col>  
        <Col>
          <Marquee speed={45} gradientColor='none' direction='vertical'>
              <h1>
                <img src={require('../images/wind.png')} alt="wind" height='50px' />
              </h1>
            </Marquee>
            <div><br/></div>
            <Marquee speed={55} gradientColor='none' direction='vertical'>
              <h1>
                <img src={require('../images/wind.png')} alt="wind" height='50px' />
              </h1>
            </Marquee>
            <div><br/></div>
            <Marquee speed={50} gradientColor='none' direction='vertical'>
              <h1>
                <img src={require('../images/wind.png')} alt="wind" height='50px' />
              </h1>
            </Marquee>
        </Col>
      </Row>
      <Row>
        <Col className="about-our-app">
          <br/>
          <h1>About our App</h1>
          <p>We designed our app for discovering anime, tracking what the users are currently watching, checking the reviews of the anime users want to know and the discussions. You can think of it as IMDb but for anime. We took our inspirations from <a href="https://myanimelist.net/" target="_blank" rel="noreferrer"><u>MyAnimeList</u></a>.</p>
          <br></br>

          <h4>"Pretty, and function"</h4>
        </Col>
      </Row>
      <Row>
        <div><br/></div>
        <h1 className='centerText'>Meet Team DogeSmirk!</h1>
        <div><br/></div>
      </Row>
      <Row>
        <Col>
          <img className='teamImg' src={require('../images/leon_smirk.jpg')} alt="cat with drawn eyebrow" height='200px' onClick={start}/>
          <h4 className='centerText'><a className='teamLink' href='https://github.com/yelu2021' target="_blank" rel="noreferrer">Leon</a></h4>
        </Col>
        <Col>
          <img className='teamImg' src={require('../images/hawyeepika.png')} alt="sad pixel pikachu with cowboy hat" height='200px' onClick={go}/>
          <h4 className='centerText'><a className='teamLink' href='https://github.com/LuongMonica' target="_blank" rel="noreferrer">Monica</a></h4>
        </Col>
        <Col>
          <img className='teamImg' src={require('../images/kimuwu1.png')} alt="isabelle from animal crossing with suprised face and exclamation point" height='200px' onClick={start}/>
          <h4 className='centerText'><a className='teamLink' href='https://github.com/kimrenie' target="_blank" rel="noreferrer">Kim</a></h4>
        </Col>
        <Col>
          <img className='teamImg' src={require('../images/sleepy_rai.jpg')} alt="undertale dog lying down" height='200px' onClick={start}/>
          <h4 className='centerText'><a className='teamLink' href='https://github.com/ShibuyaNobody' target="_blank" rel="noreferrer">Rai</a></h4>
        </Col>
      </Row>
      </Container>
    </>
  )
}