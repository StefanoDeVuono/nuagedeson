class Likes < ActiveRecord::Base
  attr_accessible :sound_id, :user_id

  belongs_to :sound
  belongs_to :user
end
