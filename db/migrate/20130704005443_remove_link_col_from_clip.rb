class RemoveLinkColFromClip < ActiveRecord::Migration
  def change
    remove_column :clips, :link
  end
end
