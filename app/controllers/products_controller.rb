class ProductsController < ApplicationController

  def index
    @products = Product.order(:created_at).limit(10)
  end

  def show
    @product = Product.find(params[:id])
  end
end
