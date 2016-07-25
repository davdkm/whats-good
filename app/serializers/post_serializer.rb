class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :post_date
  has_many :author
end
