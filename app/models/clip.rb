require 'net/http/post/multipart'

class Clip < ActiveRecord::Base
  attr_accessible :link, :owner_id, :likes_attributes, :link_file_name, :title

  attr_accessor :current_user

  belongs_to :user, foreign_key: :owner_id
  has_many :likes
  has_many :admirers, through: :likes, source: :user
  has_many :comments

  accepts_nested_attributes_for :likes

  has_attached_file :link,
    s3_host_name: 's3-us-west-2.amazonaws.com'
    
  has_attached_file :image,
    s3_host_name: 's3-us-west-2.amazonaws.com'

  scope :top_five, joins('LEFT JOIN likes ON clips.id = likes.clip_id').
    select('clips.*, count(likes.clip_id) as faves').
    group('clips.id').
    order('faves desc').
    limit(5)

  def as_json(options = {})
    super(options.merge({link: 'self.link.url'}))
  end

  def link_url
    link.url
  end

  def favourites
    likes.length
  end

  def name
    self.user.name || self.user.email
  end

  def image_url
    image.url
  end

  def current_user_likes?(user=nil)
    user ||= current_user
    return true if user.nil?
    admirer_ids.include? user.id
  end

  def self.make_waveform(file)
    color = "#5A1C5C"
    url = URI.parse('http://unabellidea.com/song.php')
    res =  File.open(file) do |mp3|
      req = Net::HTTP::Post::Multipart.new url.path,
        mp3: UploadIO.new(mp3, "audio/mp3", "file.mp3"),
        width: 500,
        height: 100,
        foreground: color,
        background: ''
      Net::HTTP.start(url.host, url.port) do |http|
        http.request(req)
      end
    end
    res.body
  end

  # def upload(data)
  #   name = data[:link].original_filename
  #   directory = 'public/clips'
  #   path = File.join(directory, name)
  #   self.link = path
  #   self.save
  #   File.open(path, "wb") { |file| file.write(data[:link].read) }
  # end

end
