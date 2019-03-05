class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :note_title
      t.string :note_body
      t.integer :notebook_id, null: false
      t.timestamps
    end

    add_index :notes, :notebook_id
  end
end
