class AddAvgRatingToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :avg_rating, :integer
  end
end
