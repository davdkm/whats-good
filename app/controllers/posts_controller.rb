class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.create(post_params.merge(user_id: current_user.id))
    render json: @post
  end

  private

    def post_params
      params.require(:post).permit(:id, :title, :author, :content, :post_date, :user_id)
    end

end
