require 'rails_helper'

RSpec.describe Review, type: :model do
  before(:each) do
    @stub_post = build_stubbed(:post)
    @stub_review = build_stubbed(:review)
  end

  it "belongs to a user" do
    expect(@stub_review.user).to be_kind_of(User)
  end

  it "belongs to a post" do
    expect(@stub_review.post).to be_kind_of(Post)
  end

end
