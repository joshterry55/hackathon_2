import React from 'react'
import { Link } from 'react-router'

class MovieForQueue extends React.Component {
  constructor(props) {
    super(props)

    this.displayMovie = this.displayMovie.bind(this)
  }

  displayMovie() {
    let movie = this.props.myMovie
    return(
      <div className="col s6 offset-s3">
        <h2 className="header"></h2>
        <div className="card-color card horizontal">
          <div className="card-image valign-wrapper" style={styles.movieImage}>
            <img className='valign' src={movie.poster} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5><strong>{movie.title}</strong><small> ({movie.year})</small></h5>
              <i>{movie.rated} | {movie.genre}</i><br />
              <h6><strong>Plot: </strong><i>{movie.plot}</i></h6>
              <h6><strong>IMDB Rating: </strong><i>{movie.imdbrating}</i></h6>
              <h6><strong>Actors: </strong><i>{movie.actors}</i></h6>

            </div>
            <div className="card-action">
              <a href='#' onClick={(e) => this.props.deleteMovie(e, movie.id)}>Delete</a>
              <a href='#' onClick={(e) => this.props.moveMovie(e, movie.id, movie)}>Add to Watched</a>
                <Link to={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
                target='_blank'>
                Youtube Trailer
          </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // componentDidMount() {
  //   $('.modal').modal();
  // }
  //
  // showModal() {
  //   $('#show-modal').modal('open')
  // }


  render() {
    return(

    <div>
      {this.displayMovie()}
    </div>
  )
  }
}

let styles = {
  movieImage: {
    width: '145px',
    border: '2px solid black',
    textAlign: 'center',
    backgroundColor: 'black'
  }
}

export default MovieForQueue;
