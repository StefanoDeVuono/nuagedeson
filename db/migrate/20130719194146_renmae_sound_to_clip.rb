class RenmaeSoundToClip < ActiveRecord::Migration
  def change
    rename_column :comments, :sound_id, :clip_id
    rename_column :likes, :sound_id, :clip_id
  end
end
