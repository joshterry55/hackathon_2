import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import WatchedMovies from './components/WatchedMovies'
import QueueMovies from './components/QueueMovies'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={WatchedMovies} />

      <Route path="/watched_movies" component={WatchedMovies} />
      <Route path="/queue_movies" component={QueueMovies} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
