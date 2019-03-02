class RemoveGlobalUniquenessForNoebooks < ActiveRecord::Migration[5.2]
  def change
    remove_index :notebooks, :notebook_title
    add_index :notebooks, :notebook_title
    add_index :notebooks, [:user_id, :notebook_title], unique: true
  end
end
