class User < ActiveRecord::Base
  has_many :votes
  has_many :posts
  has_many :voted_posts, through: :votes, source: :voteable, source_type: 'Post'
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, uniqueness: true
  validates_presence_of :username
end
