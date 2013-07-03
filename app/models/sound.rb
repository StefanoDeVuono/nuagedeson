require 'debugger'


class Sound < ActiveRecord::Base
  attr_accessible :file, :owner_id

  belongs_to :user, foreign_key: :owner_id
  has_many :likes
  has_many :admirers, through: :likes

  def upload(data)
    name = data[:file].original_filename
    directory = 'public/sounds'
    path = File.join(directory, name)
    self.file = path
    self.save
    File.open(path, "wb") { |file| file.write(data[:file].read) }
  end

end
