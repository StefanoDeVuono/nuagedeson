class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :authenticate_user!

  # def render_login_logout
  #   if user_signed_in?
  # end

end
