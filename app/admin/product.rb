ActiveAdmin.register Product do
  menu priority: 1
  permit_params :name, :price, :description, :image

  index do
    column :name
    column :price do |p|
      number_to_currency p.price
    end
    column :image do |p|
      image_tag(p.image.url(:thumb))
    end
    actions
  end

  show do |product|
    attributes_table do
      row :name
      row :price
      row :image do
        image_tag(product.image.url(:thumb))
      end
    end
  end

  form do |f|
    f.inputs "Product Info" do
      f.input :name
      f.input :price, label: "Price ($)"
      f.input :description
      f.input :image, required: false
    end
    f.actions
  end
end
