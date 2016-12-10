class Api::WatchedMoviesController < ApplicationController
  before_action :set_watched_movie, only: [:destroy]

  def index
    @watched_movies = current_user.watched_movies
  end

  def destroy
    @watched_movie.destroy
  end

  def create
    @watched_movie = current_user.watched_movies.new(movie_params)
    if @watched_movie.save
    else
    end
  end

  private
    def set_watched_movie
      @watched_movie = WatchedMovie.find(params[:id])
    end

    def movie_params
      params.require(:watched_movie).permit(:title, :rated, :genre, :actors, :poster, :plot, :year, :imdbrating, :user_rating, :watched_date, :user_id)
    end
end
