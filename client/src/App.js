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

function App() {

  let audio = new Audio("/bark.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <>
      <div className='body'>
        <Router>
          {/* Navigation Bar */}
          <Navbar />

          {/* Banner Image with Logo */}
          <div className='bar'>
            <img className='logoImage' src={ require('./components/images/ouranimelist_icon_pog.png') } onClick={start}/>
          </div>

          {/* Search Bar */}
          <form className="searchBar" action="index.html" method="GET">
            <input type="text" name=""placeholder="Search"/>
            <input type="submit" formaction="/search" name="" value="Go"/>
          </form>

          {/* Displays content on page */}
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/random-anime' component={RandomAnime} />
            <Route path='/ranking' component={Ranking} />
            <Route path='/most-popular' component={MostPopular} />
            <Route path='/topanime' component={TopAnime} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/sign-up' exact component={SignUp} />
            <Route path='/settings' component={Settings} />
          </Switch>
        </Router>

        {/* Footer */}
        <div className='footer'>
          <h8>Designed and Managed by <a className='dogesmirk' href="https://github.com/DogeSmirkers" target="_blank" rel="noreferrer"><i>Team DogeSmirk</i></a> <img src={require('./components/images/dogesmirk.jpg')} alt="" height="16px" width="auto" onClick={start}/></h8>
        </div>
    </div>
    </>
  );
}

export default App;