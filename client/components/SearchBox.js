import React, { Component } from 'react';
import WatchedMovies from './WatchedMovies';
import QueueMovies from './QueueMovies';


class SearchBox extends Component {
	constructor(props) {
		super(props);

		this.state = { movie: [], loading: false }

		this.handleSearch = this.handleSearch.bind(this);
		this.showMovieResult = this.showMovieResult.bind(this);
		this.loadingState = this.loadingState.bind(this);
		this.handleAddWatched = this.handleAddWatched.bind(this);
		this.displaySelection = this.displaySelection.bind(this);
	}

	handleSearch(e) {
		e.preventDefault();
		let searchQuery = this.refs.searchQuery.value;
		this.setState({ movie: [], loading: true })
		$.ajax({
			url: `http://www.omdbapi.com/?t=${searchQuery}&y=&plot=short&type=movie&r=json`,
			type: 'POST',
			dataType: 'JSON'
		}).done( movie => {
			this.setState({ movie, loading: false });
			this.refs.searchForm.reset();
			this.refs.searchQuery.focus();
		  console.log(this.state.movie);
		}).fail( data => {
			console.log(data);
		});
	}

	handleAddWatched(date, rating, movie) {
		$.ajax({
			type: "POST",
			url: '/api/watched_movies',
			dataType: 'JSON',
			data: { watched_movie: {
				title: movie.Title,
				rated: movie.Rated,
				genre: movie.Genre,
				actors: movie.Actors,
				poster: movie.Poster,
				plot: movie.Plot,
				year: movie.Year,
				imdbrating: movie.imdbRating,
				user_rating: rating,
				watched_date: date
			}}
		}).done( data => {
			this.setState = { movie: []}
		}).fail( data => {
			debugger
			console.log(data)
		})
	}

handleAddQueue(movie) {
		$.ajax({
			type: "POST",
			url: '/api/queue_movies',
			dataType: 'JSON',
			data: { queue_movie: {
				title: movie.Title,
				rated: movie.Rated,
				genre: movie.Genre,
				actors: movie.Actors,
				poster: movie.Poster,
				plot: movie.Plot,
				year: movie.Year,
				imdbrating: movie.imdbRating,
			}}
		}).done( data => {
			this.setState = { movie: [] }
		}).fail( data => {
			console.log(data)
		})
	}

	showMovieResult() {
		let movie = this.state.movie;
		if(this.state.movie.Response === "True" ) {
			return(
				<div>
				<div className="row">
					<div className="col s4">
						<img style={styles.searchPoster} src={movie.Poster} />
					</div>
					<div className="col s8">
						<div className="col s12"><h5>{movie.Title}</h5></div>
						<div className="col s12"><b>{movie.Rated} | {movie.Genre} | {movie.Year}</b><br /><br /></div>
						<div className="col s12"> {movie.Plot} <br /><br /> </div>
						<div className="col s12"><b>Starring:</b> </div>
						<div className="col s12"> {movie.Actors} <br /><br /></div>
						<div className="col s12"> <b>IMDB Rating:</b> {movie.imdbRating} </div>
					</div>
				</div>
				<div className="row">
					<div className="col s6" style={styles.watchedForm}>
						<form ref="watchedAddForm" onSubmit={ e => {e.preventDefault(), this.handleAddWatched(this.refs.dateWatched.value, this.refs.rateWatched.value, movie) }} >
							<label>Date Watched:</label>
							<input type="date" ref="dateWatched" style={ styles.searchQuery } required />
							<label>My Rating (1-10):</label>
							<input type="number" min="1" max="10" ref="rateWatched" style={ styles.searchQuery } required/>
							<input type="submit" style={ styles.searchSubmit } value="Add to Watched List" />
						</form>
					</div>
					<div className="col s6" style={styles.watchedForm}>
						<br /><br />
						<h5>I want to see this!</h5>
						<form ref="watchedQueueForm" onSubmit={ e => {e.preventDefault(), this.handleAddQueue(movie) }} >
							<input type="submit" style={ styles.searchSubmit } value="Add to Queue" />
						</form>
					</div>
				</div>
				</div>
			)
		} else if(this.state.movie.Response === "False") {
			return(
				<div>
					<h5>{movie.Error}</h5>
				</div>
			);
		} else {
			return(
				<div>
				</div>
			);
		}
	}

	loadingState() {
		if(this.state.loading) {
			return(
				<div>
					<br />
				<div className="progress">
	      	<div className="indeterminate"></div>
				</div>
				</div>
			)
		}
	}

	displaySelection() {
		let that = true
		if(that){
			return(
				<WatchedMovies />
			)
		} else {
			return(
				<QueueMovies />
			)
		}
	}

	render() {
		return(
			<div>
			<div style={ styles.searchBox }>
				<h5>Search For A Movie</h5>
				<form ref="searchForm" onSubmit={this.handleSearch} >
					<input type="text" ref="searchQuery" style={ styles.searchQuery }/>
					<input type="submit" style={ styles.searchSubmit } value="Search" />
				</form>
				{this.loadingState()}
				<div ref="movieResultBox" className="row">
					{this.showMovieResult()}
				</div>

			</div>
			<div>
				{this.displaySelection()}
			</div>
		</div>
		);
	}
}

let styles = {
	searchBox: {
							 margin: '10px auto',
							 padding: '15px',
							 width: '600px',
							 minHeight: '150px',
							 backgroundColor: '#666',
							 borderRadius: '25px',
							 textAlign: 'center',
							 color: 'white'
							},
	searchQuery: {
							 width: '250px',
							 height: '30px',
							 backgroundColor: 'white',
							 color: 'black'
							},
	searchSubmit: {
							 height: '31px',
							 border: 'none',
							 backgroundColor: '#0D47A1',
							 color: 'white'
							},
	searchPoster: {
		width: '100%'
	},
	watchedForm: {
							 padding: '5px',
							 height: '200px',
							 backgroundColor: '#ddd',
							 borderRadius: '25px',
							 textAlign: 'center',
							 color: 'black',
							 border: '5px solid #666'
							}
}

export default SearchBox;
