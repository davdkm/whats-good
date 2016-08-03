class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.references :user_id, index: true
      t.references :post_id, index: true

      t.timestamps null: false
    end
  end
end
