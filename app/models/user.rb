class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  attr_accessor :login

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :sounds, foreign_key: :owner_id
  has_many :user_comments
  has_many :comments, through: :user_comments
  has_many :likes
  has_many :favourite_m

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :login, :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body

  def self.find_first_by_auth_conditions(various_conditions)
    conditions = various_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(
                              ["lower(name) = :value OR lower(email) = :value",
                              {value: login.downcase}]
                              ).first
    else
      where(conditions).first
    end
  end
end
