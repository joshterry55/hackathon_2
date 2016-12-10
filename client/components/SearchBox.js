import React, { Component } from 'react';

class SearchBox extends Component {
	constructor(props) {
		super(props);

		this.state = { movie: [], loading: false }
		
		this.handleSearch = this.handleSearch.bind(this);
		this.showMovieResult = this.showMovieResult.bind(this);
		this.loadingState = this.loadingState.bind(this);
		this.handleAddWatched = this.handleAddWatched.bind(this);
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
		console.log(date)
		console.log(rating)
		console.log(movie)
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
				</div>
				</div>
			)
		} else if(this.state.movie.Response === "False") {
			return(
				<div>
					<h5>{movie.Error}</h5>
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

	render() {
		return(
			<div style={ styles.searchBox }>
				<form ref="searchForm" onSubmit={this.handleSearch} >
					<input type="text" ref="searchQuery" style={ styles.searchQuery }/>
					<input type="submit" style={ styles.searchSubmit } value="Search" />
				</form>
				{this.loadingState()}
				<div ref="movieResultBox" className="row">
					{this.showMovieResult()}
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
							 padding: '15px',
							 backgroundColor: '#ddd',
							 borderRadius: '25px',
							 textAlign: 'center',
							 color: 'black'
							}
}

export default SearchBox;