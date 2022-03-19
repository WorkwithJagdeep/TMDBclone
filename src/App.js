import React from 'react'
import './App.scss';
import Header from './Header'
import Banner from './Banner';
import request from './request'
import Movie from './Movie'
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Movieslist from './Movieslist';
import Moviedetail from './Moviedetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/moviesdata"
          element=

          {<>
            <Moviedetail />
          </>
          }
        />
        <Route path="/Movieslist"
          element=

          {<>
            <Header />
            <Movieslist />
          </>
          }
        />
        <Route
          path='/'
          element={<div className='App'>
            <Header />
            <Banner fetch={request.popularmovie} />

            <Movie title="What's Popular" fetch={request.popularmovie}
              p="popular"
              media="tv" />
                <Movie title="Netflix " fetch={request.NetflixOriginals} isnetflix/>
            <Movie title="Top Rated" fetch={request.TopRatedmovie}
              p="top_rated"
              media="tv" />

          </div>}
        />
      </Routes>
    </Router>

  );
}

export default App;
