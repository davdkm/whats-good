class PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  private

    def post_params
      params.require(:post).permit(:id, :title, :author, :content, :post_date)
    end

end
