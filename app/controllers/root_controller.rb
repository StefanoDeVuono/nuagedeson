class RootController < ApplicationController
  def index
    @user  = current_user
    @clip = Clip.new
  end
end
