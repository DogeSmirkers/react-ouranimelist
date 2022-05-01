import React from 'react';
import axios from 'axios';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import GetTopAllTime from "../GetTopAllTime";
import HomeAnime from "../HomeAnime";

export default function TopAnimeAllTime() {
  const { data, setData } = GetTopAllTime();
  
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
        <div className='suggestion-box-pls-stop-moving'>
          <Row>
            <h4>Top Anime of All Time</h4>
          </Row>
          <Row style={{ marginTop: 30 }} className='suggestion-box'>
            <Stack direction="horizontal" gap={3}>
              {Object.keys(data.results).length > 0 ? <HomeAnime animes={data.results} /> : null}
            </Stack>
          </Row>
        </div>
      </Container>
    </>
  );
}