import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GetTopUpcoming from '../GetTopUpcoming';
import Animes from '../Animes';

export default function TopUpcoming() {
  const { data, setData } = GetTopUpcoming();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
          <h1 style={{ textAlign: 'center' }}> Ranking </h1>
            <div className='anime-details'>
              <Row>
                <Animes animes={data.results}/>
              </Row>
            </div>
        </Container>
    </>
  );
}