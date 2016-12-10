class CreateWatchedMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :watched_movies do |t|
      t.string :title
      t.string :rated
      t.string :genre
      t.string :actors
      t.string :poster
      t.string :plot
      t.string :year
      t.string :imdbrating
      t.string :user_rating
      t.string :watched_date

      t.timestamps
    end
  end
end
