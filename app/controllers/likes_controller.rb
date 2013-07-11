require 'debugger'
class LikesController < ApplicationController
  def create
    @like = Like.new(params[:likes])
    @like.user = current_user
    if @like.save
      respond_to do |f|
        f.html { render html: @like }
        f.json { render json: @like }
      end
    else
      render json: nil, status: 422
    end 
  end

  def destroy
    @like = Like.find_by_user_id_and_sound_id(current_user.id, params[:likes][:sound_id])
    if @like.destroy
      respond_to do |f|
        f.html { render html: @like }
        f.json { render json: @like }
      end
    else
      render json: nil, status: 422
    end 
  end
end
