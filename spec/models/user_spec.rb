require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @stub_user = build_stubbed(:post)
  end

  it "has a name" do
    expect(@stub_post.title).to eq('MyString')
  end

  it "has some content" do
    expect(@stub_post.content).to eq('MyText')
  end

  it "has a post date time" do
    expect(@stub_post.post_date).to eq('2016-07-24 13:38:12')
  end
end
