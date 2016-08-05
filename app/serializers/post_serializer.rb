class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :updated_at, :avg_rating
  has_one :author
  has_one :current_user, if: :current_user
  has_one :user_post_review, if: :current_user

  def user_post_review
    review = Review.where(post_id: object.id).where(user_id: current_user.id).first
    review if review
  end
end
