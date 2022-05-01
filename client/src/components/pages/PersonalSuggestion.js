import React from 'react';
import axios from 'axios';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import GetPersonalSuggestion from '../GetPersonalSuggestion';
import Tools from '../../Tools'

export default function PersonalSuggestion() {
  const { data, setData } = GetPersonalSuggestion();
  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <div className='suggestion-box-pls-stop-moving'>
          <Row style={{ marginTop: 5 }}>
          <h3>Your Personal Anime Suggestions</h3>
          </Row>
          <Row style={{ marginTop: 30 }}>
          <Col xs={2} md={6} lg={{ span: 4 }} >
              <div className='personalSuggestion'></div>
          </Col>
          <Col xs={12} md={6} lg={{ span: 8 }}>
              {Object.keys(data.results).length > 0 ? <p>{Tools.convertSynopsis(data.results.synopsis)}</p> : null}
              {Object.keys(data.results).length > 0 ? <p><b>Original Run:</b> {Tools.convertDate(data.results.start_date)} - {Tools.convertDate(data.results.end_date)}</p>  : null}
              {Object.keys(data.results).length > 0 ? <p><b>Episodes:</b> {data.results.num_episodes}</p> : null}
          </Col>
          </Row>
      </div>
    </>
  )
}