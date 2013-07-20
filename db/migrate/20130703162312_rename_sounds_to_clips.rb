class RenameSoundsToClips < ActiveRecord::Migration
  def up
    rename_table :sounds, :clips
  end

 def down
    rename_table :clips, :sounds
 end
end
