import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GetTopAiring from '../GetTopAiring';
import Animes from '../Animes';

export default function TopAiring() {
  const { data, setData } = GetTopAiring();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        <h1 style={{ textAlign: 'center' }}> Top Airing </h1>
        <div className='anime-details'>
          <Row>
            <Animes animes={data.results}/>
          </Row>
        </div>
      </Container>
    </>
  );
}