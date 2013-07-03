require 'debugger'

class SoundsController < ApplicationController

  def create
    @sound = Sound.new({owner_id: current_user.id})
    puts;puts;
    puts params
    puts; puts
    if @sound.upload(params[:sound])
      render json: @sound
    end
   #File.open(path, "wb") { |f| f.write(upload['datafile'].read) }
  end

end
