class Post < ActiveRecord::Base
  belongs_to :author, :foreign_key => 'user_id', :class_name => 'User'

  validates_presence_of :title, :content, :author
end
