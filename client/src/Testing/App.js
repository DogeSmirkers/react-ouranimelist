import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopAnime from './components/pages/TopAnime';
import RandomAnime from './components/pages/RandomAnime';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import MostPopular from './components/pages/MostPopular';
import Ranking from './components/pages/Ranking';
import Search from './components/pages/Search';

import useFetch from "./Testing/UseFetch";
import House from "./Testing/House";
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