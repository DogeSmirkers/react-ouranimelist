import React from 'react'
import Container from 'react-bootstrap/Container';
import GetSearch from '../GetSearch';
import Animes from '../Animes';

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
            {Object.keys(data.results).length > 0 ? <Animes animes={data.results} /> : null }
        </Container>
    </>
  )
}
