import React from 'react';
import MovieForQueue from './MovieForQueue'

class MoviesForQueue extends React.Component {
  constructor(props) {
    super(props)

    this.displayMovies = this.displayMovies.bind(this)
  }

  displayMovies() {
    let movies = this.props.movies
    if(movies.length) {
      return movies.map( movie => {
        return(<MovieForQueue
                key={movie.id}
                myMovie={movie} />);
      });
    } else {
      return(<h3>No Movies Found</h3>)
    }
  }

  render(){
    return(
      <div className='row'>
        { this.displayMovies()}
      </div>
    )
  }
}

export default MoviesForQueue;
