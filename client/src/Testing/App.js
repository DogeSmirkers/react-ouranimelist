import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import useFetch from "./UseFetch";
import House from "./House";
function App() {

  let audio = new Audio("/bark.mp3");

  const start = () => {
    audio.play();
  }

  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Type your favorite house"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 0 ? <House family={data.results[0]} /> : null}
    </main>
      
  );
}

export default App;