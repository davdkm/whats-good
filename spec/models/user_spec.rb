require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @stub_user = build_stubbed(:user)
  end

  it "has a user name" do
    expect(@stub_user.username).to eq('testUser')
  end

  it "has some email" do
    expect(@stub_user.email).to eq('testuser@example.com')
  end

  it "has a password" do
    expect(@stub_user.password).not_to be_empty
  end
end
