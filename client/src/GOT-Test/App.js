import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import useFetch from "./UseFetch";
import House from "./House";

export default function App() {
  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Search..."
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 0 ? <House family={data.results[0]} /> : null}
    </main>
  );
}