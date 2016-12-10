json.array! @watched_movies do |movie|
  json.id movie.id
  json.title movie.title
  json.rated movie.rated
  json.genre movie.genre
  json.actors movie.actors
  json.poster movie.poster
  json.plot movie.plot
  json.imdbrating movie.imdbrating
  json.year movie.year
  json.user_rating movie.user_rating
  json.watched_date movie.watched_date
end
  #rated, :genre, :actors, :poster, :plot, :year, :imdbrating, :user_rating, :watched_date)
