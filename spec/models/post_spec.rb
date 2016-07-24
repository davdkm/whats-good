require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:each) do
    @stub_post = build_stubbed(:post)
  end

  it "has a title" do
    expect(@stub_post.title).to eq('MyString')
  end

  it "has some content" do
    expect(@stub_post.content).to eq('MyText')
  end

  it "has a post date time" do
    expect(@stub_post.post_date).to eq('2016-07-24 13:38:12')
  end
end
