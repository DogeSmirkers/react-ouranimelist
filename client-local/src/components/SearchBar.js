import React from 'react';
import '../App.css';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBar() {
  return (
    <>
      <Container fluid className='searchBar'>
        <form method="GET">
            <input type="submit" formAction="/search" name="" value="Search"/>
        </form>
      </Container>
    </>
  );
}