class Comment < ActiveRecord::Base
  attr_accessible :body, :time, :user_id, :sound_id

  has_one :user, through: :user_comments
  belongs_to :clip, foreign_key: :sound_id
end
