import React from 'react';
import '../../App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import GetPersonalSuggestion from '../GetPersonalSuggestion';
import Tools from '../../Tools'

export default function PersonalSuggestion() {
  const { data, setData } = GetPersonalSuggestion();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container fluid className='suggestion-box-pls-stop-moving'>
        <Row style={{ marginTop: 5 }}>
          <h3>Your Personal Anime Suggestions</h3>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col xs={2} md={6} lg={{ span: 4 }} >
            <Link to={`anime/${data.results.id}/${data.results.title}`}><img src={require('../images/oddtaxi.jpg')} alt={data.results.title} width="100%" height="auto"/> </Link>
          </Col>
          <Col xs={12} md={6} lg={{ span: 8 }}>
            {Object.keys(data.results).length > 0 ? <h1>{data.results.title}</h1> : null}
            {Object.keys(data.results).length > 0 ? <p>{Tools.convertSynopsis(data.results.synopsis)}</p> : null}
            {Object.keys(data.results).length > 0 ? <p><b>Original Run:</b> {Tools.convertDate(data.results.start_date)} - {Tools.convertDate(data.results.end_date)}</p>  : null}
            {Object.keys(data.results).length > 0 ? <p><b>Episodes:</b> {data.results.num_episodes}</p> : null}
          </Col>
        </Row>
      </Container>
    </>
  )
}