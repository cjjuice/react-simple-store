Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # home route
  root to: 'products#index'

  # adds restful routes for product resource
  resources :products

  # cart routes
  get '/cart', to: 'carts#index', as: 'cart'
  post '/cart', to: 'carts#add_item', as: 'add_cart_item'
  delete '/cart', to: 'carts#destroy_item', as: 'destroy_cart_item'
end
