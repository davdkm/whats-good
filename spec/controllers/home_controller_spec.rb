require 'rails_helper'

RSpec.describe HomeController, type: :controller do

  it "should get the home page" do
    get :index
    assert_response :success
  end
end
