class ClipsController < ApplicationController

  def index
    @clips = current_user.clips
    render json: @clips
  end

  def create
    @clip = Clip.new({owner_id: current_user.id})
    puts;puts;
    puts params
    puts; puts
    link = params[:clip][:link]
    @clip.link = link
    if @clip.save
      render json: @clip
      
    end
   #File.open(path, "wb") { |f| f.write(upload['datafile'].read) }
  end

end
