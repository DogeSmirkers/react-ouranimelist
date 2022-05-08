import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GetMostFavorited from '../GetMostFavorited';
import Animes from '../Animes';

export default function MostFavorited() {
  const { data, setData } = GetMostFavorited();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
          <h1 style={{ textAlign: 'center' }}> Most Favorited </h1>
            <div className='anime-details'>
              <Row>
                <Animes animes={data.results}/>
              </Row>
            </div>
        </Container>
    </>
  );
}