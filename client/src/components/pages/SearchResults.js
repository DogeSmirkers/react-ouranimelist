import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import GetSearch from '../GetSearch';
import Anime from '../Anime';

export default function SearchResults() {
  const { data, setData } = GetSearch();  

  return (
    <>
        <p onLoad={(e) => setData({ ...data})}> </p>
        <form className="searchBar" method="GET">
            <input
            type="text"
            placeholder="Search..."
            value={data.slug}
            onChange={(e) => setData({ ...data, slug: e.target.value.toLowerCase() })}
            />
        </form>
        <Container>
            {Object.keys(data.results).length > 0 ? <Anime anime={data.results} /> : null }
        </Container>
    </>
  )
}
