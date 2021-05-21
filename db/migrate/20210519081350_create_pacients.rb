class CreatePacients < ActiveRecord::Migration[5.0]
  def change
    create_table :pacients do |t|
      t.integer :pacient_id
      t.string :name
      t.date :birthday

      t.timestamps
    end
  end
end
