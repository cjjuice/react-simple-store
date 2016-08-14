json.products(@products) do |product|
  json.extract! product, :id, :name, :price, :description
  json.medium_image_url product.image.url(:medium)
  json.product_show_url product_path(product)
end
