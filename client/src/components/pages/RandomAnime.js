import React from 'react';
import '../../App.css';
import GetRandom from '../GetRandom';
import Anime from "../Anime";

export default function Seasonal() {
  const { data, setData } = GetRandom();

  return (
    <>
      <p onLoad={(e) => setData({ ...data})}> </p>
      {Object.keys(data.results).length > 0 ? <Anime anime={data.results} /> : null}
    </>
  );
}