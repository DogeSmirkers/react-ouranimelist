import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function Ranking() {
  return (
    <>
        <Container>
          <h1 style={{ textAlign: 'center', marginTop: '20px' }}> <Link to="/anime/40834/Ousama%20Ranking" class="text-dark" style={{ textDecoration: 'none'}}>👑 Rank Kings 👑</Link> </h1>
          <div className='anime-details'>
            <ul>
              <li>
                <p><Link to="/all-time" class="text-dark">Top Anime of All Time</Link></p>
              </li>
              <li>
                <p><Link to="/top-upcoming" class="text-dark">Top Upcoming</Link></p>
              </li>
              <li>
                <p><Link to="/most-favorited" class="text-dark">Most Favorited</Link></p>
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
