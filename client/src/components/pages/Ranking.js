import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Ranking() {
  return (
    <>
        <Container>
          <h1 style={{ textAlign: 'center' }}> Rank Kings 👑 </h1>
          <div className='anime-details'>
            <ul>
              <li>
                <p><Link to="/all-time" class="text-dark">Top Anime of All Time</Link></p>
              </li>
              <li>
                <p><Link to="/top-upcoming" class="text-dark">Top Upcoming</Link></p>
              </li>
              <li>
                <p><Link to="/most-popular" class="text-dark">Most Popular</Link></p>
              </li>              
              <li>
                <p><Link to="/top-movies" class="text-dark">Top Anime Movies</Link></p>
              </li>
              <li>
                <p><Link to="/top-airing" class="text-dark">Top Airing</Link></p>
              </li>
            </ul>
          </div>
        </Container>
    </>
  );
}
