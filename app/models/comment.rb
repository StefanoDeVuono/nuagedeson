class Comment < ActiveRecord::Base
  attr_accessible :body, :time, :user_id, :sound_id

  has_one :user, through: :user_comments
end
