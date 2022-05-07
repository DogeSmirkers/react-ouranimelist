import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GetMostPopular from '../GetMostPopular';
import Animes from '../Animes';

export default function MostPopular() {
  const { data, setData } = GetMostPopular();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
          <h1 style={{ textAlign: 'center' }}> Most Popular </h1>
            <div className='anime-details'>
              <Row>
                <Animes animes={data.results}/>
              </Row>
            </div>
        </Container>
    </>
  );
}