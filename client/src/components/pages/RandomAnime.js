import React from 'react';
import '../../App.css';
import { Container, Button, Row } from 'react-bootstrap';
import { IoRefreshOutline } from "react-icons/io5";
import GetRandom from '../GetRandom';
import RandoAnime from "../RandoAnime";

export default function RandomAnime() {
  const { data, setData } = GetRandom();
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        <Row>
          <Button onClick={refreshPage}> <IoRefreshOutline></IoRefreshOutline> </Button>
        </Row>
        {Object.keys(data.results).length > 0 ? <RandoAnime anime={data.results} /> : null}
      </Container>
    </>
  );
}