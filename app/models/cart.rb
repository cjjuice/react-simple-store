class Cart < ApplicationRecord
  has_many :cart_items
  has_many :products, through: :cart_items

  def subtotal
    subtotal = 0.00
    products.each {|p| subtotal += p.price}
    subtotal
  end
end
