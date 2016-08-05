class ReviewsController < ApplicationController

  def show
    @review = Review.find_by(id: params[:id])
    render json: @review
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      # error handling
    end
  end

  private

    def review_params
      params.require(:review).permit(:id, :rating, :post_id, :user_id)
    end
end
