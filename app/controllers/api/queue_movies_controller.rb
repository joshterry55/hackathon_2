class Api::QueueMoviesController < ApplicationController
  before_action :set_queue_movie, only: [:destroy]


  def index
    @queue_movies = current_user.queue_movies
  end

  def destroy
    @queue_movie.destroy
  end

  def create
    @queue_movie = current_user.queue_movies.new(movie1_params)
    if @queue_movie.save
    else
    end
  end

  private
    def set_queue_movie
      @queue_movie = QueueMovie.find(params[:id])
    end

    def movie1_params
      params.require(:queue_movie).permit(:title, :rated, :genre, :actors, :poster, :plot, :year, :imdbrating, :user_rating, :watched_date, :user_id)
    end
end
