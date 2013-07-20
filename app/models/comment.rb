class Comment < ActiveRecord::Base
  attr_accessible :body, :time, :user_id, :clip_id

  validates :body, presence: true

  belongs_to :user
  belongs_to :clip
  # has_one :img, through: :user, source: :photo

  def photo
    self.user.photo
  end

  def as_json(options = {})
    super(options).tap do |comment|
      comment['photo'] = self.photo
    end
  end
end
