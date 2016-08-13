class Product < ApplicationRecord
  has_attached_file :image, styles: { large: '1400x', medium: "800x", thumb: "100x" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates_presence_of :name, :price, :description
  validates :image, attachment_presence: true
end
