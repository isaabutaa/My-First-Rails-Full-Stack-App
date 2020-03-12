class User < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :title, presence: true
    validates :image, presence: true
end
