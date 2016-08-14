class Product < ApplicationRecord
  has_many :cart_items
  has_many :carts, through: :cart_items

  has_attached_file :image, styles: { large: '1400x', medium: "800x", thumb: "100x" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates_presence_of :name, :price, :description
  validates :image, attachment_presence: true

  def medium_image_url
    image.url(:medium)
  end

  def large_image_url
    image.url(:large)
  end

  def thumb_image_url
    image.url(:thumb)
  end
end
