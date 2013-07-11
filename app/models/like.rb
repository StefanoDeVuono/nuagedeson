class Like < ActiveRecord::Base
  attr_accessible :sound_id, :user_id

  validates :user_id, presence: true
  validates :user_id, uniqueness: { scope: :sound_id }

  belongs_to :sound, class_name: 'Clip'
  belongs_to :user
end
