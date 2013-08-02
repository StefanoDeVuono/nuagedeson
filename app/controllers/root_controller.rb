class RootController < ApplicationController

  skip_before_filter :authenticate_user!

  def index
    # render json: current_user.to_json
    # if user_signed_in?
    #   # render regular controls
    # else
    #   # render sign-in form
    #   render json: "{'hello': \"I'm json\"}"
    # end
  end
end
