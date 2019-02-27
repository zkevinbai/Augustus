# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    after_initialize :ensure_session_token
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } # does this work?
    validates :password, length: {minimum: 7, allow_nil: true}

    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
    end

    def password
        @password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def self.find_by_credentials(credential, password)
        @user = User.where(email: credential).or(
                User.where(username: credential)
                ).first

        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end
end
