import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tools from '../Tools';

export default function Anime({ anime }) {
  return (
    <> 
      <div className='anime-details'>
        <Row>
            <Col lg={3}>
              <img src={anime.main_picture.large} alt={anime.title} height='auto' width='100%'/>
            </Col>
            <Col lg={9}>
              <h1> {anime.title} </h1>
              <p style={{ marginTop: '20px'}}> {Tools.convertSynopsis(anime.synopsis)} </p>
              {/* Data validation */}
              {anime.num_episodes > 0 ? <p><b>Number of episodes:</b> {anime.num_episodes}</p> : <p><b>Number of episodes:</b> Unknown</p>  }
              {typeof anime.end_date != "undefined" ? <p><b>Aired:</b> {Tools.convertDate(anime.start_date)} - {Tools.convertDate(anime.end_date)} </p> : <p><b>Aired:</b> {Tools.convertDate(anime.start_date)} - Still Airing </p>}
              {typeof anime.mean != "undefined" ? <p><b>MAL Score:</b> {anime.mean} </p> : <p><b>MAL Score:</b> N/A </p>}
              <p><b>Genre(s):</b> {Tools.convertObj(anime.genres)} </p>
              {Object.keys(anime.studios) > 0 ? <p><b>Studio(s):</b> {Tools.convertObj(anime.studios)} </p> : <p><b>Studio(s):</b> None Listed </p>}
              <img src={require("./images/mal-icon.png")} alt="myanimelist" width='30px' height='30px'/>&nbsp;<a class="text-dark" href={'https:/myanimelist.net/anime/'+anime.id} target="_blank" id="mal-pic">Click here for more info </a>
            </Col>
        </Row>
      </div>
    </>
  );
}