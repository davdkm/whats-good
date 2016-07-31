class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :voteable, polymorphic: true, counter_cache: true

  def self.already_voted(user_id, voteable_id)
    vote = where(user_id: user_id).where(voteable_id: voteable_id)
    vote.first.voted if vote.present?
  end
end
