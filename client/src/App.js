import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopUpcoming from './components/pages/TopUpcoming';
import RandomAnime from './components/pages/RandomAnime';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import MostPopular from './components/pages/MostPopular';
import Ranking from './components/pages/Ranking';
import AnimeDetails from './components/pages/AnimeDetails';
import SearchBar from './components/SearchBar';
import SearchResults from './components/pages/SearchResults';
import ComingSoon from './components/pages/ComingSoon';
import Error from './components/pages/Error';
import TopAnimeAllTime from './components/pages/TopAnimeAllTime';
import TopMovies from './components/pages/TopMovies';
import TopAiring from './components/pages/TopAiring';

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
          <Navi />

          {/* Banner Image with Logo */}
          <div className='bar'>
            <img className='logoImage' src={ require('./components/images/ouranimelist_icon_pog.png') } onClick={start} alt="ouranimelist logo with sakura blossom and doge smirk in middle"/>
          </div>

          <SearchBar />

          {/* Displays content on page */}
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/random-anime' component={RandomAnime} />
            <Route path='/ranking' component={Ranking} />
            <Route path='/most-popular' component={MostPopular} />
            <Route path='/top-upcoming' component={TopUpcoming} />
            <Route path='/all-time' component={TopAnimeAllTime} />
            <Route path='/top-movies' component={TopMovies} />
            <Route path='/top-airing' component={TopAiring} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/sign-up' exact component={SignUp} />
            <Route path='/settings' component={Settings} />
            <Route path='/anime/:title' component={AnimeDetails} />
            <Route path='/search' component={SearchResults} />
            <Route path='/coming-soon' component={ComingSoon} />
            <Route path='/404' component={Error} />
          </Switch>
        </Router>

        {/* Footer */}
        <div className='footer'>
          <h8>Designed and Managed by <a className='dogesmirk' href="https://github.com/DogeSmirkers" target="_blank" rel="noreferrer"><i>Team DogeSmirk</i></a> <img src={require('./components/images/dogesmirk.jpg')} alt="doge smirk" height="16px" width="auto" onClick={start}/></h8>
        </div>
    </div>
    </>
  );
}

export default App;