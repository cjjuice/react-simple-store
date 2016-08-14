json.extract! @product, :id, :name, :price, :description
json.large_image_url @product.image.url(:large)
