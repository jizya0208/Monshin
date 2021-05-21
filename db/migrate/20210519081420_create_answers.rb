class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.string :q1
      t.string :q2
      t.string :q3
      t.timestamps
    end
  end
end
