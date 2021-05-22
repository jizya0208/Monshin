class Answer < ApplicationRecord
  belongs_to :pacient
  with_options presence :true do
    validates :a1 
    validates :a2
    validates :a3
  end
end
