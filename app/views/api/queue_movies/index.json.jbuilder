json.array! @queue_movies do |movie|
  json.id movie.id
  json.title movie.title
  json.rated movie.rated
  json.actors movie.actors
  json.poster movie.poster
  json.plot movie.plot
  json.imdbrating movie.imdbrating
  json.year movie.year
end
