class TieCommentsDirectlyToUsers < ActiveRecord::Migration
  def up
    drop_table :user_comments
    add_column :comments, :user_id, :integer
    add_column :comments, :sound_id, :integer
  end

  def down
    create_table :user_comments do |t|
      t.integer :user_id
      t.integer :sound_id

      t.timestamps
    end

    remove_column :comments, :user_id
    remove_column :coments, :sound_id
  end
end
