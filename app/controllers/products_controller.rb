class ProductsController < ApplicationController

  def index
    @products = Product.order(:created_at).limit(10)
    respond_to do |format|
      format.html
      format.json {render json: @products.to_json({
        only: [:id, :name, :price, :description, :medium_image_url],
        methods: [:medium_image_url]
      })}
    end
  end

  def show
    @product = Product.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @product.to_json({
        only: [:id, :name, :price, :description, :large_image_url, :thumb_image_url],
        methods: [:large_image_url, :thumb_image_url]
      })}
    end
  end
end
