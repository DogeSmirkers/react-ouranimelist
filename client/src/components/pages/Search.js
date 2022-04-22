import axios from 'axios';
import React, { useState, useEffect} from "react";
import '../../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SearchAnime(){
    const [animeTitle,setSearch] = useState('');
    const [record,setRecord] = useState([]);

    const searchAnime = () => {
        console.log(animeTitle)
        console.log("hi")
        axios.get(`http://localhost:4000/search?${animeTitle}`)
        .then(response => {
            setRecord(response.data);
        });
    }

    return (
        <>
        <input type="text" id="form1" onKeyUp={searchAnime} onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Search"/>
        <input type="submit" formaction="/search" name="" value="Go"/>
          <Container>
            <h1 style={{ textAlign: 'center' }}>Search Results</h1>
            <div className='search'>
              <Row>
                <Col lg={3}>
                  <Link to=""><img src={require("../images/naruto.jpg")} alt="Card" width={ '100%' }/></Link>
                </Col>
                <Col lg={9}>
                  <h4> title </h4>
                  <p>synopsis</p>
                  <p>Episode count - num_ep</p> 
                </Col>
              </Row>
            </div>
          </Container>
        </>
      );
}