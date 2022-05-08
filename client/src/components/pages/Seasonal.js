import React from 'react';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import GetSeasonal from "../GetSeasonal";
import HomeAnime from "../HomeAnime";

export default function Seasonal() {
  function getSeasonForNumberMonth(month) {
    if (month < 3) {
        return "Winter";
    }
    else if (month > 2 && month < 6) {
        return "Spring";
    }
    else if (month > 5 && month < 9) {
        return "Summer";
    }
    else {
        return "Fall";
    }
  }
  const d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();
  let season = getSeasonForNumberMonth(month);

  const { data, setData } = GetSeasonal();
  
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container fluid className='suggestion-box-pls-stop-moving'>
          <Row>
            <h4 style={{ marginTop: '10px' }}>Seasonal Anime - {season} {year}</h4>
          </Row>
          <Row style={{ marginTop: '20px' }} className='suggestion-box'>
            <Stack direction="horizontal" gap={3}>
              {Object.keys(data.results).length > 0 ? <HomeAnime animes={data.results} /> : null}
            </Stack>
          </Row>
      </Container>
    </>
  );
}