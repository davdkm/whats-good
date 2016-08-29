require 'rails_helper'

RSpec.describe Category, type: :model do
  before(:each) do
    @stub_category = build_stubbed(:category)
  end

  it "has a name" do
    expect(@stub_category.name).to eq('MyCategory')
  end

  it "can have a post" do
    @stub_post = build_stubbed(:post)
    @stub_post.category = @stub_category
    expect(@stub_post.category).to eq(@stub_category)
  end

end
