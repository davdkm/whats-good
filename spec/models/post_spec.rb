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

  it "has an author" do
    expect(@stub_post.author).to be_kind_of(User)
  end

  it "has a category" do
    expect(@stub_post.category).to be_kind_of(Category)
  end
end
