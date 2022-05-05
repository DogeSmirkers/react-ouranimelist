import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import GetRandom from '../GetRandom';
import Anime from "../Anime";

export default function RandomAnime() {
  const { data, setData } = GetRandom();

  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        {Object.keys(data.results).length > 0 ? <Anime anime={data.results} /> : null}
      </Container>
    </>
  );
}