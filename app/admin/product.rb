ActiveAdmin.register Product do
  menu priority: 1
  permit_params :name, :price, :description

  show do |product|
    attributes_table do
      row :name
      row :price
      row :image do
        image_tag(ad.image.url(:thumb))
      end
    end
  end

  form do |f|
    f.inputs "Product Info" do
      f.input :name
      f.input :price
      f.input :description
      f.input :image, required: false
    end
    f.actions
  end
end
