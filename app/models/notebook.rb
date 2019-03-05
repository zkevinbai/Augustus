# == Schema Information
#
# Table name: notebooks
#
#  id             :bigint(8)        not null, primary key
#  notebook_title :string           not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Notebook < ApplicationRecord
    validates :notebook_title, :user_id, presence: true
    validates :notebook_title, uniqueness: { scope: [:user_id] }

    belongs_to :user
    has_many :notes
end
