json.cartId current_cart.id
json.initialNumItems current_cart.cart_items.count
json.initialSubtotal current_cart.subtotal
json.cartItems(current_cart.cart_items) do |ci|
  json.extract! ci, :id
  json.name ci.product.name
  json.price ci.product.price
  json.product_id ci.product_id
  json.thumb_image_url ci.product.image.url(:thumb)
  json.product_show_url product_path(ci.product)
end
