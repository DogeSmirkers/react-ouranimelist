import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GetTopUpcoming from '../GetTopUpcoming';
import Animes from '../Animes';

export default function TopUpcoming() {
  const { data, setData } = GetTopUpcoming();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        <h1 style={{ textAlign: 'center' }}> Top Upcoming </h1>
          <div className='anime-details'>
            <Row>
              <Animes animes={data.results}/>
            </Row>
          </div>
      </Container>
    </>
  );
}