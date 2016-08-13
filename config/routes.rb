Rails.application.routes.draw do
  # home route
  root to: 'products#index'

  # adds restful routes for product resource
  resources :products
end
