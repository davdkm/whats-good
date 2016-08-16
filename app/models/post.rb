class Post < ActiveRecord::Base
  belongs_to :author, :foreign_key => 'user_id', :class_name => 'User'
  has_many :reviews
  belongs_to :category

  validates_presence_of :title, :content, :author
end
