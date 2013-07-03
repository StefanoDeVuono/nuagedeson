class RenameSoundsToClips < ActiveRecord::Migration
  def change
    rename_table :sounds, :clips
  end
end
