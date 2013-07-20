class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  attr_accessor :login

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:facebook, :github]

  has_many :clips, foreign_key: :owner_id
  has_many :comments
  has_many :likes
  has_many :favourited_clips, class_name: 'Like'

  has_attached_file :photo,
    s3_host_name: 's3-us-west-2.amazonaws.com'

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :login, :email, :password, :password_confirmation,
                  :remember_me, :provider, :uid, :photo

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

  def self.find_for_oauth(auth, signed_in_resource=nil)
    user = User.where(provider: auth.provider, uid: auth.uid).first
    unless user
      user = User.create(name: auth.extra.raw_info.name,
                           provider: auth.provider,
                           uid: auth.uid,
                           email: auth.info.email,
                           photo: URI.parse(auth.info.image),
                           password: Devise.friendly_token[0,20]
                           )
    end
    user
  end

  # def self.new_with_session(params, session)
  #   # debugger
  #   super.tap do |user|
  #     if data = session["devise.oauth"] && session["devise.oauth"]["extra"]["raw_info"]
  #       user.email = data["email"] if user.email.blank?
  #     end
  #   end
  # end

end
