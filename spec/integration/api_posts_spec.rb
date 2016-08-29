require 'rails_helper'

describe "Posts API" do
  it 'sends a list of posts' do
    FactoryGirl.create_list(:post, 3)

    get '/posts'

    # test for the 200 status-code
    expect(response).to be_success

    # check to make sure the right amount of messages are returned
    expect(json.length).to eq(3)
  end
end
