class CartsController < ApplicationController

  def show
  end

  def add_item
    @cart_item = CartItem.new({
      product_id: params[:product_id],
      cart_id: current_cart.id
    })
    if @cart_item.save
      render json: @cart_item
    else
      render json: {errors: @cart_item.errors.full_messages }, status: 422
    end
  end
end
