import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tools from '../Tools';

export default function Anime({ anime }) {
  // let startDate = true;
  // let endDate = true;
  // if (typeof anime.start_date != "undefined" && typeof anime.end_date != "undefined") {

  // }
  // else if (typeof anime.start_date == "undefined" && typeof anime.end_date == "undefined") {
  //   startDate = false;
  //   endDate = false;
  // }
  // else {
  //   endDate = false;
  // }

  return (
    <> 
      <div className='anime-details'>
        <Row>
            <Col lg={3}>
              <img src={anime.main_picture.large} alt={anime.title} height='auto' width='100%'/>
            </Col>
            <Col lg={9}>
              <h1> {anime.title} </h1>
              {/* Prettying it up and Data validation: only display data if it exists*/}
              {anime.synopsis.length > 0? <p style={{ marginTop: '20px'}}> {Tools.convertSynopsis(anime.synopsis)} </p> : <p style={{ marginTop: '20px'}}>No Synopsis</p>}
              {anime.num_episodes > 0 ? <p><b>Number of episodes:</b> {anime.num_episodes}</p> : <p><b>Number of episodes:</b> Unknown</p>  }
              {(() => {
                if (anime.status == "not_yet_aired") {
                  return <p><b>Aired:</b> Not Yet Aired</p>;
                }
                else if (typeof anime.end_date === "undefined") {
                  return <p><b>Aired:</b> {Tools.convertDate(anime.start_date)} - Still Airing </p>;
                }
                else return <p><b>Aired:</b> {Tools.convertDate(anime.start_date)} - {Tools.convertDate(anime.end_date)} </p>
              })()}
              {Object.keys(anime.studios).length > 0 ? <p><b>Genre(s):</b> {Tools.convertObj(anime.genres)} </p> : <p><b>Genre(s):</b> None Listed </p>}
              {Object.keys(anime.studios).length > 0 ? <p><b>Studio(s):</b> {Tools.convertObj(anime.studios)} </p> : <p><b>Studio(s):</b> None Listed </p>}
              <img src={require("./images/mal-icon.png")} alt="myanimelist" width='30px' height='30px'/>&nbsp;<a class="text-dark" href={'https:/myanimelist.net/anime/'+anime.id} target="_blank" id="mal-pic">Click here for more info </a>
            </Col>
        </Row>
      </div>
    </>
  );
}