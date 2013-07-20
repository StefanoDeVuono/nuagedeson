class Like < ActiveRecord::Base
  attr_accessible :clip_id, :user_id

  validates :user_id, presence: true
  validates :user_id, uniqueness: { scope: :clip_id }

  belongs_to :clip
  belongs_to :user
end
