Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # home route
  root to: 'products#index'

  # adds restful routes for product resource
  resources :products

  # cart routes
  get '/cart', to: 'carts#show', as: 'cart'
end
