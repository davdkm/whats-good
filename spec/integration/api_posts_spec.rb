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

  it 'retrieves a specific post' do
    post = FactoryGirl.create(:post)
    get "/posts/#{post.id}"

    expect(response).to be_success

    # check that the post attributes are the same.
    expect(json['title']).to eq(post.title)
    expect(json['content']).to eq(post.content)
    expect(json['author']['username']).to eq(post.author.username)
    expect(json['category']['name']).to eq(post.category.name)
  end

end
