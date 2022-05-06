import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from "./UseFetch";
import Anime from "./Anime";
import HomeAnime from "../components/HomeAnime"

export default function App() {
  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="search"
        placeholder="Search..."
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value.toLowerCase() })}
      />
      <br />
      {data.results.id}
      {/* {data.results.length > 0 ? <HomeAnime animes={data.results} /> : null} */}
    </main>
  );
}