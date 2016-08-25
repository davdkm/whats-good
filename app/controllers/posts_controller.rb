class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

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

  def update
    @post = Post.find_by(id: params[:id])
    @post.update(post_params)
    render json: @post
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy if @post
    head :no_content
  end

  private

    def post_params
      params.require(:post).permit(:id, :title, :author, :content, :post_date, :user_id, :category_id)
    end

end
