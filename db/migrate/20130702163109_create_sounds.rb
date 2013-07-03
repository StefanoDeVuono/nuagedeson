class CreateSounds < ActiveRecord::Migration
  def change
    create_table :sounds do |t|
      t.string :file
      t.integer :owner_id

      t.timestamps
    end
  end
end
