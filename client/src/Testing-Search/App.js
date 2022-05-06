import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import useFetch from "./UseFetch";
import Anime from "./Anime";
import HomeAnime from "../components/HomeAnime"
import CreateUser from '../CreateUser';

export default function App() {
  const { data, setData } = useFetch();
  return (
    <>
      <Container>
        <input
          type="search"
          placeholder="Search..."
          value={data.slug}
          onChange={(e) => setData({ ...data, slug: e.target.value.toLowerCase() })}
        />
        <Button type="submit" onSubmit={(e) => setData({ ...data, slug: e.target.value.toLowerCase() })}></Button>
        <br />
        <p>{data.results.id}</p>
        {Object.keys(data.results).length > 0 ? <img src={data.results.main_picture.medium} alt={data.results.title} /> : null }
        {/* {data.results.length > 0 ? <HomeAnime animes={data.results} /> : null} */}
        <CreateUser/>
      </Container>
    </>
  );
}