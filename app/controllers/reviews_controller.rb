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

  def update
    @review = Review.find_by(id: review_params[:id])
    if @review.update(review_params)
      render json: @review
    end
  end

  private

    def review_params
      params.require(:review).permit(:id, :rating, :post_id, :user_id)
    end
end
