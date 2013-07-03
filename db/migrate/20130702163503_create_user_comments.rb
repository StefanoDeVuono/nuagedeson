class CreateUserComments < ActiveRecord::Migration
  def change
    create_table :user_comments do |t|
      t.integer :user_id
      t.integer :sound_id
      t.integer :comment_id

      t.timestamps
    end
  end
end
