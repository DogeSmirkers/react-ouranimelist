import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import GetRandom from '../GetRandom';
import RandoAnime from "../RandoAnime";
import { IoRefreshOutline } from "react-icons/io5";

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