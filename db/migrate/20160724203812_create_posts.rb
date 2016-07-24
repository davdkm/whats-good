class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.datetime :post_date
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
