import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import WatchedMovies from './components/WatchedMovies'
import QueueMovies from './components/QueueMovies'
import SearchBox from './components/SearchBox'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={SearchBox} />

      <Route path="/watched_movies" component={SearchBox} />
      <Route path="/queue_movies" component={SearchBox} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
