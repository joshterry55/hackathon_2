import React from 'react';
import Movie from './Movie'

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.displayMovies = this.displayMovies.bind(this)
  }

  displayMovies() {
    let movies = this.props.movies
    if(movies.length) {
      return movies.map( movie => {
        debugger
        return(<Movie
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

export default Movies;
