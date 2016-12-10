user = User.where(email: 'test@test.com').first_or_create do |u|
  u.password = 'password'
end

10.times do |n|
  user.watched_movies.create(title: "Watched Movie #{n}")
end

10.times do |n|
  user.queue_movies.create(title: "Watched Movie #{n}")
end

puts "#{user.watched_movies.count} movies seeded"
