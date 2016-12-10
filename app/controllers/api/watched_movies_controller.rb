class Api::WatchedMoviesController < ApplicationController
  def index
    @watched_movies = current_user.watched_movies
  end
end
