import React from 'react';
import MoviesForQueue from './MoviesForQueue'

class QueueMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = { movies: [] }
    this.deleteMovie = this.deleteMovie.bind(this)
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

  deleteMovie(e, id) {
    e.preventDefault()
    $.ajax({
      type: 'DELETE',
      url: `/api/queue_movies/${id}`,
      dataType: 'JSON'
    }).success( data => {
      let movies = this.state.movies;
      let index = movies.findIndex( b => b.id === id)
      this.setState({
        movies:
        [...movies.slice(0, index),
         ...movies.slice(index + 1, movies.length)
        ]
      })

    }).fail( data => {
      console.log('i failed')
    })

  }

  render() {
    return(
      <div>
        <MoviesForQueue
          movies={this.state.movies}
          deleteMovie={this.deleteMovie}
          />
      </div>
    )
  }
}

export default QueueMovies;
