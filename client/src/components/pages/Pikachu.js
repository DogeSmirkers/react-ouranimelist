import React from 'react';
import '../../App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Pikachu() {
  
  return (
    <>
        <Container fluid style={{ textAlign: 'center' }}>
          <h1 style={{ marginTop: '20px' }}>Monica: "Hey! Looks like you found my secret page! Here's your reward!"</h1>
          <br/>
          <Col>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v6jw6KRIOmw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                 
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xU3BiUMUkc4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zqtriLFd1m8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
          </Col>
        </Container>
    </>
  );
}
