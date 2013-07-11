class CommentsController < ApplicationController
  def create
    @comment = Comment.new(params[:comment])
    puts; puts; puts
    puts params[:comment]
    @comment.user_id = current_user.id
    puts; puts; puts
    @comment.save(params[:comment])
    
    render json: @comment
  end
end
