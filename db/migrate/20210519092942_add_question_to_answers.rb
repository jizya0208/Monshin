class AddQuestionToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :q1, :string
  end
end
