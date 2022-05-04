import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GetDetails from '../GetDetails';

export default function AnimeDetails({match}) {
    const {
        params: { id }
      } = match;
    //const { data, setData } = GetDetails();
    return (
        <>
        {/* <p onLoad={(e) => setData({ ...data})}> </p> */}
        <Container>
            <h1 style={{ textAlign: 'center' }}> {id} </h1>
            <h2>Test</h2>
            {/* <div className='random-anime'>
            <Row>
                <Col lg={3}>
                <img src={animeList.main_picture.large} alt={animeList.title} height='300px' width='auto'/>
                </Col>
                <Col lg={9}>
                <h4> {anime.title} </h4>
                <p> {anime.synopsis} </p>
                <p> {anime.count} </p> 
                </Col>
            </Row>
            </div> */}
        </Container>
        </>
    );
}