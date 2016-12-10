import React from 'react';
import MoviesForQueue from './MoviesForQueue'

class QueueMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = { movies: [] }

  }

  componentDidMount() {
    $.ajax({
      url: '/api/queue_movies',
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
        <MoviesForQueue movies={this.state.movies}/>
      </div>
    )
  }
}

export default QueueMovies;
