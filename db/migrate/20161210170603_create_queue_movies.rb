class CreateQueueMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :queue_movies do |t|
      t.string :title
      t.string :rated
      t.string :genre
      t.string :actors
      t.string :poster
      t.string :plot
      t.string :year
      t.string :imdbrating
      t.belongs_to :user

      t.timestamps
    end
  end
end
