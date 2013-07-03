class RenameFileToLinkInClips < ActiveRecord::Migration
  def change
    rename_column :clips, :file, :link
  end
end
