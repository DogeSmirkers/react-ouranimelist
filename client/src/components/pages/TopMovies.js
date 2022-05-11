import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GetTopMovies from '../GetTopMovies';
import Animes from '../Animes';

export default function TopMovies() {
  const { data, setData } = GetTopMovies();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Top Anime Movies </h1>
          <div className='anime-details'>
            <Row>
              <Animes animes={data.results}/>
            </Row>
          </div>
        </Container>
    </>
  );
}