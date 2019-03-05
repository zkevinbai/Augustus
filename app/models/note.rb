# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  note_title  :string
#  note_body   :string
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
end
