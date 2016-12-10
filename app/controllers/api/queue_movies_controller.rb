class Api::QueueMoviesController < ApplicationController
  def index
    @queue_movies = current_user.queue_movies
  end
end
