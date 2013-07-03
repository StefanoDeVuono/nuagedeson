class UserComment < ActiveRecord::Base
  attr_accessible :comment_id, :sound_id, :user_id

  belongs_to :user
  belongs_to :sound
end
