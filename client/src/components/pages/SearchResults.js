import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import GetDetails from '../GetDetails';

export default function SearchResults(match) {
  
  const {
    params: { title }
  } = match;
  
  // search query
  // const { search } = useLocation();
  // console.log(search);

  const { data, setData } = GetDetails(title);  

  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      <Container>
          <Row>
              <Col>
                  <h1>I'm a result uwu</h1>
              </Col>
          </Row>
      </Container>
    </>
  )
}
