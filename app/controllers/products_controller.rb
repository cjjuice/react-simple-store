class ProductsController < ApplicationController

  def index
    @products = Product.order(:created_at).limit(10)
    respond_to do |format|
      format.html
      format.json {render json: @products}
    end
  end

  def show
    @product = Product.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @product}
    end
  end
end
