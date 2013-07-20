class RootController < ApplicationController
  def index
    @user  = User.new
    @clip = Clip.new
  end
end
