class UsersController < ApplicationController
  def index
    @user = current_user
    @clip = Clip.new
    @clips = @user.clips
    
    @clips.each {|clip| clip.current_user = @user}
    respond_to do |f|
      f.html { render html: @clip }
      f.json { render json: @clips.to_json(methods:
        [:link_url, :comments, :favourites, :current_user_likes?, :image_url, :name]
      )}
    end 
  end

end
