class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :updated_at, :votes_count
  attribute :current_user_voted, if: :current_user
  has_one :author

  def current_user_voted
    Vote.already_voted(current_user.id, object.id) if current_user
  end
end
