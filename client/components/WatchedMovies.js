import React from 'react';
import Movies from './Movies'

class WatchedMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = { movies: [] }

  }

  componentDidMount() {
    $.ajax({
      url: '/api/watched_movies',
      type: 'GET',
      dataType: 'JSON'
    }).done( movies => {
      this.setState( {movies} )

    }).fail( movies => {
      console.log(movies)
    })
  }

  render() {
    return(
      <div>
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default WatchedMovies;
