class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_cart

  private

  def current_cart
    if session[:cart_id]
      @current_cart ||= Cart.find(session[:cart_id])
    else
      cart = Cart.create
      session[:cart_id] = cart.id
      @current_cart = cart
    end
  end
end
