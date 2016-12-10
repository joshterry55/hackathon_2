class Api::WatchedMoviesController < ApplicationController
  before_action :set_watched_movie, only: [:destroy]

  def index
    @watched_movies = current_user.watched_movies
  end

  def destroy
    @watched_movie.destroy
  end

  private
    def set_watched_movie
      @watched_movie = WatchedMovie.find(params[:id])
    end
end
