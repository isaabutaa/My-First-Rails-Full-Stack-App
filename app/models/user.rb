class User < ApplicationRecord
    validates :name, presence:true
    validates :title, presence:true, unless: :position
    validates :position, presence:true, unless: :title
    validates :direct_reports, presence:true
end
