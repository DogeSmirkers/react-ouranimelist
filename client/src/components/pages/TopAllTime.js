import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GetTopAllTime from '../GetTopAllTime';
import Animes from '../Animes';

export default function TopAllTime() {
  const { data, setData } = GetTopAllTime();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Top Anime of All Time </h1>
          <div className='anime-details'>
            <Row>
              <Animes animes={data.results}/>
            </Row>
          </div>
      </Container>
    </>
  );
}