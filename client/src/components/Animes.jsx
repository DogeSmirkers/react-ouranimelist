import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tools from '../Tools';

export default function Animes({ animes }) {
  let animeList = Tools.convertAnimes(animes);
    return (
      <>
        {animeList.map((animeList) => (
          <div>
            <div className='search-results' key={animeList.id}>
              <Row>
                <Col lg={3}>        
                  <Link to={`anime/${animeList.id}/${animeList.title}`}><img src={animeList.main_picture.large} alt={animeList.title} height='auto' width='100%'/> </Link>
                </Col>
                <Col lg={9}>
                  <h1> {animeList.title} </h1>
                  {animeList.synopsis.length > 0 ? <p style={{ marginTop: '20px'}}> {Tools.convertSynopsis(animeList.synopsis)} </p> : <p style={{ marginTop: '20px'}}>No Synopsis</p>}
                  {typeof animeList.mean !== "undefined" ? <p><b>Score: </b>{animeList.mean}</p> : <p><b>Score: </b>None Listed</p>}
                  {animeList.status !== "undefined" ? <p><b>Status: </b>{Tools.convertStatus(animeList.status)} </p> : <p style={{ marginTop: '20px'}}>No Status</p>}
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </>
  );
}